// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const StudentDetails = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     phone: '',
// //     dateOfBirth: '',
// //     gender: '',
// //     address: '',
// //     city: '',
// //     state: '',
// //     pincode: '',
// //     tenthSchool: '',
// //     tenthPercentage: '',
// //     tenthYear: '',
// //     twelfthSchool: '',
// //     twelfthPercentage: '',
// //     twelfthYear: '',
// //     jeeMain: '',
// //     jeeAdvanced: '',
// //     cat: '',
// //     gmat: '',
// //     careerPreference: '',
// //     locationPreference: '',
// //     achievements: '',
// //     extracurricular: ''
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [e.target.name]: e.target.value
// //     }));
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     alert('Profile updated successfully!');
// //     navigate('/career-selection');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// //       <div className="max-w-5xl mx-auto">
// //         <div className="bg-white rounded-lg shadow-md p-8">
// //           <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Profile</h1>
// //           <p className="text-gray-600 mb-8">Complete your profile to get personalized college recommendations</p>
// //           <form onSubmit={handleSubmit} className="space-y-8">
// //             {/* Personal Details */}
// //             <div className="border-b pb-6">
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
// //               <div className="grid md:grid-cols-3 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
// //                   <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="input-field" placeholder="John Doe"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// //                   <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="john@example.com"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
// //                   <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="input-field" placeholder="+91 9876543210"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
// //                   <input type="date" name="dateOfBirth" required value={formData.dateOfBirth} onChange={handleChange} className="input-field"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
// //                   <select name="gender" required value={formData.gender} onChange={handleChange} className="input-field">
// //                     <option value="">Select</option>
// //                     <option value="Male">Male</option>
// //                     <option value="Female">Female</option>
// //                     <option value="Other">Other</option>
// //                   </select>
// //                 </div>
// //                 <div className="md:col-span-3">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
// //                   <input type="text" name="address" required value={formData.address} onChange={handleChange} className="input-field" placeholder="Street address"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
// //                   <input type="text" name="city" required value={formData.city} onChange={handleChange} className="input-field" placeholder="Mumbai"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
// //                   <input type="text" name="state" required value={formData.state} onChange={handleChange} className="input-field" placeholder="Maharashtra"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
// //                   <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} className="input-field" placeholder="400001"/>
// //                 </div>
// //               </div>
// //             </div>
// //             {/* Academic History */}
// //             <div className="border-b pb-6">
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Academic History</h2>
// //               <h3 className="text-lg font-semibold text-gray-700 mb-3">10th Standard</h3>
// //               <div className="grid md:grid-cols-3 gap-6 mb-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">School Name *</label>
// //                   <input type="text" name="tenthSchool" required value={formData.tenthSchool} onChange={handleChange} className="input-field"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Percentage/CGPA *</label>
// //                   <input type="number" name="tenthPercentage" required step="0.01" value={formData.tenthPercentage} onChange={handleChange} className="input-field"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing *</label>
// //                   <input type="text" name="tenthYear" required value={formData.tenthYear} onChange={handleChange} className="input-field"/>
// //                 </div>
// //               </div>
// //               <h3 className="text-lg font-semibold text-gray-700 mb-3">12th Standard</h3>
// //               <div className="grid md:grid-cols-3 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">School Name *</label>
// //                   <input type="text" name="twelfthSchool" required value={formData.twelfthSchool} onChange={handleChange} className="input-field"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Percentage/CGPA *</label>
// //                   <input type="number" name="twelfthPercentage" required step="0.01" value={formData.twelfthPercentage} onChange={handleChange} className="input-field"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing *</label>
// //                   <input type="text" name="twelfthYear" required value={formData.twelfthYear} onChange={handleChange} className="input-field"/>
// //                 </div>
// //               </div>
// //             </div>
// //             {/* Entrance Exams */}
// //             <div className="border-b pb-6">
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Entrance Exam Scores</h2>
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">JEE Main (Percentile/Rank)</label>
// //                   <input type="text" name="jeeMain" value={formData.jeeMain} onChange={handleChange} className="input-field" placeholder="98.5 or Rank 5000"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">JEE Advanced (Rank)</label>
// //                   <input type="text" name="jeeAdvanced" value={formData.jeeAdvanced} onChange={handleChange} className="input-field" placeholder="Rank 2500"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">CAT (Percentile)</label>
// //                   <input type="text" name="cat" value={formData.cat} onChange={handleChange} className="input-field" placeholder="99.5 percentile"/>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">GMAT (Score)</label>
// //                   <input type="text" name="gmat" value={formData.gmat} onChange={handleChange} className="input-field" placeholder="720"/>
// //                 </div>
// //               </div>
// //             </div>
// //             {/* Preferences */}
// //             <div className="border-b pb-6">
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preferences</h2>
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Career Preference *</label>
// //                   <select name="careerPreference" required value={formData.careerPreference} onChange={handleChange} className="input-field">
// //                     <option value="">Select</option>
// //                     <option value="Engineering">Engineering</option>
// //                     <option value="Management">Management</option>
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Location Preference *</label>
// //                   <select name="locationPreference" required value={formData.locationPreference} onChange={handleChange} className="input-field">
// //                     <option value="">Select</option>
// //                     <option value="India">India</option>
// //                     <option value="Abroad">Abroad</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //             {/* Additional Information */}
// //             <div>
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
// //               <div className="space-y-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Achievements & Awards</label>
// //                   <textarea name="achievements" value={formData.achievements} onChange={handleChange} rows={3} className="input-field" placeholder="Academic achievements, awards, etc." />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Extracurricular Activities</label>
// //                   <textarea name="extracurricular" value={formData.extracurricular} onChange={handleChange} rows={3} className="input-field" placeholder="Sports, arts, volunteering, etc." />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex gap-4 mt-8">
// //               <button type="submit" className="btn-primary">Save Profile</button>
// //               <button type="button" className="btn-secondary">Cancel</button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default StudentDetails;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const StudentDetails = () => {
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState('personal');
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     dateOfBirth: '',
//     gender: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     tenthSchool: '',
//     tenthPercentage: '',
//     tenthYear: '',
//     twelfthSchool: '',
//     twelfthPercentage: '',
//     twelfthYear: '',
//     jeeMain: '',
//     jeeAdvanced: '',
//     cat: '',
//     gmat: '',
//     careerPreference: '',
//     locationPreference: '',
//     achievements: '',
//     extracurricular: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('Profile updated successfully! 🎉');
//     navigate('/career-selection');
//   };

