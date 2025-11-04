// import { useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// const colleges = [
//   {
//     id: 1,
//     name: "Indian Institute of Technology Delhi",
//     courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"]
//   }
// ];

// const CollegeApplication = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const college = colleges.find((c) => c.id === Number(id));
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     dateOfBirth: "",
//     gender: "",
//     address: "",
//     tenthPercentage: "",
//     tenthBoard: "",
//     twelfthPercentage: "",
//     twelfthBoard: "",
//     entranceExam: "",
//     entranceScore: "",
//     preferredCourse: "",
//     secondPreference: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   const handleNext = () => {if (step < 4) setStep(step + 1);};
//   const handlePrevious = () => {if (step > 1) setStep(step - 1);};
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Application submitted successfully!");
//     navigate("/aptitude-test");
//   };

//   if (!college) {
//     return (
//       <div className="min-h-screen bg-gray-100 py-12 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">College Not Found</h1>
//           <Link to="/college-list" className="text-primary-600 hover:text-primary-700">Back to College List</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Application Form</h1>
//           <p className="text-gray-600 mb-6">
//             Applying to: <span className="font-semibold">{college.name}</span>
//           </p>
//           {/* Progress Indicator */}
//           <div className="mb-8">
//             <div className="flex justify-between items-center mb-2">
//               {[1, 2, 3, 4].map((num) => (
//                 <div key={num} className="flex items-center flex-1">
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
//                       step >= num ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-600"
//                   }`}>{num}</div>
//                   {num < 4 && <div className={`flex-1 h-1 mx-2 ${step > num ? "bg-primary-600" : "bg-gray-200"}`}></div>}
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-between text-sm text-gray-600">
//               <span>Personal</span>
//               <span>Academic</span>
//               <span>Documents</span>
//               <span>Course</span>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit}>
//             {step === 1 && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                     <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="input-field" placeholder="John Doe"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                     <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="john@example.com"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
//                     <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="input-field" placeholder="+91 9876543210"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
//                     <input type="date" name="dateOfBirth" required value={formData.dateOfBirth} onChange={handleChange} className="input-field"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
//                     <select name="gender" required value={formData.gender} onChange={handleChange} className="input-field">
//                       <option value="">Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
//                     <input type="text" name="address" required value={formData.address} onChange={handleChange} className="input-field" placeholder="Complete address"/>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {step === 2 && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Academic Details</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">10th Percentage *</label>
//                     <input type="number" name="tenthPercentage" required min="0" max="100" step="0.01" value={formData.tenthPercentage} onChange={handleChange} className="input-field" placeholder="85.5"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">10th Board *</label>
//                     <input type="text" name="tenthBoard" required value={formData.tenthBoard} onChange={handleChange} className="input-field" placeholder="CBSE"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">12th Percentage *</label>
//                     <input type="number" name="twelfthPercentage" required min="0" max="100" step="0.01" value={formData.twelfthPercentage} onChange={handleChange} className="input-field" placeholder="90.5"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">12th Board *</label>
//                     <input type="text" name="twelfthBoard" required value={formData.twelfthBoard} onChange={handleChange} className="input-field" placeholder="CBSE"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Entrance Exam *</label>
//                     <select name="entranceExam" required value={formData.entranceExam} onChange={handleChange} className="input-field">
//                       <option value="">Select Exam</option>
//                       <option value="JEE Main">JEE Main</option>
//                       <option value="JEE Advanced">JEE Advanced</option>
//                       <option value="CAT">CAT</option>
//                       <option value="GMAT">GMAT</option>
//                       <option value="NEET">NEET</option>
//                       <option value="BITSAT">BITSAT</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Entrance Exam Score *</label>
//                     <input type="text" name="entranceScore" required value={formData.entranceScore} onChange={handleChange} className="input-field" placeholder="Score/Rank/Percentile"/>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {step === 3 && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Documents</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Passport Photo *</label>
//                     <input type="file" accept="image/*" className="input-field"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">10th Marksheet *</label>
//                     <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="input-field"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">12th Marksheet *</label>
//                     <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="input-field"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Entrance Exam Scorecard *</label>
//                     <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="input-field"/>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">ID Proof (Aadhar/Passport) *</label>
//                     <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="input-field"/>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {step === 4 && (
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Selection</h2>
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course *</label>
//                     <select name="preferredCourse" required value={formData.preferredCourse} onChange={handleChange} className="input-field">
//                       <option value="">Select Course</option>
//                       {college.courses.map((course, idx) => (
//                         <option key={idx} value={course}>{course}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Second Preference</label>
//                     <select name="secondPreference" value={formData.secondPreference} onChange={handleChange} className="input-field">
//                       <option value="">Select Course</option>
//                       {college.courses.map((course, idx) => (
//                         <option key={idx} value={course}>{course}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
//                     <p className="text-sm text-gray-700">
//                       <span className="font-semibold">Note:</span> After submitting this application, you will be required to take an aptitude test to complete the admission process.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-8">
//               <button type="button" onClick={handlePrevious} disabled={step === 1}
//                 className={`px-6 py-2 rounded font-semibold ${step === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
//                 Previous
//               </button>
//               {step < 4 ? (
//                 <button type="button" onClick={handleNext} className="btn-primary">
//                   Next
//                 </button>
//               ) : (
//                 <button type="submit" className="btn-primary">
//                   Submit Application
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CollegeApplication;

