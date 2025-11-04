// import { Link } from "react-router-dom";

// const HomePage = () => (
//   <div className="min-h-screen flex flex-col">
//     <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 flex-1">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-5xl font-bold mb-6">CollegeFinder</h1>
//         <p className="text-xl mb-8 max-w-3xl mx-auto">
//           Discover the best engineering and management colleges in India and abroad.  
//           Explore, filter, compare, and apply—all in one place.
//         </p>
//         <div className="flex gap-4 justify-center flex-wrap">
//           <Link to="/student-signup" className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//             Get Started
//           </Link>
//           <Link to="/college-list" className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors border-2 border-white">
//             Browse Colleges
//           </Link>
//         </div>
//       </div>
//     </section>
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Why Choose CollegeFinder?</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="text-center p-6">
//             <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Comprehensive Search</h3>
//             <p className="text-gray-600">Search hundreds of colleges with advanced filters by ranking, fees, location, and more.</p>
//           </div>
//           <div className="text-center p-6">
//             <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Eligibility Check</h3>
//             <p className="text-gray-600">Check your eligibility based on entrance exam scores and academic performance.</p>
//           </div>
//           <div className="text-center p-6">
//             <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Career Guidance</h3>
//             <p className="text-gray-600">Get personalized recommendations based on your interests and aptitude test results.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// );

// export default HomePage;
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("theme");
      return stored ? stored === "dark" : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
  <div className={`min-h-screen flex flex-col ${isDark ? 'bg-surface-50 text-gray-100' : 'bg-surface-0 text-gray-900'}`}>
    {/* Navigation Bar */}
    <nav className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-surface-0 border-gray-200'} shadow-sm border-b`}>
      <div className="page-container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>CollegeFinder</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/student-login" className="nav-link">
              Sign In
            </Link>
            <Link
              to="/student-signup"
              className="btn btn-primary px-4 py-2 text-sm"
            >
              Sign Up
            </Link>
            <button
              aria-label="Toggle theme"
              className={`ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md border ${isDark ? 'border-gray-700 text-gray-200 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors`}
              onClick={() => setIsDark(d => !d)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {isDark ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M5.929 6.343l-.707-.707M18.364 5.636l.707-.707M5.636 18.364l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.752 15.002A9.718 9.718 0 0112.002 21c-5.385 0-9.75-4.365-9.75-9.75 0-4.273 2.706-7.9 6.5-9.254A8 8 0 1021.752 15z" />
                )}
              </svg>
              <span className="text-sm">{isDark ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className={`hero-gradient py-20 flex-1`}>
      <div className="page-container text-center">
        <h1 className="heading-1 mb-6">
          Find Your Perfect College
        </h1>
        <DynamicTagline />
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/student-signup"
            className="btn btn-hero px-8 py-3"
          >
            Get Started
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/college-list"
            className="btn btn-outline px-8 py-3"
          >
            Browse Colleges
          </Link>
        </div>
      </div>
    </section>

    {/* Search Section */}
    <section className={`${isDark ? 'bg-gray-950' : 'bg-surface-0'} py-12 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="page-container max-w-3xl">
        <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Quick College Search</h3>
        <CollegeSearch isDark={isDark} />
      </div>
    </section>

    {/* Features Section */}
    <section className={`section ${isDark ? 'bg-gray-900' : 'bg-surface-50'}`}>
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className={`heading-2 ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-3`}>Why Choose CollegeFinder?</h2>
          <p className={`subtle max-w-2xl mx-auto`}>
            We make college selection simple with powerful tools and personalized guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`card text-center hover:shadow-md transition-shadow`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Comprehensive Search</h3>
            <p className={`subtle`}>
              Search hundreds of colleges with advanced filters by ranking, fees, location, and more
            </p>
          </div>

          <div className={`card text-center hover:shadow-md transition-shadow`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Eligibility Check</h3>
            <p className={`subtle`}>
              Check your eligibility based on entrance exam scores and academic performance
            </p>
          </div>

          <div className={`card text-center hover:shadow-md transition-shadow`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Career Guidance</h3>
            <p className={`subtle`}>
              Get personalized recommendations based on your interests and aptitude test results
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className={`section ${isDark ? 'bg-gray-950' : 'bg-surface-0'}`}>
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className={`heading-2 ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-3`}>How It Works</h2>
          <p className={`subtle max-w-2xl mx-auto`}>
            Find your dream college in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: 1, title: 'Create Account', desc: 'Sign up and complete your profile', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' },
            { step: 2, title: 'Choose Career', desc: 'Select your field of interest', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { step: 3, title: 'Browse Colleges', desc: 'Explore and compare options', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
            { step: 4, title: 'Apply', desc: 'Submit your application online', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
          ].map(item => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-600 text-white rounded-full mb-4 font-bold text-xl">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className={`py-16 ${isDark ? 'bg-brand-700' : 'bg-brand-600'}`}>
      <div className="page-container text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream College?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of students who have found their perfect college match through CollegeFinder
        </p>
        <Link
          to="/student-signup"
          className="btn btn-hero px-8 py-3 shadow-lg"
        >
          Get Started for Free
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>

    {/* Footer */}
    <footer className={`${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-gray-300'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">© 2025 CollegeFinder. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default HomePage;

function DynamicTagline() {
  const phrases = [
    "Discover top colleges across India and abroad.",
    "Explore courses, rankings, fees, and scholarships.",
    "Plan your career path with expert guidance.",
  ];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = deleting ? 40 : 70;
    const timer = setTimeout(() => {
      setDisplay((prev) => {
        if (!deleting) {
          const next = current.slice(0, prev.length + 1);
          if (next === current) setTimeout(() => setDeleting(true), 1000);
          return next;
        } else {
          const next = current.slice(0, prev.length - 1);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % phrases.length);
          }
          return next;
        }
      });
    }, speed);
    return () => clearTimeout(timer);
  }, [deleting, index, phrases]);

  return (
    <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-50">
      <span className="inline-block align-middle">{display}</span>
      <span className="inline-block w-4 h-6 align-middle ml-1 bg-blue-200 animate-pulse" aria-hidden="true"></span>
    </p>
  );
}

