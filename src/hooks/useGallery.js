import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

const DEFAULT_GALLERY = [
  { id: 'g1', imageUrl: '/gallery/gallery_1.jpg.jpeg', category: 'cakes', caption: 'Elegant Wedding Cake' },
  { id: 'g2', imageUrl: '/gallery/gallery_2.jpg.jpeg', category: 'cakes', caption: 'Custom Celebration Cake' },
  { id: 'g3', imageUrl: '/gallery/gallery_3.jpg.jpeg', category: 'cakes', caption: 'Fresh Birthday Cake' },
  { id: 'g4', imageUrl: '/products/cakes/birthday_chocolate.png', category: 'cakes', caption: 'Rich Chocolate Fudge Cake' },
  { id: 'g5', imageUrl: '/products/donuts/chocolate.jpg', category: 'donuts', caption: 'Glazed Chocolate Donuts' },
  { id: 'g6', imageUrl: '/products/muffins/chocolate.jpg', category: 'muffins', caption: 'Moist Double Chocolate Muffins' },
  { id: 'g7', imageUrl: '/products/cupcakes/redvelvet.jpg', category: 'cupcakes', caption: 'Velvety Red Velvet Cupcakes' },
  { id: 'g8', imageUrl: '/products/brownies/fudge.jpg', category: 'brownies', caption: 'Classic Fudgy Brownies' },
  { id: 'g9', imageUrl: '/products/dreamtin/dreamtin.png', category: 'dreamtin', caption: 'delicious dream tin cakes' },
];

export default function useGallery() {
  const [gallery, setGallery] = useState(DEFAULT_GALLERY);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const isPlaceholder = db.app.options.apiKey === "YOUR_API_KEY" || !db.app.options.apiKey;
      
      if (isPlaceholder) {
        setGallery(DEFAULT_GALLERY);
        setError(null);
        setLoading(false);
        return;
      }

      const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        setGallery(DEFAULT_GALLERY);
      } else {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setGallery(list);
      }
      setError(null);
    } catch (err) {
      console.warn("Firestore gallery fetch failed, using local seed data:", err);
      setGallery(DEFAULT_GALLERY);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return { gallery, loading, error, refetch: fetchGallery };
}