//   const sections = [
//     { id: 'personal', name: 'Personal', icon: '👤' },
//     { id: 'academic', name: 'Academic', icon: '📚' },
//     { id: 'exams', name: 'Entrance Exams', icon: '📝' },
//     { id: 'preferences', name: 'Preferences', icon: '⚙️' },
//     { id: 'additional', name: 'Additional', icon: '✨' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12 animate-fade-in">
//           <div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
//             <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//           </div>
//           <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
//             Your Student Profile
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Complete your profile to unlock personalized college recommendations and career guidance
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Sidebar Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6 border border-gray-100">
//               <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Sections</h3>
//               <nav className="space-y-2">
//                 {sections.map(section => (
//                   <button
//                     key={section.id}
//                     onClick={() => setActiveSection(section.id)}
//                     className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
//                       activeSection === section.id
//                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
//                         : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                     }`}
//                   >
//                     <span className="text-2xl">{section.icon}</span>
//                     <span>{section.name}</span>
//                   </button>
//                 ))}
//               </nav>
              
//               {/* Progress Indicator */}
//               <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm font-semibold text-gray-700">Profile Completion</span>
//                   <span className="text-sm font-bold text-blue-600">45%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Form */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//               <form onSubmit={handleSubmit}>
//                 {/* Personal Details Section */}
//                 {activeSection === 'personal' && (
//                   <div className="p-8 animate-slide-in">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="p-2 bg-blue-100 rounded-lg">
//                         <span className="text-3xl">👤</span>
//                       </div>
//                       <div>
//                         <h2 className="text-3xl font-bold text-gray-900">Personal Details</h2>
//                         <p className="text-gray-500">Tell us about yourself</p>
//                       </div>
//                     </div>
                    
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="md:col-span-2">
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
//                         <input
//                           type="text"
//                           name="fullName"
//                           required
//                           value={formData.fullName}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                           placeholder="John Doe"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                             </svg>
//                           </div>
//                           <input
//                             type="email"
//                             name="email"
//                             required
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                             placeholder="john@example.com"
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                             </svg>
//                           </div>
//                           <input
//                             type="tel"
//                             name="phone"
//                             required
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                             placeholder="+91 9876543210"
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
//                         <input
//                           type="date"
//                           name="dateOfBirth"
//                           required
//                           value={formData.dateOfBirth}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
//                         <select
//                           name="gender"
//                           required
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none appearance-none bg-white"
//                         >
//                           <option value="">Select Gender</option>
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>

