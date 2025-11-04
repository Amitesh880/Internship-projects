import { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewDistributors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCity, setFilterCity] = useState('');

  const distributors = [
    {
      id: 1,
      company: 'Green Seeds Co.',
      owner: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'contact@greenseeds.com',
      city: 'Mumbai',
      state: 'Maharashtra',
      products: ['Seeds', 'Fertilizers', 'Pesticides'],
      brands: ['Syngenta', 'Bayer', 'Monsanto'],
      years: 15,
      verified: true
    },
    {
      id: 2,
      company: 'AgroPro Distributors',
      owner: 'Priya Sharma',
      phone: '+91 98765 43211',
      email: 'info@agropro.com',
      city: 'Pune',
      state: 'Maharashtra',
      products: ['Seeds', 'Farm Equipment', 'Organic Fertilizers'],
      brands: ['UPL', 'Tata', 'Rallis'],
      years: 10,
      verified: true
    },
    {
      id: 3,
      company: 'FarmTech Solutions',
      owner: 'Amit Patel',
      phone: '+91 98765 43212',
      email: 'support@farmtech.com',
      city: 'Ahmedabad',
      state: 'Gujarat',
      products: ['Seeds', 'Drip Irrigation', 'Fertilizers'],
      brands: ['Jain Irrigation', 'Corteva', 'BASF'],
      years: 8,
      verified: true
    },
    {
      id: 4,
      company: 'Kisan Supply Hub',
      owner: 'Sunita Reddy',
      phone: '+91 98765 43213',
      email: 'hello@kisansupply.com',
      city: 'Bangalore',
      state: 'Karnataka',
      products: ['Seeds', 'Bio-fertilizers', 'Pesticides'],
      brands: ['FMC', 'Dhanuka', 'PI Industries'],
      years: 12,
      verified: true
    }
  ];

  const filteredDistributors = distributors.filter(dist => {
    const matchesSearch = dist.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dist.products.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCity = filterCity === '' || dist.city === filterCity;
    return matchesSearch && matchesCity;
  });

  const cities = [...new Set(distributors.map(d => d.city))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="px-6 py-4 flex items-center gap-4">
          <Link to="/user-dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Verified Distributors</h1>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by company name or product..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                />
              </div>
            </div>
            <div className="md:w-64">
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Found <span className="font-bold text-gray-900">{filteredDistributors.length}</span> verified distributors
          </p>
        </div>

        {/* Distributors Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredDistributors.map(dist => (
            <div key={dist.id} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-green-400 hover:shadow-xl transition-all">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{dist.company}</h3>
                    <p className="text-green-100 text-sm">{dist.city}, {dist.state}</p>
                  </div>
                  {dist.verified && (
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-white font-bold">Verified</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Owner Info */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{dist.owner}</p>
                    <p className="text-sm text-gray-600">{dist.years} years in business</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <a href={`tel:${dist.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">{dist.phone}</span>
                  </a>
                  <a href={`mailto:${dist.email}`} className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{dist.email}</span>
                  </a>
                </div>

                {/* Products */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">Products</p>
                  <div className="flex flex-wrap gap-2">
                    {dist.products.map((product, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold border border-green-200">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">Brands Available</p>
                  <div className="flex flex-wrap gap-2">
                    {dist.brands.map((brand, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDistributors.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl font-semibold text-gray-900 mb-2">No distributors found</p>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDistributors;
