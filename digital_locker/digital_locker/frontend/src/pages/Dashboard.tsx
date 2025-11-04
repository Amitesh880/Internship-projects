import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Simple mock stats
  const docStats = [
    { label: 'Total Documents', value: '8', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'indigo' },
    { label: 'Shared Docs', value: '3', icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z', color: 'pink' },
    { label: 'Last Uploaded', value: 'PAN Card.pdf', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'green' }
  ];

  const quickLinks = [
    { title: 'Upload Document', link: '/upload-document', icon: 'M17 12h-6m0 0V6m0 6v6m0-6h6m-6 0H7', color: 'indigo' },
    { title: 'My Documents', link: '/my-documents', icon: 'M5 13l4 4L19 7', color: 'purple' },
    { title: 'Share Document', link: '/share-document', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', color: 'pink' },
    { title: 'My Profile', link: '/my-profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Your DigiLocker</h1>
          </div>
          <div>
            <Link to="/" className="px-5 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-all">
              Logout
            </Link>
          </div>
        </div>
      </header>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {docStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow hover:shadow-xl flex items-center gap-4">
              <div className={`w-16 h-16 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                <svg className={`w-7 h-7 text-${stat.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div>
                <p className="text-md font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Quick Navigation */}
        <div className="mb-10">
          <div className="grid md:grid-cols-4 gap-6">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.link}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 bg-${link.color}-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <svg className={`w-7 h-7 text-${link.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{link.title}</h3>
              </Link>
            ))}
          </div>
        </div>
        {/* Action Banner */}
        <div className="rounded-2xl text-white text-center p-10 bg-linear-to-r from-indigo-600 to-purple-600 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-1">Upload, Organize, and Share all your important documents!</h2>
          <p className="text-indigo-200 mb-2">Use DigiLocker to keep mark sheets, IDs, and all essentials safe and handy.</p>
          <Link to="/upload-document" className="px-8 py-3 bg-white text-indigo-700 rounded-xl font-bold shadow hover:bg-indigo-50 transition">
            Upload Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
