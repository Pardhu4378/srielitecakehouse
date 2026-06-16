import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function useReviews(onlyApproved = true) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const isPlaceholder = db.app.options.apiKey === "YOUR_API_KEY" || !db.app.options.apiKey;
      
      if (isPlaceholder) {
    setReviews([]);
    setError(null);
    setLoading(false);
    return;
}

      let q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
      if (onlyApproved) {
        q = query(collection(db, 'reviews'), where('approved', '==', true), orderBy('createdAt', 'desc'));
      }
      
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
    setReviews([]);
      } else {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setReviews(list);
      }
      setError(null);
    } catch (err) {
      console.warn("Firestore reviews fetch failed, using local seed data:", err);
      setReviews([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [onlyApproved]);

  return { reviews, loading, error, refetch: fetchReviews };
}
