// import { useParams, Link } from 'react-router-dom';

// const colleges = [
//   {
//     id: 1,
//     name: 'Indian Institute of Technology Delhi',
//     ranking: 1,
//     fees: '₹2,50,000/year',
//     location: 'New Delhi, India',
//     type: 'Engineering',
//     placements: '98%',
//     avgPackage: '₹15,00,000',
//     eligibility: 'JEE Advanced rank under 10,000',
//     courses: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'],
//     facilities: ['Library', 'Sports Complex', 'Hostels', 'Labs', 'Cafeteria'],
//     scholarships: ['Merit Scholarship', 'Need-based Financial Aid'],
//     description: 'Premier engineering institution in India with world-class faculty and infrastructure.',
//   }
//   // Add more as you like!
// ];

// const CollegeDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const college = colleges.find(c => c.id === Number(id));
//   if (!college) {
//     return <div className="p-8">College Not Found</div>;
//   }
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-lg shadow-md p-8 mb-6">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h1 className="text-4xl font-bold text-gray-800 mb-2">{college.name}</h1>
//               <div className="flex items-center gap-4 text-gray-600">
//                 <span>{college.location}</span>
//                 <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
//                   Rank #{college.ranking}
//                 </span>
//                 <span className="bg-gray-200 px-3 py-1 rounded text-sm font-semibold">{college.type}</span>
//               </div>
//             </div>
//             <div className="text-right">
//               <Link to={`/college-application/${college.id}`} className="btn-primary">
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//           <p className="text-gray-600 mt-4">{college.description}</p>
//         </div>
//         {/* Key Stats */}
//         <div className="grid md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="text-3xl font-bold text-primary-600 mb-2">{college.placements}</div>
//             <div className="text-gray-600 text-sm">Placement Rate</div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="text-3xl font-bold text-primary-600 mb-2">{college.avgPackage}</div>
//             <div className="text-gray-600 text-sm">Average Package</div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="text-3xl font-bold text-primary-600 mb-2">{college.fees}</div>
//             <div className="text-gray-600 text-sm">Annual Fees</div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="text-3xl font-bold text-primary-600 mb-2">#{college.ranking}</div>
//             <div className="text-gray-600 text-sm">National Ranking</div>
//           </div>
//         </div>
//         {/* Details */}
//         <div className="bg-white rounded-lg shadow-md p-8 mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Courses Offered</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {college.courses.map((course, idx) => (
//               <div key={idx} className="bg-gray-50 p-4 rounded-lg">
//                 <span className="font-semibold text-gray-700">{course}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-8 mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
//             <p className="text-gray-700">{college.eligibility}</p>
//           </div>
//         </div>
//         {college.facilities && (
//           <div className="bg-white rounded-lg shadow-md p-8 mb-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Campus Facilities</h2>
//             <div className="grid md:grid-cols-3 gap-4">
//               {college.facilities.map((facility, idx) => (
//                 <div key={idx} className="flex items-center p-3 bg-gray-50 rounded">
//                   <span className="text-gray-700">{facility}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         {college.scholarships && (
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Scholarship Opportunities</h2>
//             <div className="space-y-3">
//               {college.scholarships.map((scholarship, idx) => (
//                 <div key={idx} className="flex items-start p-4 bg-blue-50 rounded">
//                   <span className="text-gray-700 font-medium">{scholarship}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default CollegeDetails;

import { useParams, Link } from 'react-router-dom';
import colleges from '../data/colleges';

const CollegeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const college = colleges.find(c => c.id === Number(id));
  
  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">College Not Found</h1>
          <p className="text-gray-600 mb-4">The college you're looking for doesn't exist.</p>
          <Link to="/college-list" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to College List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm">
          <Link to="/college-list" className="text-blue-600 hover:text-blue-700">Colleges</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{college.name}</span>
        </nav>

        {/* Header Section */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    #{college.ranking} Rank
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {college.type}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{college.name}</h1>
                <p className="text-gray-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {college.location}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  to={`/college-application/${college.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">{college.description}</p>
          </div>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{college.placements}</div>
            <div className="text-sm text-gray-600">Placement Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{college.avgPackage}</div>
            <div className="text-sm text-gray-600">Avg Package</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{college.fees}</div>
            <div className="text-sm text-gray-600">Annual Fees</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">#{college.ranking}</div>
            <div className="text-sm text-gray-600">National Rank</div>
          </div>
        </div>

        {/* Courses Offered */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Courses Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {college.courses.map((course, idx) => (
              <div key={idx} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">{college.eligibility}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Facilities */}
        {college.facilities && (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {college.facilities.map((facility, idx) => (
                <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scholarships */}
        {college.scholarships && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Scholarship Opportunities</h2>
            <div className="space-y-3">
              {college.scholarships.map((scholarship, idx) => (
                <div key={idx} className="flex items-start p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800 font-medium">{scholarship}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/college-list"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Colleges
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;