import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"]
  }
];

const CollegeApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const college = colleges.find((c) => c.id === Number(id));
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    tenthPercentage: "",
    tenthBoard: "",
    twelfthPercentage: "",
    twelfthBoard: "",
    entranceExam: "",
    entranceScore: "",
    preferredCourse: "",
    secondPreference: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleNext = () => { if (step < 4) setStep(step + 1); };
  const handlePrevious = () => { if (step > 1) setStep(step - 1); };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    navigate("/aptitude-test");
  };

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">College Not Found</h1>
          <p className="text-gray-600 mb-6">The college you're trying to apply to doesn't exist</p>
          <Link to="/college-list" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to College List
          </Link>
        </div>
      </div>
    );
  }

  const steps = [
    { number: 1, name: "Personal" },
    { number: 2, name: "Academic" },
    { number: 3, name: "Documents" },
    { number: 4, name: "Course" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <nav className="mb-4 text-sm">
            <Link to="/college-list" className="text-blue-600 hover:text-blue-700">Colleges</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to={`/college-details/${college.id}`} className="text-blue-600 hover:text-blue-700">{college.name}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Apply</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Form</h1>
          <p className="text-gray-600">
            Applying to <span className="font-semibold text-gray-900">{college.name}</span>
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow border border-gray-200">
          {/* Progress Steps */}
          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              {steps.map((s, idx) => (
                <div key={s.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                      step >= s.number 
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {step > s.number ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        s.number
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${step >= s.number ? "text-gray-900" : "text-gray-500"}`}>
                      {s.name}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 ${step > s.number ? "bg-blue-600" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit}>
            <div className="px-6 py-8">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
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
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>

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

                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Complete Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Street, City, State, Pincode"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Academic Details</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Class 10th</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="tenthPercentage" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Percentage/CGPA <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          id="tenthPercentage"
                          name="tenthPercentage"
                          required
                          min="0"
                          max="100"
                          step="0.01"
                          value={formData.tenthPercentage}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="85.5"
                        />
                      </div>
                      <div>
                        <label htmlFor="tenthBoard" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Board <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="tenthBoard"
                          name="tenthBoard"
                          required
                          value={formData.tenthBoard}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="CBSE"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Class 12th</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="twelfthPercentage" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Percentage/CGPA <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          id="twelfthPercentage"
                          name="twelfthPercentage"
                          required
                          min="0"
                          max="100"
                          step="0.01"
                          value={formData.twelfthPercentage}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="90.5"
                        />
                      </div>
                      <div>
                        <label htmlFor="twelfthBoard" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Board <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="twelfthBoard"
                          name="twelfthBoard"
                          required
                          value={formData.twelfthBoard}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="CBSE"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="entranceExam" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Entrance Exam <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="entranceExam"
                        name="entranceExam"
                        required
                        value={formData.entranceExam}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select exam</option>
                        <option value="JEE Main">JEE Main</option>
                        <option value="JEE Advanced">JEE Advanced</option>
                        <option value="CAT">CAT</option>
                        <option value="GMAT">GMAT</option>
                        <option value="NEET">NEET</option>
                        <option value="BITSAT">BITSAT</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="entranceScore" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Score/Rank <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="entranceScore"
                        name="entranceScore"
                        required
                        value={formData.entranceScore}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="98.5 percentile or Rank 5000"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Documents */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Upload Documents</h2>
                  <p className="text-sm text-gray-600">Please upload clear, legible copies of the following documents</p>
                  
                  <div className="space-y-4">
                    {[
                      { id: "photo", label: "Passport Photo", accept: "image/*" },
                      { id: "tenth", label: "10th Marksheet", accept: ".pdf,.jpg,.jpeg,.png" },
                      { id: "twelfth", label: "12th Marksheet", accept: ".pdf,.jpg,.jpeg,.png" },
                      { id: "entrance", label: "Entrance Exam Scorecard", accept: ".pdf,.jpg,.jpeg,.png" },
                      { id: "id", label: "ID Proof (Aadhar/Passport)", accept: ".pdf,.jpg,.jpeg,.png" }
                    ].map((doc) => (
                      <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
                        <label htmlFor={doc.id} className="block text-sm font-medium text-gray-700 mb-2">
                          {doc.label} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          id={doc.id}
                          accept={doc.accept}
                          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <p className="text-xs text-gray-500 mt-1">Max size: 5MB</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Course Selection */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Course Selection</h2>
                  
                  <div>
                    <label htmlFor="preferredCourse" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="preferredCourse"
                      name="preferredCourse"
                      required
                      value={formData.preferredCourse}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your first choice</option>
                      {college.courses.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="secondPreference" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Second Preference
                    </label>
                    <select
                      id="secondPreference"
                      name="secondPreference"
                      value={formData.secondPreference}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your second choice (optional)</option>
                      {college.courses.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-800">
                          <span className="font-semibold">Important:</span> After submitting this application, you will be required to take an aptitude test to complete the admission process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between rounded-b-lg">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={step === 1}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                  step === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollegeApplication;