//                       <div className="md:col-span-2">
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
//                         <input
//                           type="text"
//                           name="address"
//                           required
//                           value={formData.address}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                           placeholder="Street address"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
//                         <input
//                           type="text"
//                           name="city"
//                           required
//                           value={formData.city}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                           placeholder="Mumbai"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
//                         <input
//                           type="text"
//                           name="state"
//                           required
//                           value={formData.state}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                           placeholder="Maharashtra"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode *</label>
//                         <input
//                           type="text"
//                           name="pincode"
//                           required
//                           value={formData.pincode}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
//                           placeholder="400001"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Academic History Section */}
//                 {activeSection === 'academic' && (
//                   <div className="p-8 animate-slide-in">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="p-2 bg-purple-100 rounded-lg">
//                         <span className="text-3xl">📚</span>
//                       </div>
//                       <div>
//                         <h2 className="text-3xl font-bold text-gray-900">Academic History</h2>
//                         <p className="text-gray-500">Your educational background</p>
//                       </div>
//                     </div>

//                     {/* 10th Standard */}
//                     <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100">
//                       <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//                         <span className="text-2xl">🎓</span>
//                         10th Standard
//                       </h3>
//                       <div className="grid md:grid-cols-3 gap-6">
//                         <div>
//                           <label className="block text-sm font-semibold text-gray-700 mb-2">School Name *</label>
//                           <input
//                             type="text"
//                             name="tenthSchool"
//                             required
//                             value={formData.tenthSchool}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-white"
//                             placeholder="ABC High School"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage/CGPA *</label>
//                           <input
//                             type="number"
//                             name="tenthPercentage"
//                             required
//                             step="0.01"
//                             value={formData.tenthPercentage}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-white"
//                             placeholder="85.5"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Passing *</label>
//                           <input
//                             type="text"
//                             name="tenthYear"
//                             required
//                             value={formData.tenthYear}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-white"
//                             placeholder="2020"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* 12th Standard */}
//                     <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100">
//                       <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//                         <span className="text-2xl">🎓</span>
//                         12th Standard
//                       </h3>
//                       <div className="grid md:grid-cols-3 gap-6">
//                         <div>
//                           <label className="block text-sm font-semibold text-gray-700 mb-2">School Name *</label>
//                           <input
//                             type="text"
//                             name="twelfthSchool"
//                             required
//                             value={formData.twelfthSchool}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none bg-white"
//                             placeholder="XYZ Senior Secondary"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage/CGPA *</label>
//                           <input
//                             type="number"
//                             name="twelfthPercentage"
//                             required
//                             step="0.01"
//                             value={formData.twelfthPercentage}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none bg-white"
//                             placeholder="90.5"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Passing *</label>
//                           <input
//                             type="text"
//                             name="twelfthYear"
//                             required
//                             value={formData.twelfthYear}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none bg-white"
//                             placeholder="2022"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Entrance Exams Section */}
//                 {activeSection === 'exams' && (
//                   <div className="p-8 animate-slide-in">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="p-2 bg-green-100 rounded-lg">
//                         <span className="text-3xl">📝</span>
//                       </div>
//                       <div>
//                         <h2 className="text-3xl font-bold text-gray-900">Entrance Exam Scores</h2>
//                         <p className="text-gray-500">Share your competitive exam results</p>
//                       </div>
//                     </div>
                    
