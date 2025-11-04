// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const colleges = [
//   { id: 1, name: 'Indian Institute of Technology Delhi', ranking: 1, location: 'New Delhi, India', avgPackage: '₹15,00,000' },
//   { id: 2, name: 'Indian Institute of Management Ahmedabad', ranking: 1, location: 'Ahmedabad, Gujarat', avgPackage: '₹25,00,000' }
// ];

// interface TestResult {
//   totalScore: number;
//   totalQuestions: number;
//   percentage: number;
// }

// const TestResults = () => {
//   const [result, setResult] = useState<TestResult | null>(null);

//   useEffect(() => {
//     const savedResult = localStorage.getItem('testResult');
//     if (savedResult) setResult(JSON.parse(savedResult));
//   }, []);

//   if (!result) {
//     return (
//       <div className="min-h-screen bg-gray-100 py-12 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">No Test Results Found</h1>
//           <Link to="/aptitude-test" className="text-primary-600 hover:text-primary-700">Take the Aptitude Test</Link>
//         </div>
//       </div>
//     );
//   }

//   // Recommend first 2 colleges for demo
//   const recommendedColleges = colleges.slice(0, 2);

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-lg p-8 mb-8 text-center">
//           <h1 className="text-4xl font-bold mb-2">Test Completed!</h1>
//           <p className="text-xl">Congratulations on completing the aptitude test</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Performance</h2>
//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             <div className="text-center">
//               <div className="text-6xl font-bold text-primary-600 mb-2">{result.totalScore}/{result.totalQuestions}</div>
//               <div className="text-gray-600">Correct Answers</div>
//             </div>
//             <div className="text-center">
//               <div className="text-6xl font-bold text-primary-600 mb-2">{result.percentage.toFixed(1)}%</div>
//               <div className="text-gray-600">Percentage</div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Colleges for You</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {recommendedColleges.map(college => (
//               <div key={college.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
//                 <div className="bg-primary-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">Rank #{college.ranking}</div>
//                 <h3 className="font-bold text-gray-800 mb-2">{college.name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{college.location}</p>
//                 <p className="text-sm text-gray-600 mb-3">Avg Package: {college.avgPackage}</p>
//                 <Link to={`/college-details/${college.id}`} className="text-primary-600 hover:text-primary-700 font-semibold text-sm">View Details →</Link>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <div className="grid md:grid-cols-2 gap-4">
//             <Link to="/college-list" className="block text-center bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">Browse All Colleges</Link>
//             <button onClick={() => window.print()} className="block text-center bg-gray-200 text-gray-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Download Results</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TestResults;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const colleges = [
  { id: 1, name: 'Indian Institute of Technology Delhi', ranking: 1, location: 'New Delhi, India', avgPackage: '₹15,00,000' },
  { id: 2, name: 'Indian Institute of Management Ahmedabad', ranking: 1, location: 'Ahmedabad, Gujarat', avgPackage: '₹25,00,000' }
];

interface TestResult {
  totalScore: number;
  totalQuestions: number;
  percentage: number;
}

const TestResults = () => {
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const savedResult = localStorage.getItem('testResult');
    if (savedResult) setResult(JSON.parse(savedResult));
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No Test Results Found</h1>
          <p className="text-gray-600 mb-6">You haven't taken the aptitude test yet</p>
          <Link 
            to="/aptitude-test" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Take Aptitude Test
          </Link>
        </div>
      </div>
    );
  }

  const recommendedColleges = colleges.slice(0, 2);
  
  // Calculate grade
  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-50' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-50' };
    if (percentage >= 70) return { grade: 'B+', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (percentage >= 50) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const { grade, color, bg } = getGrade(result.percentage);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg p-8 mb-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Test Completed Successfully!</h1>
          <p className="text-green-50">Congratulations on completing the aptitude assessment</p>
        </div>

        {/* Performance Card */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Performance</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Grade */}
            <div className={`text-center p-6 rounded-lg ${bg}`}>
              <div className={`text-5xl font-bold mb-2 ${color}`}>{grade}</div>
              <div className="text-sm font-medium text-gray-600">Your Grade</div>
            </div>

            {/* Score */}
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {result.totalScore}<span className="text-3xl">/{result.totalQuestions}</span>
              </div>
              <div className="text-sm font-medium text-gray-600">Correct Answers</div>
            </div>

            {/* Percentage */}
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="text-5xl font-bold text-purple-600 mb-2">{result.percentage.toFixed(1)}%</div>
              <div className="text-sm font-medium text-gray-600">Score</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Performance</span>
              <span>{result.percentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${result.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Recommended Colleges */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-8 mb-8">
          <div className="flex items-center mb-6">
            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="text-xl font-bold text-gray-900">Recommended Colleges for You</h2>
          </div>
          <p className="text-gray-600 mb-6 text-sm">Based on your test performance, we recommend these top institutions</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedColleges.map(college => (
              <div key={college.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    #{college.ranking} Rank
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{college.name}</h3>
                <p className="text-sm text-gray-600 flex items-center mb-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {college.location}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-medium">Avg Package:</span> {college.avgPackage}
                </p>
                <Link 
                  to={`/college-details/${college.id}`} 
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View Details
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/college-list"
              className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Browse All Colleges
            </Link>
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Results
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/aptitude-test" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Retake Test
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need guidance on college selection?{' '}
            <a href="mailto:support@collegefinder.com" className="font-medium text-blue-600 hover:text-blue-700">
              Contact our counselors
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
