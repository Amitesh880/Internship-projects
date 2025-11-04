import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">DigiLocker</h1>
              <p className="text-xs text-gray-500">Secure Document Vault</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Features</a>
            <a href="#security" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Security</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a>
            <Link to="/user-login" className="px-5 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
              <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-indigo-700 font-semibold text-sm">Government Approved & Secure</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Your Digital<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
                Document Vault
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Store, manage, and share your important documents securely. Aadhaar-linked digital locker 
              for all your certificates, IDs, and official papers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/user-register"
                className="group px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Create Free Account
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#features"
                className="px-8 py-4 bg-white border-2 border-indigo-200 text-indigo-700 rounded-xl font-bold hover:bg-indigo-50 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                title: 'Bank-Level Security',
                desc: 'Military-grade encryption for all your documents',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
                title: 'Cloud Storage',
                desc: 'Access your documents anywhere, anytime',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
                title: 'Easy Sharing',
                desc: 'Share documents securely with anyone',
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all">
                <div className={`w-16 h-16 bg-linear-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-gray-600 text-lg">Complete document management solution</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
                title: 'Upload Documents',
                desc: 'Drag and drop to upload marksheets, PAN, passport, and more',
                color: 'indigo'
              },
              {
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                title: 'Organize & Categorize',
                desc: 'Smart folders for education, health, ID proofs, and certificates',
                color: 'purple'
              },
              {
                icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
                title: 'Secure Sharing',
                desc: 'Share documents via encrypted links with time-limited access',
                color: 'pink'
              },
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Aadhaar Verified',
                desc: 'Linked to your Aadhaar for authentic identity verification',
                color: 'green'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                <div className={`shrink-0 w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            {[
              { number: '10M+', label: 'Documents Stored' },
              { number: '5M+', label: 'Active Users' },
              { number: '99.9%', label: 'Uptime' }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-5xl font-extrabold mb-2">{stat.number}</p>
                <p className="text-indigo-200 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">Ready to Go Paperless?</h2>
            <p className="text-indigo-100 text-lg mb-8">Join millions securing their documents digitally</p>
            <Link
              to="/user-register"
              className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">DigiLocker</span>
          </div>
          <p className="text-sm mb-6">Secure. Simple. Sovereign.</p>
          <div className="flex justify-center gap-6 text-sm mb-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <p className="text-xs text-gray-500">© 2025 DigiLocker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
