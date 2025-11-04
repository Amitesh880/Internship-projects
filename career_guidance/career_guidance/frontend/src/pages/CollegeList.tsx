// import { Link } from 'react-router-dom';

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
//   },
//   {
//     id: 2,
//     name: 'Indian Institute of Management Ahmedabad',
//     ranking: 1,
//     fees: '₹25,00,000 (2 years)',
//     location: 'Ahmedabad, Gujarat',
//     type: 'Management',
//     placements: '100%',
//     avgPackage: '₹25,00,000',
//   }
//   // ...add more colleges as needed
// ];

// const CollegeList = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Find Your Perfect College</h1>
//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-gray-600">
//             Showing <span className="font-semibold">{colleges.length}</span> college(s)
//           </p>
//         </div>
//         {/* College Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {colleges.map(college => (
//             <div key={college.id} className="card">
//               <div className="flex justify-between items-start mb-4">
//                 <div className="bg-primary-600 text-white px-3 py-1 rounded text-sm font-semibold">
//                   Rank #{college.ranking}
//                 </div>
//                 <div className="bg-gray-200 px-3 py-1 rounded text-xs font-semibold text-gray-700">
//                   {college.type}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{college.name}</h3>
//               <div className="space-y-2 mb-4">
//                 <div className="flex items-center text-sm text-gray-600">{college.location}</div>
//                 <div className="flex items-center text-sm text-gray-600">Fees: {college.fees}</div>
//                 <div className="flex items-center text-sm text-gray-600">Placements: {college.placements}</div>
//                 <div className="flex items-center text-sm text-gray-600">Avg Package: {college.avgPackage}</div>
//               </div>
//               <div className="flex gap-2">
//                 <Link to={`/college-details/${college.id}`} className="flex-1 text-center bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
//                   View Details
//                 </Link>
//                 <Link to={`/college-application/${college.id}`} className="flex-1 text-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
//                   Apply
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//         {colleges.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-600 text-lg">No colleges found matching your criteria.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default CollegeList;

import { Link } from 'react-router-dom';
import colleges from '../data/colleges';

const CollegeList = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect College</h1>
          <p className="text-gray-600">Explore top colleges and universities across India</p>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search colleges..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Types</option>
              <option value="Engineering">Engineering</option>
              <option value="Management">Management</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Sort By</option>
              <option value="ranking">Ranking</option>
              <option value="fees">Fees</option>
              <option value="placements">Placements</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{colleges.length}</span> colleges
          </p>
        </div>

        {/* College Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map(college => (
            <div key={college.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    #{college.ranking} Rank
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                    {college.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{college.name}</h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {college.location}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Annual Fees</span>
                  <span className="font-semibold text-gray-900">{college.fees}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Placements</span>
                  <span className="font-semibold text-green-600">{college.placements}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Avg Package</span>
                  <span className="font-semibold text-gray-900">{college.avgPackage}</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 flex gap-2">
                <Link
                  to={`/college-details/${college.id}`}
                  className="flex-1 text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  View Details
                </Link>
                <Link
                  to={`/college-application/${college.id}`}
                  className="flex-1 text-center px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {colleges.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No colleges found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Pagination (if needed in future) */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{colleges.length}</span> of{' '}
            <span className="font-medium">{colleges.length}</span> results
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeList;

