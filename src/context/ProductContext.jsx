import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { PRODUCTS } from '../data/siteData';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const isPlaceholder = db.app.options.apiKey === "YOUR_API_KEY" || !db.app.options.apiKey;
      
      if (isPlaceholder) {
        setProducts(PRODUCTS);
        setError(null);
        setLoading(false);
        return;
      }

      const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        // Database is empty! Auto-seed Firestore with default products
        console.log("Firestore products collection is empty. Seeding default database...");
        
        const seedList = [];
        for (const [category, items] of Object.entries(PRODUCTS)) {
          for (const item of items) {
            const docData = {
              name: item.name,
              description: item.description,
              price: item.price,
              priceValue: item.priceValue,
              unit: item.unit,
              image: item.image,
              category: category,
              occasion: item.occasion || 'all',
              available: item.available !== false,
              createdAt: new Date().toISOString()
            };
            
            // Add doc to firestore
            const docRef = await addDoc(collection(db, 'products'), docData);
            seedList.push({ id: docRef.id, ...docData });
          }
        }

        // Group the seeded list to update local state immediately
        const grouped = groupProducts(seedList);
        setProducts(grouped);
        console.log("Firestore auto-seeding completed!");
      } else {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        
        const grouped = groupProducts(list);
        setProducts(grouped);
      }
      setError(null);
    } catch (err) {
      console.warn("Firestore products fetch failed. Falling back to static siteData:", err);
      setProducts(PRODUCTS);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper to group list of products by category slug
  const groupProducts = (list) => {
    const grouped = {
      cakes: [], bento: [], donuts: [], muffins: [], cupcakes: [], brownies: [], kunafa: []
    };
    
    list.forEach(item => {
      const cat = item.category || 'cakes';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    // Make sure category structures match data specifications even if empty
    Object.keys(PRODUCTS).forEach(cat => {
      if (grouped[cat].length === 0) {
        grouped[cat] = PRODUCTS[cat];
      }
    });

    return grouped;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, refetch: fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductsContext must be used within a ProductProvider');
  }
  return context;
}
