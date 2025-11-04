// import { Link } from 'react-router-dom';

// const careers = [
//   {
//     id: 'cse',
//     name: 'Computer Science Engineering',
//     category: 'Engineering',
//     description: 'Focus on software development, algorithms, AI, and machine learning',
//     subjects: ['Programming', 'Data Structures', 'Algorithms', 'Database Systems'],
//     scope: 'Software Engineer, Data Scientist, Full Stack Developer'
//   },
//   {
//     id: 'mech',
//     name: 'Mechanical Engineering',
//     category: 'Engineering',
//     description: 'Design and manufacturing of machines and mechanical systems',
//     subjects: ['Thermodynamics', 'Mechanics', 'Materials Science', 'CAD'],
//     scope: 'Mechanical Engineer, Automotive Engineer, Robotics Engineer'
//   },
//   {
//     id: 'mba-finance',
//     name: 'MBA - Finance',
//     category: 'Management',
//     description: 'Financial management, investment banking, and corporate finance',
//     subjects: ['Financial Accounting', 'Investment Analysis', 'Corporate Finance'],
//     scope: 'Financial Analyst, Investment Banker, CFO'
//   },
//   {
//     id: 'mba-hr',
//     name: 'MBA - Human Resources',
//     category: 'Management',
//     description: 'People management and organizational development',
//     subjects: ['Organizational Behavior', 'HR Management', 'Labor Laws'],
//     scope: 'HR Manager, Talent Acquisition Specialist, CHRO'
//   },
// ];

// const CareerSelection = () => {
//   const engineeringCareers = careers.filter(c => c.category === 'Engineering');
//   const managementCareers = careers.filter(c => c.category === 'Management');

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Career Path</h1>
//           <p className="text-lg text-gray-600">
//             Select your area of interest to discover the best colleges and courses
//           </p>
//         </div>

//         {/* Engineering Careers */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Engineering</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {engineeringCareers.map(career => (
//               <div key={career.id} className="card hover:scale-105 transition-transform cursor-pointer">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{career.name}</h3>
//                 <p className="text-gray-600 mb-4">{career.description}</p>
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Subjects:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {career.subjects.map((subject, idx) => (
//                       <span key={idx} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs">
//                         {subject}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-4">
//                   <span className="font-semibold">Career Scope:</span> {career.scope}
//                 </p>
//                 <Link
//                   to="/location-selection"
//                   state={{ career: career.name }}
//                   className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
//                 >
//                   Explore Colleges →
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Management Careers */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Management</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {managementCareers.map(career => (
//               <div key={career.id} className="card hover:scale-105 transition-transform cursor-pointer">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{career.name}</h3>
//                 <p className="text-gray-600 mb-4">{career.description}</p>
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Subjects:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {career.subjects.map((subject, idx) => (
//                       <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
//                         {subject}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-4">
//                   <span className="font-semibold">Career Scope:</span> {career.scope}
//                 </p>
//                 <Link
//                   to="/location-selection"
//                   state={{ career: career.name }}
//                   className="text-green-600 hover:text-green-700 font-semibold text-sm"
//                 >
//                   Explore Colleges →
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <Link to="/aptitude-test" className="btn-primary inline-block">
//             Take Aptitude Test to Find Best Career Match
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerSelection;

import { Link } from 'react-router-dom';

const careers = [
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    category: 'Engineering',
    description: 'Focus on software development, algorithms, AI, and machine learning',
    subjects: ['Programming', 'Data Structures', 'Algorithms', 'Database Systems'],
    scope: 'Software Engineer, Data Scientist, Full Stack Developer'
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    category: 'Engineering',
    description: 'Design and manufacturing of machines and mechanical systems',
    subjects: ['Thermodynamics', 'Mechanics', 'Materials Science', 'CAD'],
    scope: 'Mechanical Engineer, Automotive Engineer, Robotics Engineer'
  },
  {
    id: 'mba-finance',
    name: 'MBA - Finance',
    category: 'Management',
    description: 'Financial management, investment banking, and corporate finance',
    subjects: ['Financial Accounting', 'Investment Analysis', 'Corporate Finance'],
    scope: 'Financial Analyst, Investment Banker, CFO'
  },
  {
    id: 'mba-hr',
    name: 'MBA - Human Resources',
    category: 'Management',
    description: 'People management and organizational development',
    subjects: ['Organizational Behavior', 'HR Management', 'Labor Laws'],
    scope: 'HR Manager, Talent Acquisition Specialist, CHRO'
  },
];

const CareerSelection = () => {
  const engineeringCareers = careers.filter(c => c.category === 'Engineering');
  const managementCareers = careers.filter(c => c.category === 'Management');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Career Path</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore different career options and discover the best colleges for your chosen field
          </p>
        </div>

        {/* Engineering Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Engineering Programs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {engineeringCareers.map(career => (
              <div key={career.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{career.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{career.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.subjects.map((subject, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Career Opportunities</h4>
                  <p className="text-sm text-gray-700">{career.scope}</p>
                </div>

                <Link
                  to="/location-selection"
                  state={{ career: career.name }}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Explore Colleges
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Management Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Management Programs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {managementCareers.map(career => (
              <div key={career.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{career.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{career.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.subjects.map((subject, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Career Opportunities</h4>
                  <p className="text-sm text-gray-700">{career.scope}</p>
                </div>

                <Link
                  to="/location-selection"
                  state={{ career: career.name }}
                  className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                >
                  Explore Colleges
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Not Sure Which Path to Choose?</h3>
          <p className="text-gray-600 mb-6">Take our aptitude test to discover the best career match for your skills and interests</p>
          <Link
            to="/aptitude-test"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Take Aptitude Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerSelection;
