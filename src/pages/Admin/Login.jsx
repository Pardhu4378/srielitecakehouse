import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { ArrowLeft, Lock, Mail, Eye, EyeOff, RefreshCw, AlertCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isFirebasePlaceholder = auth.app.options.apiKey === "YOUR_API_KEY" || !auth.app.options.apiKey;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isFirebasePlaceholder) {
        // If placeholder config, allow demo access with admin/admin
        if (email === 'admin@srielite.com' && password === 'admin123') {
          sessionStorage.setItem('isAdminDemo', 'true');
          navigate('/admin/dashboard');
        } else {
          throw new Error('Invalid demo credentials. Use: admin@srielite.com / admin123');
        }
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
<div className="absolute inset-0">
  <img
    src="/assets/products/cakes/birthday_chocolate.png"
    alt="Cake"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>
</div>
      {/* Back Link */}
      <div className="absolute top-6 left-6 z-20">
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#C8944A] text-sm font-bold transition-colors"
        >
          <ArrowLeft size={18} /> Back to Site
        </button>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6">

  <div className="text-center mb-8">
    <img
      src="/logo.png"
      alt="Logo"
      className="mx-auto h-36 w-36 rounded-full border border-[#C8944A] object-contain mb-4"
    />

    <h2 className="font-playfair text-6xl font-bold text-white">
      Admin Portal
    </h2>

    <p className="mt-2 text-[#F5E6CC] text-lg">
      Sri Elite Cake House Portal
    </p>
  </div>

  <div className="bg-white/10 backdrop-blur-xl py-8 px-8 border border-white/20 rounded-3xl shadow-2xl">          
          {/* Firebase Placeholder Notice */}
          {isFirebasePlaceholder && (
            <div className="mb-6 bg-[#F5E6CC]/70 border-l-4 border-[#C8944A] p-6 rounded-r-xl w-full">
              <div className="flex gap-2.5">
                <AlertCircle className="text-[#C8944A] shrink-0" size={18} />
                <div> 
                  <p className="text-sm font-bold text-[#3E1F00] mt-3 bg-[#F5E6CC] px-3 py-2 rounded break-all">
                    Use: admin@srielite.com / admin123
                  </p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-xl text-xs flex gap-2 border border-red-100">
              <span className="shrink-0">⚠️</span>
              <p>{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#8B5E3C]">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@srielite.com"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-[#C8944A]/40 rounded-xl text-[#3E1F00] placeholder-[#8B5E3C]/60 outline-none focus:border-[#C8944A]"></input>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#8B5E3C]">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-white border border-[#C8944A]/40 rounded-xl text-[#3E1F00] placeholder-[#8B5E3C]/60 outline-none focus:border-[#C8944A]"                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8B5E3C] hover:text-[#C8944A]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-3"
              >
                {loading ? (
                  <RefreshCw className="animate-spin" size={16} />
                ) : (
                  'Sign In to Dashboard'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
