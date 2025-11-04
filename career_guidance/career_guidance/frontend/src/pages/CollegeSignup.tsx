// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const CollegeSignup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     collegeName: '',
//     registrationNumber: '',
//     address: '',
//     city: '',
//     state: '',
//     contactPerson: '',
//     email: '',
//     phone: '',
//     website: '',
//     accreditation: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false,
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('College registration submitted successfully!');
//     navigate('/');
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as HTMLInputElement).checked;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">College Registration</h1>
//           <p className="text-center text-gray-600 mb-8">
//             Register your institution to connect with thousands of prospective students
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* College Information */}
//             <div className="border-b pb-6">
//               <h2 className="text-xl font-semibold mb-4 text-gray-700">Institution Information</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-2">
//                     College/University Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="collegeName"
//                     name="collegeName"
//                     required
//                     value={formData.collegeName}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="ABC Institute of Technology"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-2">
//                     Registration Number *
//                   </label>
//                   <input
//                     type="text"
//                     id="registrationNumber"
//                     name="registrationNumber"
//                     required
//                     value={formData.registrationNumber}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="REG123456"
//                   />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//                     Address *
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     required
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Street address"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
//                     City *
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     required
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Mumbai"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
//                     State/Province *
//                   </label>
//                   <input
//                     type="text"
//                     id="state"
//                     name="state"
//                     required
//                     value={formData.state}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Maharashtra"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="accreditation" className="block text-sm font-medium text-gray-700 mb-2">
//                     Accreditation *
//                   </label>
//                   <input
//                     type="text"
//                     id="accreditation"
//                     name="accreditation"
//                     required
//                     value={formData.accreditation}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="NAAC A+, NBA"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
//                     Website
//                   </label>
//                   <input
//                     type="url"
//                     id="website"
//                     name="website"
//                     value={formData.website}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="https://www.college.edu"
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* Contact Information */}
//             <div className="border-b pb-6">
//               <h2 className="text-xl font-semibold mb-4 text-gray-700">Contact Information</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
//                     Contact Person *
//                   </label>
//                   <input
//                     type="text"
//                     id="contactPerson"
//                     name="contactPerson"
//                     required
//                     value={formData.contactPerson}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Dr. John Smith"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="admissions@college.edu"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="+91 9876543210"
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* Account Credentials */}
//             <div>
//               <h2 className="text-xl font-semibold mb-4 text-gray-700">Account Credentials</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                     Password *
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Minimum 8 characters"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                     Confirm Password *
//                   </label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="input-field"
//                     placeholder="Re-enter password"
//                   />
//                 </div>
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
//                 required
//               />
//               <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
//                 I agree to the Terms and Conditions for Institutions
//               </label>
//             </div>
//             <button type="submit" className="w-full btn-primary">
//               Register Institution
//             </button>
//           </form>
//           <p className="mt-8 text-center text-sm text-gray-600">
//             For student registration,{' '}
//             <Link to="/student-signup" className="text-primary-600 font-semibold">
//               click here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CollegeSignup;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CollegeSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    collegeName: '',
    registrationNumber: '',
    address: '',
    city: '',
    state: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    accreditation: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('College registration submitted successfully!');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Register Your Institution</h1>
          <p className="mt-2 text-sm text-gray-600">
            Connect with thousands of prospective students across the country
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white shadow rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* Institution Information Section */}
            <div className="px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Institution Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    College/University Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="collegeName"
                    name="collegeName"
                    required
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ABC Institute of Technology"
                  />
                </div>

                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Registration Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    required
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="REG123456"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123 College Road"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mumbai"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1.5">
                    State/Province <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Maharashtra"
                  />
                </div>

                <div>
                  <label htmlFor="accreditation" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Accreditation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="accreditation"
                    name="accreditation"
                    required
                    value={formData.accreditation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., NAAC A+, NBA"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://www.college.edu"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Dr. John Smith"
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="admissions@college.edu"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Account Credentials Section */}
            <div className="px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Account Credentials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Minimum 8 characters"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Re-enter password"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit Section */}
            <div className="px-6 py-6">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the Terms and Conditions
                  </label>
                  <p className="text-gray-500">
                    By registering, you agree to our institutional partnership terms and privacy policy.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register Institution
              </button>
            </div>
          </form>
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Looking for student registration?{' '}
            <Link to="/student-signup" className="font-medium text-blue-600 hover:text-blue-500">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeSignup;