//                     <div className="grid md:grid-cols-2 gap-6">
//                       {[
//                         { name: 'jeeMain', label: 'JEE Main', placeholder: '98.5 percentile or Rank 5000', icon: '🔬' },
//                         { name: 'jeeAdvanced', label: 'JEE Advanced', placeholder: 'Rank 2500', icon: '⚗️' },
//                         { name: 'cat', label: 'CAT', placeholder: '99.5 percentile', icon: '💼' },
//                         { name: 'gmat', label: 'GMAT', placeholder: '720', icon: '🌍' }
//                       ].map((exam) => (
//                         <div key={exam.name} className="relative group">
//                           <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                             <span>{exam.icon}</span>
//                             {exam.label}
//                           </label>
//                           <input
//                             type="text"
//                             name={exam.name}
//                             value={formData[exam.name as keyof typeof formData]}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none group-hover:border-green-300"
//                             placeholder={exam.placeholder}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Preferences Section */}
//                 {activeSection === 'preferences' && (
//                   <div className="p-8 animate-slide-in">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="p-2 bg-yellow-100 rounded-lg">
//                         <span className="text-3xl">⚙️</span>
//                       </div>
//                       <div>
//                         <h2 className="text-3xl font-bold text-gray-900">Your Preferences</h2>
//                         <p className="text-gray-500">What are you looking for?</p>
//                       </div>
//                     </div>
                    
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100">
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <span>🎯</span>
//                           Career Preference *
//                         </label>
//                         <select
//                           name="careerPreference"
//                           required
//                           value={formData.careerPreference}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none appearance-none bg-white"
//                         >
//                           <option value="">Select Career Path</option>
//                           <option value="Engineering">Engineering</option>
//                           <option value="Management">Management</option>
//                         </select>
//                       </div>

//                       <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100">
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <span>📍</span>
//                           Location Preference *
//                         </label>
//                         <select
//                           name="locationPreference"
//                           required
//                           value={formData.locationPreference}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none appearance-none bg-white"
//                         >
//                           <option value="">Select Location</option>
//                           <option value="India">India</option>
//                           <option value="Abroad">Abroad</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Additional Information Section */}
//                 {activeSection === 'additional' && (
//                   <div className="p-8 animate-slide-in">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="p-2 bg-pink-100 rounded-lg">
//                         <span className="text-3xl">✨</span>
//                       </div>
//                       <div>
//                         <h2 className="text-3xl font-bold text-gray-900">Additional Information</h2>
//                         <p className="text-gray-500">Tell us more about yourself</p>
//                       </div>
//                     </div>
                    
