import { Link } from 'react-router-dom';

// Mock user info:
const user = {
  name: 'Rahul Sharma',
  aadhaar: '1234 4567 7890',
  phone: '+91 98765 43210',
  email: 'rahuls@example.com',
  dob: '1999-04-14'
};

const MyProfile = () => (
  <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
    <div className="w-full max-w-lg">
      <Link to="/dashboard" className="inline-flex items-center text-gray-700 hover:text-indigo-600 mb-6 font-medium">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Dashboard
      </Link>
      <div className="bg-white rounded-3xl shadow-2xl border border-indigo-100 p-8">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-purple-600">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{user.name}</h2>
          <p className="text-gray-500">Aadhaar: <span className="font-semibold">{user.aadhaar}</span></p>
        </div>
        <div className="space-y-5">
          <div className="flex justify-between font-medium text-gray-700">
            <span>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between font-medium text-gray-700">
            <span>Mobile:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between font-medium text-gray-700">
            <span>DOB:</span>
            <span>{user.dob}</span>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition mr-2">
            Edit Profile
          </button>
          <button className="px-6 py-2 border-2 border-red-500 text-red-600 rounded-xl font-bold hover:bg-red-50 transition">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default MyProfile;
