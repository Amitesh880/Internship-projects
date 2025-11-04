import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Sample data for visualization
  const soilData = {
    monthly: [65, 72, 68, 75, 82, 78],
    yearly: [60, 65, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92]
  };
  
  // Sample notifications
  const notifications = [
    { id: 1, title: 'Soil Analysis Complete', message: 'Your recent soil sample analysis is ready to view', time: '2 hours ago', read: false },
    { id: 2, title: 'New Crop Recommendation', message: 'Based on your soil data, we recommend planting wheat this season', time: '1 day ago', read: false },
    { id: 3, title: 'Weather Alert', message: 'Heavy rainfall expected in your region. Consider soil protection measures', time: '2 days ago', read: true },
    { id: 4, title: 'Distributor Update', message: 'New seed supplier added in your area', time: '1 week ago', read: true }
  ];
  
  const quickLinks = [
    { title: 'Browse Soil Types', desc: 'Explore different soil characteristics', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z', link: '/view-soil-details', gradient: 'from-amber-500 to-orange-500' },
    { title: 'Find Distributors', desc: 'Connect with seed suppliers', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', link: '/view-distributors', gradient: 'from-green-500 to-emerald-500' },
    { title: 'Crop Recommendations', desc: 'Get personalized advice', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', link: '#', gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Farming Tips', desc: 'Learn best practices', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', link: '#', gradient: 'from-purple-500 to-pink-500' }
  ];

  const recentlyViewed = [
    { name: 'Loamy Sand', type: 'Sandy Soil', ph: '6.5', crops: 'Vegetables, Cereals' },
    { name: 'Red Clay', type: 'Clay Soil', ph: '7.2', crops: 'Rice, Cotton' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container-pro py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Farmer Dashboard</h1>
              <p className="text-sm text-emerald-600 font-medium">Welcome back, Ramesh!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                className="p-2 hover:bg-emerald-50 rounded-full transition-colors relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              {/* Notification Panel */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 card-pro z-50 overflow-hidden transform transition-all duration-300 ease-in-out">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-white flex justify-between items-center">
                    <h3 className="font-medium">Notifications</h3>
                    <span className="bg-white text-emerald-600 text-xs rounded-full px-2 py-1 font-bold">
                      {notifications.filter(n => !n.read).length} New
                    </span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 ${!notification.read ? 'bg-emerald-50' : ''}`}>
                        <div className="flex justify-between">
                          <p className="font-medium text-gray-800">{notification.title}</p>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 bg-gray-50 text-center">
                    <button className="btn-outline text-sm">
                      Mark all as read
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Link to="/" className="btn-outline">
              Logout
            </Link>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 mb-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
          <div className="relative">
            <h2 className="text-3xl font-extrabold mb-2">Grow Smarter with AgriSoil</h2>
            <p className="text-emerald-100 mb-6 max-w-xl">Access expert soil knowledge and connect with trusted suppliers for optimal crop yields</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/view-soil-details" className="px-6 py-3 bg-white text-emerald-600 rounded-full font-bold hover:shadow-lg transition-all">
                Explore Soils
              </Link>
              <Link to="/view-distributors" className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold hover:bg-white/30 transition-all">
                Find Suppliers
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-1 bg-emerald-500 rounded-full mr-3"></span>
            Quick Access
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.link}
                className="group card-pro p-6"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${link.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{link.desc}</p>
                <span className="text-xs font-medium text-emerald-600 flex items-center">
                  Learn more
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Data Visualization */}
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          {/* Soil Health Trends */}
          <div className="card-pro overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="w-6 h-1 bg-emerald-500 rounded-full mr-3"></span>
                Soil Health Trends
              </h2>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => setActiveTab('monthly')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${activeTab === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
                >
                  6 Months
                </button>
                <button 
                  onClick={() => setActiveTab('yearly')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${activeTab === 'yearly' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
                >
                  12 Months
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="h-64 flex items-end justify-between">
                {soilData[activeTab as keyof typeof soilData].map((value: number, index: number) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-10 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg shadow-md transition-all duration-500 ease-in-out hover:from-emerald-600 hover:to-teal-500"
                      style={{ height: `${value}%` }}
                    ></div>
                    <span className="text-xs font-medium text-gray-500 mt-2">
                      {activeTab === 'monthly' 
                        ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index] 
                        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]
                      }
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Soil health score based on pH, nutrient levels, and organic matter</p>
                <button className="mt-4 text-emerald-600 text-sm font-medium flex items-center mx-auto">
                  View detailed report
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Soil Health Score Card */}
          <div className="card-pro overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="w-6 h-1 bg-emerald-500 rounded-full mr-3"></span>
                Soil Health Score
              </h2>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="10"
                    />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="56.6" 
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#0d9488" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900">80</span>
                    <span className="text-sm font-medium text-gray-500">out of 100</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">pH Level</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">6.8</span>
                    <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">Optimal</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Nitrogen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">75%</span>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Good</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Phosphorus</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">65%</span>
                    <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Moderate</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Organic Matter</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">85%</span>
                    <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="card-pro overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="w-6 h-1 bg-emerald-500 rounded-full mr-3"></span>
              Recently Viewed Soils
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {recentlyViewed.map((soil, idx) => (
                <div key={idx} className="card-pro p-6 hover:shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{soil.name}</h3>
                      <p className="text-sm text-gray-500">{soil.type}</p>
                    </div>
                    <span className="badge">
                      pH {soil.ph}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Suitable for:</span> {soil.crops}
                    </div>
                    <Link to="#" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