//                     <div className="space-y-6">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <span>🏆</span>
//                           Achievements & Awards
//                         </label>
//                         <textarea
//                           name="achievements"
//                           value={formData.achievements}
//                           onChange={handleChange}
//                           rows={4}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all outline-none resize-none"
//                           placeholder="Share your academic achievements, competitions won, certifications, etc..."
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                           <span>🎨</span>
//                           Extracurricular Activities
//                         </label>
//                         <textarea
//                           name="extracurricular"
//                           value={formData.extracurricular}
//                           onChange={handleChange}
//                           rows={4}
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all outline-none resize-none"
//                           placeholder="Sports, music, dance, volunteering, clubs, leadership roles..."
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 flex gap-4">
//                   <button
//                     type="submit"
//                     className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
//                   >
//                     💾 Save Profile
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => navigate('/')}
//                     className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         .animate-slide-in {
//           animation: slide-in 0.4s ease-out;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StudentDetails;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    tenthSchool: '',
    tenthPercentage: '',
    tenthYear: '',
    twelfthSchool: '',
    twelfthPercentage: '',
    twelfthYear: '',
    jeeMain: '',
    jeeAdvanced: '',
    cat: '',
    gmat: '',
    careerPreference: '',
    locationPreference: '',
    achievements: '',
    extracurricular: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile saved successfully!');
    navigate('/career-selection');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-5 mb-6 rounded-t-lg">
          <h1 className="text-2xl font-semibold text-gray-900">Complete Your Profile</h1>
          <p className="text-sm text-gray-600 mt-1">Help us understand you better to provide personalized recommendations</p>
        </div>

        <div className="bg-white shadow rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
              
              <div className="space-y-4">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
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
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
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
                    placeholder="House number, street name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      State <span className="text-red-500">*</span>
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
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="400001"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Details */}
            <div className="px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Academic Details</h2>
              
              <div className="space-y-6">
                {/* 10th Standard */}
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Class 10th</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="tenthSchool" className="block text-sm font-medium text-gray-700 mb-1.5">
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="tenthSchool"
                        name="tenthSchool"
                        required
                        value={formData.tenthSchool}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="School name"
                      />
                    </div>

                    <div>
                      <label htmlFor="tenthPercentage" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Percentage/CGPA <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="tenthPercentage"
                        name="tenthPercentage"
                        required
                        step="0.01"
                        value={formData.tenthPercentage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="85.5"
                      />
                    </div>

                    <div>
                      <label htmlFor="tenthYear" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Year <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="tenthYear"
                        name="tenthYear"
                        required
                        value={formData.tenthYear}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2020"
                      />
                    </div>
                  </div>
                </div>

                {/* 12th Standard */}
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Class 12th</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="twelfthSchool" className="block text-sm font-medium text-gray-700 mb-1.5">
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="twelfthSchool"
                        name="twelfthSchool"
                        required
                        value={formData.twelfthSchool}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="School name"
                      />
                    </div>

                    <div>
                      <label htmlFor="twelfthPercentage" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Percentage/CGPA <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="twelfthPercentage"
                        name="twelfthPercentage"
                        required
                        step="0.01"
                        value={formData.twelfthPercentage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="90.5"
                      />
                    </div>

                    <div>
                      <label htmlFor="twelfthYear" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Year <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="twelfthYear"
                        name="twelfthYear"
                        required
                        value={formData.twelfthYear}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2022"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrance Exams */}
            <div className="px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-1">Entrance Exam Scores</h2>
              <p className="text-sm text-gray-500 mb-4">Optional - Add your scores if you've appeared for any competitive exams</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="jeeMain" className="block text-sm font-medium text-gray-700 mb-1.5">
                    JEE Main (Percentile/Rank)
                  </label>
                  <input
                    type="text"
                    id="jeeMain"
                    name="jeeMain"
                    value={formData.jeeMain}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 98.5 percentile or 5000"
                  />
                </div>

                <div>
                  <label htmlFor="jeeAdvanced" className="block text-sm font-medium text-gray-700 mb-1.5">
                    JEE Advanced (Rank)
                  </label>
                  <input
                    type="text"
                    id="jeeAdvanced"
                    name="jeeAdvanced"
                    value={formData.jeeAdvanced}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 2500"
                  />
                </div>

                <div>
                  <label htmlFor="cat" className="block text-sm font-medium text-gray-700 mb-1.5">
                    CAT (Percentile)
                  </label>
                  <input
                    type="text"
                    id="cat"
                    name="cat"
                    value={formData.cat}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 99.5"
                  />
                </div>

                <div>
                  <label htmlFor="gmat" className="block text-sm font-medium text-gray-700 mb-1.5">
                    GMAT (Score)
                  </label>
                  <input
                    type="text"
                    id="gmat"
                    name="gmat"
                    value={formData.gmat}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 720"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Preferences</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="careerPreference" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Career Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="careerPreference"
                    name="careerPreference"
                    required
                    value={formData.careerPreference}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Choose one</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Management">Management</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="locationPreference" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Location Preference <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="locationPreference"
                    name="locationPreference"
                    required
                    value={formData.locationPreference}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Choose one</option>
                    <option value="India">India</option>
                    <option value="Abroad">Abroad</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="px-6 py-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Achievements & Awards
                  </label>
                  <textarea
                    id="achievements"
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="List any academic achievements, competitions, certifications..."
                  />
                </div>

                <div>
                  <label htmlFor="extracurricular" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Extracurricular Activities
                  </label>
                  <textarea
                    id="extracurricular"
                    name="extracurricular"
                    value={formData.extracurricular}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Sports, music, volunteering, clubs..."
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-between items-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save and Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
