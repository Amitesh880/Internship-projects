// import { Link } from 'react-router-dom';

// const locations = {
//   india: ['Delhi NCR', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'],
//   abroad: ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Singapore', 'Ireland', 'New Zealand'],
// };

// const LocationSelection = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Preferred Location</h1>
//           <p className="text-lg text-gray-600">
//             Select where you would like to pursue your education
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {/* India Section */}
//           <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
//             <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">INDIA</h2>
//             <p className="text-center text-gray-600 mb-6">
//               Explore top engineering and management colleges across India
//             </p>
//             <div className="mb-6">
//               <h3 className="font-semibold mb-3 text-gray-700">Popular Cities:</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {locations.india.map((city, idx) => (
//                   <div key={idx} className="bg-gray-50 px-3 py-2 rounded text-sm text-gray-700">
//                     {city}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <Link
//               to="/college-list"
//               state={{ location: 'India' }}
//               className="btn-primary w-full text-center block"
//             >
//               Browse Indian Colleges
//             </Link>
//           </div>

//           {/* Abroad Section */}
//           <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
//             <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">ABROAD</h2>
//             <p className="text-center text-gray-600 mb-6">
//               Discover world-class universities around the globe
//             </p>
//             <div className="mb-6">
//               <h3 className="font-semibold mb-3 text-gray-700">Popular Countries:</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {locations.abroad.map((country, idx) => (
//                   <div key={idx} className="bg-gray-50 px-3 py-2 rounded text-sm text-gray-700">
//                     {country}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <Link
//               to="/college-list"
//               state={{ location: 'Abroad' }}
//               className="btn-primary w-full text-center block"
//             >
//               Browse International Colleges
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LocationSelection;

import { Link } from 'react-router-dom';

const locations = {
  india: ['Delhi NCR', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'],
  abroad: ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Singapore', 'Ireland', 'New Zealand'],
};

const LocationSelection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Where Do You Want to Study?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your preferred location to explore the best colleges and universities
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* India Section */}
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-orange-500 to-green-500 p-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">INDIA</h2>
              <p className="text-white text-sm">Study in your home country</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 text-center mb-6">
                Explore top engineering and management colleges across India with world-class education at affordable costs
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Popular Cities
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {locations.india.map((city, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-orange-800">
                      <strong>Benefits:</strong> Lower fees, cultural familiarity, proximity to family
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/college-list"
                state={{ location: 'India' }}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                Browse Indian Colleges
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Abroad Section */}
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">ABROAD</h2>
              <p className="text-white text-sm">Study at global universities</p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 text-center mb-6">
                Discover world-class universities offering international exposure, cutting-edge research, and global career opportunities
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Popular Countries
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {locations.abroad.map((country, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-medium">{country}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-800">
                      <strong>Benefits:</strong> Global exposure, advanced research, international networking
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/college-list"
                state={{ location: 'Abroad' }}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Browse International Colleges
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Not sure where to study?{' '}
            <Link to="/career-selection" className="font-medium text-blue-600 hover:text-blue-500">
              Explore career options first
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationSelection;
