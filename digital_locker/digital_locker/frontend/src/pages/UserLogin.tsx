import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    aadhaarOrEmail: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-gray-700 hover:text-indigo-600 mb-6 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-indigo-100">
          <div className="relative bg-linear-to-br from-indigo-600 to-purple-600 p-10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-8 -mb-8"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Sign In to DigiLocker</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="aadhaarOrEmail" className="block text-sm font-bold text-gray-700 mb-2">
                  Aadhaar Number or Email
                </label>
                <input
                  type="text"
                  id="aadhaarOrEmail"
                  name="aadhaarOrEmail"
                  required
                  value={formData.aadhaarOrEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none"
                  placeholder="Aadhaar or email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="px-8 py-6 bg-linear-to-r from-gray-50 to-indigo-50 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/user-register" className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
