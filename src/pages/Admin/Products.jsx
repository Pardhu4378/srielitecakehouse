import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import useProducts from '../../hooks/useProducts';
import { CATEGORIES, CAKE_OCCASIONS } from '../../data/siteData';
import { ArrowLeft, Plus, Edit2, Trash2, Check, X, RefreshCw, Eye, EyeOff } from 'lucide-react';

export default function Products() {
  const navigate = useNavigate();
  const { products, loading, refetch } = useProducts();
  const [localProducts, setLocalProducts] = useState({});
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState('cakes');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    priceValue: '',
    category: 'cakes',
    occasion: 'all',
    unit: 'per KG',
    image: '',
    available: true
  });

  const isDemo = sessionStorage.getItem('isAdminDemo') === 'true' || db.app.options.apiKey === "YOUR_API_KEY" || !db.app.options.apiKey;

  useEffect(() => {
    if (products && Object.keys(products).length > 0) {
      setLocalProducts(products);
    }
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleEditClick = (product, category) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      priceValue: product.priceValue || '',
      category: category,
      occasion: product.occasion || 'all',
      unit: product.unit || 'per piece',
      image: product.image || '',
      available: product.available !== false
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddNewClick = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      priceValue: '',
      category: activeCategoryTab,
      occasion: 'all',
      unit: activeCategoryTab === 'cakes' ? 'per KG' : activeCategoryTab === 'bento' ? 'per box' : 'per piece',
      image: '',
      available: true
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);

    const docData = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      priceValue: Number(formData.priceValue) || 0,
      category: formData.category,
      occasion: formData.category === 'cakes' ? formData.occasion : 'all',
      unit: formData.unit,
      image: formData.image || '/logo.png',
      available: formData.available,
      updatedAt: new Date().toISOString()
    };

    try {
      if (isDemo) {
        // Simulate local state update
        const updatedGroup = { ...localProducts };
        
        if (editingProduct) {
          // Edit local
          const oldCat = editingProduct.category || activeCategoryTab;
          // Remove from old category
          updatedGroup[oldCat] = updatedGroup[oldCat].filter(p => p.id !== editingProduct.id);
          // Add to new category
          const updatedItem = { ...editingProduct, ...docData };
          if (!updatedGroup[docData.category]) updatedGroup[docData.category] = [];
          updatedGroup[docData.category].unshift(updatedItem);
        } else {
          // Add new local
          const newItem = { id: `mock_${Date.now()}`, ...docData };
          if (!updatedGroup[docData.category]) updatedGroup[docData.category] = [];
          updatedGroup[docData.category].unshift(newItem);
        }
        
        setLocalProducts(updatedGroup);
        alert(`Demo success: Product ${editingProduct ? 'updated' : 'added'} successfully (Local Session Only)`);
      } else {
        // Firestore Save
        if (editingProduct) {
          const docRef = doc(db, 'products', editingProduct.id);
          await updateDoc(docRef, docData);
        } else {
          await addDoc(collection(db, 'products'), {
            ...docData,
            createdAt: serverTimestamp()
          });
        }
        await refetch();
      }
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      console.error(err);
      alert('Error saving product: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteClick = async (product, category) => {
    if (!window.confirm(`Are you sure you want to delete ${product.name}?`)) return;

    try {
      if (isDemo) {
        const updatedGroup = { ...localProducts };
        updatedGroup[category] = updatedGroup[category].filter(p => p.id !== product.id);
        setLocalProducts(updatedGroup);
        alert('Demo success: Product removed (Local Session Only)');
      } else {
        await deleteDoc(doc(db, 'products', product.id));
        await refetch();
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting product: ' + err.message);
    }
  };

  const activeProducts = localProducts[activeCategoryTab] || [];

  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/admin/dashboard" 
          className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#C8944A] text-sm font-bold transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F5E6CC] pb-6 mb-8">
          <div>
            <h1 className="font-playfair font-bold text-3xl text-[#3E1F00]">Manage Products</h1>
            <p className="text-[#8B5E3C] text-sm mt-1">
              Add, edit, or delete items from the customer-facing menu. {isDemo && <span className="text-amber-600 font-bold">(Demo Mode)</span>}
            </p>
          </div>
          {!showForm && (
            <button 
              onClick={handleAddNewClick}
              className="btn-primary text-xs py-2.5 inline-flex items-center gap-2"
            >
              <Plus size={16} /> Add New Product
            </button>
          )}
        </div>

        {/* Add / Edit Form */}
        {showForm && (
          <div className="bg-white border border-[#F5E6CC] rounded-3xl p-6 md:p-8 shadow-sm mb-10">
            <div className="flex items-center justify-between border-b border-[#F5E6CC] pb-4 mb-6">
              <h2 className="font-playfair font-bold text-[#3E1F00] text-xl">
                {editingProduct ? `Edit Product: ${editingProduct.name}` : 'Add New Product'}
              </h2>
              <button 
                onClick={() => { setShowForm(false); setEditingProduct(null); }}
                className="text-[#8B5E3C] hover:text-[#3E1F00]"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Chocolate Fudge Brownie, Strawberry Cupcake, etc."
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] outline-none focus:border-[#C8944A] transition-colors text-sm"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.emoji} {cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Display Price (with symbol)</label>
                  <input
                    type="text"
                    name="price"
                    required
                    placeholder="₹500, ₹60, Custom, etc."
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Numeric Price (for sorting)</label>
                  <input
                    type="number"
                    name="priceValue"
                    required
                    placeholder="500, 60, etc."
                    value={formData.priceValue}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Pricing Unit</label>
                  <input
                    type="text"
                    name="unit"
                    required
                    placeholder="per KG, per piece, per box, onwards"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm"
                  />
                </div>
              </div>

              {formData.category === 'cakes' && (
                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Cake Occasion Filter</label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] outline-none focus:border-[#C8944A] transition-colors text-sm"
                  >
                    <option value="all">🎂 Show in All Categories</option>
                    {CAKE_OCCASIONS.map(occ => (
                      <option key={occ.id} value={occ.id}>{occ.icon} {occ.label}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Description</label>
                <textarea
                  name="description"
                  required
                  rows="3"
                  placeholder="Describe the taste, frostings, toppings..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Product Image Path / URL</label>
                  <input
                    type="text"
                    name="image"
                    placeholder="/products/cakes/birthday_chocolate.png"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm"
                  />
                </div>

                <div className="flex items-center pt-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="available"
                      checked={formData.available}
                      onChange={handleInputChange}
                      className="w-5 h-5 accent-[#C8944A] rounded"
                    />
                    <span className="text-sm font-bold text-[#3E1F00] uppercase tracking-wider">Product Available in Stock</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#F5E6CC]">
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditingProduct(null); }}
                  className="btn-outline text-xs py-2 px-5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="btn-primary text-xs py-2 px-6"
                >
                  {actionLoading ? <RefreshCw className="animate-spin" size={14} /> : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Category Tabs Selector */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-[#F5E6CC]">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryTab(cat.id)}
              className={`px-4 py-2 rounded-full font-lato font-bold text-xs uppercase tracking-wide transition-all border shrink-0 ${
                activeCategoryTab === cat.id
                  ? 'bg-[#3E1F00] text-white border-[#3E1F00]'
                  : 'bg-white text-[#8B5E3C] border-[#F5E6CC] hover:border-[#C8944A]'
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Product Table / List */}
        {loading ? (
          <div className="text-center py-20 text-[#8B5E3C]">
            <RefreshCw className="animate-spin mx-auto mb-4" size={24} />
            <p className="text-sm">Fetching products...</p>
          </div>
        ) : activeProducts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#F5E6CC] rounded-3xl">
            <span className="text-4xl block mb-2">🧁</span>
            <p className="text-[#8B5E3C] font-semibold">No products in this category.</p>
            <button onClick={handleAddNewClick} className="text-[#C8944A] text-xs font-bold hover:underline mt-2">
              + Add the first product
            </button>
          </div>
        ) : (
          <div className="bg-white border border-[#F5E6CC] rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#3E1F00] text-[#F5E6CC] text-xs uppercase font-bold tracking-wider">
                    <th className="px-6 py-4">Image</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5E6CC]">
                  {activeProducts.map(p => (
                    <tr key={p.id} className="hover:bg-[#FFFDF9]/40 transition-colors">
                      <td className="px-6 py-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F5E6CC]/20 border border-[#F5E6CC] flex items-center justify-center text-lg">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                            onError={e => {
                              e.target.style.display = 'none';
                              e.target.parentNode.innerHTML = '🎂';
                            }}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-bold text-[#3E1F00]">{p.name}</p>
                          <p className="text-xxs text-[#8B5E3C] mt-0.5 line-clamp-1 max-w-xs">{p.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-[#3E1F00]">{p.price}</span>
                        <span className="text-xxs text-[#8B5E3C] font-lato"> /{p.unit?.replace('per ', '')}</span>
                      </td>
                      <td className="px-6 py-4">
                        {p.available !== false ? (
                          <span className="bg-green-100 text-green-800 text-xxs font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                            <Check size={10} /> Active
                          </span>
                        ) : (
                          <span className="bg-red-100 text-red-800 text-xxs font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                            <X size={10} /> Out of Stock
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEditClick(p, activeCategoryTab)}
                            className="p-1.5 rounded-lg bg-[#C8944A]/10 text-[#C8944A] hover:bg-[#C8944A] hover:text-white transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(p, activeCategoryTab)}
                            className="p-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-700 hover:text-white transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
