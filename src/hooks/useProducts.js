import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { PRODUCTS } from '../data/siteData';

export default function useProducts() {
  const [products, setProducts] = useState(PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Check if Firebase is using placeholder credentials
      const isPlaceholder = db.app.options.apiKey === "YOUR_API_KEY" || !db.app.options.apiKey;
      
      if (isPlaceholder) {
        // Fallback to seed data
        setProducts(PRODUCTS);
        setError(null);
        setLoading(false);
        return;
      }

      const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        // If Firestore is empty, we show seed data
        setProducts(PRODUCTS);
      } else {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        
        // Group by category
        const grouped = {
          cakes: [], bento: [], donuts: [], muffins: [], cupcakes: [], brownies: [], dreamtin: []
        };
        
        list.forEach(item => {
          const cat = item.category || 'cakes';
          if (!grouped[cat]) grouped[cat] = [];
          grouped[cat].push(item);
        });

        // For categories that have no items in firestore, merge from static seed data
        Object.keys(PRODUCTS).forEach(cat => {
          if (grouped[cat].length === 0) {
            grouped[cat] = PRODUCTS[cat];
          }
        });

        setProducts(grouped);
      }
      setError(null);
    } catch (err) {
      console.warn("Firestore products fetch failed, using local seed data:", err);
      // Fail gracefully: use local data
      setProducts(PRODUCTS);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts };
}
