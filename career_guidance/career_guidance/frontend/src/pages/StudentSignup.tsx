// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const StudentSignup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     dateOfBirth: '',
//     agreeToTerms: false,
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newErrors: { [key: string]: string } = {};
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = 'Passwords do not match';
//     if (formData.password.length < 8)
//       newErrors.password = 'Password must be at least 8 characters';
//     if (!formData.agreeToTerms)
//       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     navigate('/student-login');
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//     if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Student Sign Up</h1>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   required
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="input-field"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="input-field"
//                   placeholder="john@example.com"
//                 />
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="input-field"
//                   placeholder="+91 9876543210"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
//                   Date of Birth *
//                 </label>
//                 <input
//                   type="date"
//                   id="dateOfBirth"
//                   name="dateOfBirth"
//                   required
//                   value={formData.dateOfBirth}
//                   onChange={handleChange}
//                   className="input-field"
//                 />
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password *
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="input-field"
//                   placeholder="Minimum 8 characters"
//                 />
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                   Confirm Password *
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="input-field"
//                   placeholder="Re-enter password"
//                 />
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
//                 )}
//               </div>
//             </div>
//             <div className="flex items-start">
//               <input
//                 type="checkbox"
//                 id="agreeToTerms"
//                 name="agreeToTerms"
//                 checked={formData.agreeToTerms}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-primary-600 border-gray-300 rounded mt-1"
//               />
//               <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
//                 I agree to the Terms and Conditions and Privacy Policy
//               </label>
//             </div>
//             {errors.agreeToTerms && (
//               <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
//             )}
//             <button type="submit" className="w-full btn-primary">
//               Create Account
//             </button>
//           </form>
//           <p className="mt-8 text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link to="/student-login" className="text-primary-600 font-semibold">
//               Sign in here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentSignup;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (formData.password.length < 8)
      newErrors.password = 'Password must be at least 8 characters';
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    navigate('/student-login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/student-login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone and DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    errors.password
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Minimum 8 characters"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    errors.confirmPassword
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Re-enter password"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-500">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              {errors.agreeToTerms && (
                <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="ml-2">Google</span>
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        {/* College Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Are you a college administrator?{' '}
            <Link to="/college-signup" className="font-medium text-blue-600 hover:text-blue-500">
              Register your institution
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