type CollegeSearchProps = { isDark: boolean };
function CollegeSearch({ isDark }: CollegeSearchProps) {
  const sampleColleges = [
    "Indian Institute of Technology Bombay",
    "Indian Institute of Technology Delhi",
    "National Institute of Technology Trichy",
    "Indian Institute of Management Ahmedabad",
    "BITS Pilani",
    "VIT Vellore",
    "SRM Institute of Science and Technology",
    "Manipal Institute of Technology",
    "University of Delhi",
    "Anna University",
    "Jadavpur University",
  ];

  const [query, setQuery] = useState("");
  const results = query.trim().length === 0
    ? []
    : sampleColleges.filter(c => c.toLowerCase().includes(query.toLowerCase())).slice(0, 6);

  return (
    <div>
      <div className="relative">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search colleges (e.g., IIT, IIM, NIT)"
          className={`w-full px-4 py-3 rounded-md border ${isDark ? 'bg-gray-900 border-gray-700 text-gray-100 placeholder:text-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {query && (
          <button
            className={`absolute right-2 top-2 px-3 py-1 rounded-md text-sm ${isDark ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            Clear
          </button>
        )}
      </div>

      {results.length > 0 && (
        <ul className={`mt-3 grid sm:grid-cols-2 gap-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
          {results.map((name) => (
            <li key={name} className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border rounded-md p-3 hover:border-blue-500 hover:shadow-sm transition-all`}>{name}</li>
          ))}
        </ul>
      )}
      {query.trim().length > 0 && results.length === 0 && (
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mt-3`}>No matches found. Try another keyword.</p>
      )}
    </div>
  );
}
