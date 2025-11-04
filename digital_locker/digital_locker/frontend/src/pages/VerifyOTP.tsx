import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In demo, accept any 6-digit OTP
    if (otp.length !== 6) {
      setError('Please enter a 6-digit OTP sent to your mobile.');
      return;
    }
    setError('');
    navigate('/user-login');
  };

  const phone = localStorage.getItem('registrationPhone');

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 px-4">
      <div className="w-full max-w-md">
        <Link to="/user-register" className="inline-flex items-center text-gray-700 hover:text-indigo-600 mb-6 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Registration
        </Link>
        <div className="bg-white rounded-3xl shadow-2xl border border-indigo-100 px-8 py-10">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-purple-600">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l1-2m0 0l1-2m16 12v3m-6-8h.01M12 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Verify Your Mobile</h2>
            <p className="text-gray-600 text-sm">
              Enter the 6-digit OTP sent to <span className="font-bold text-indigo-600">{phone ? `+91 ${phone}` : 'your mobile'}</span>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={otp}
              onChange={e => setOTP(e.target.value)}
              maxLength={6}
              required
              className="w-full tracking-widest p-3 border-2 border-gray-200 rounded-xl text-xl text-center focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
              placeholder="Enter OTP"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Verify & Login
            </button>
          </form>
          <div className="text-center mt-6 text-sm text-gray-500">
            Didn't receive OTP? <button className="text-indigo-600 font-semibold hover:underline">Resend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
