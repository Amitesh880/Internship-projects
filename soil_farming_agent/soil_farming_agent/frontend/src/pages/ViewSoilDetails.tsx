import { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewSoilDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');

  const soils = [
    {
      id: 1,
      name: 'Loamy Sand',
      type: 'Sandy',
      ph: 6.5,
      color: 'Light Brown',
      texture: 'Coarse',
      waterRetention: 'Low',
      fertility: 'Moderate',
      drainage: 'Excellent',
      crops: ['Peanuts', 'Potatoes', 'Carrots', 'Lettuce'],
      seasons: ['Monsoon', 'Winter'],
      description: 'Well-draining soil ideal for root vegetables and crops requiring good aeration.'
    },
    {
      id: 2,
      name: 'Red Clay',
      type: 'Clay',
      ph: 7.2,
      color: 'Red',
      texture: 'Fine',
      waterRetention: 'High',
      fertility: 'Good',
      drainage: 'Poor',
      crops: ['Rice', 'Cotton', 'Wheat', 'Sugarcane'],
      seasons: ['Monsoon', 'Summer'],
      description: 'Rich in iron oxide, suitable for water-intensive crops. Requires proper drainage management.'
    },
    {
      id: 3,
      name: 'Black Cotton Soil',
      type: 'Clay',
      ph: 7.8,
      color: 'Black',
      texture: 'Fine',
      waterRetention: 'Very High',
      fertility: 'Excellent',
      drainage: 'Poor',
      crops: ['Cotton', 'Wheat', 'Jowar', 'Linseed'],
      seasons: ['Winter', 'Summer'],
      description: 'Highly fertile soil rich in calcium and magnesium. Ideal for cotton cultivation.'
    },
    {
      id: 4,
      name: 'Alluvial Soil',
      type: 'Loamy',
      ph: 6.8,
      color: 'Light Grey',
      texture: 'Medium',
      waterRetention: 'Medium',
      fertility: 'Excellent',
      drainage: 'Good',
      crops: ['Rice', 'Wheat', 'Sugarcane', 'Vegetables'],
      seasons: ['All Seasons'],
      description: 'Most fertile soil deposited by rivers. Suitable for diverse crop cultivation.'
    }
  ];

  const filteredSoils = soils.filter(soil => {
    const matchesSearch = soil.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          soil.crops.some(crop => crop.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterType === '' || soil.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="px-6 py-4 flex items-center gap-4">
          <Link to="/user-dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Explore Soil Types</h1>
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
                  placeholder="Search by soil name or crop..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                />
              </div>
            </div>
            <div className="md:w-64">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
              >
                <option value="">All Soil Types</option>
                <option value="Sandy">Sandy</option>
                <option value="Clay">Clay</option>
                <option value="Loamy">Loamy</option>
                <option value="Silt">Silt</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing <span className="font-bold text-gray-900">{filteredSoils.length}</span> soil types
          </p>
        </div>

        {/* Soil Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSoils.map(soil => (
            <div key={soil.id} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{soil.name}</h3>
                    <p className="text-amber-100">{soil.type} Soil</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
                      <p className="text-xs text-amber-100">pH Level</p>
                      <p className="text-2xl font-bold text-white">{soil.ph}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{soil.description}</p>

                {/* Properties Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Color</p>
                    <p className="font-bold text-gray-900">{soil.color}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Texture</p>
                    <p className="font-bold text-gray-900">{soil.texture}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Water Retention</p>
                    <p className="font-bold text-gray-900">{soil.waterRetention}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Fertility</p>
                    <p className="font-bold text-gray-900">{soil.fertility}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Drainage</p>
                    <p className="font-bold text-gray-900">{soil.drainage}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Best Seasons</p>
                    <p className="font-bold text-gray-900 text-sm">{soil.seasons.join(', ')}</p>
                  </div>
                </div>

                {/* Suitable Crops */}
                <div className="border-t-2 border-gray-100 pt-4">
                  <p className="text-sm font-bold text-gray-700 mb-3">Suitable Crops</p>
                  <div className="flex flex-wrap gap-2">
                    {soil.crops.map((crop, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-semibold border border-green-200">
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSoils.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl font-semibold text-gray-900 mb-2">No soils found</p>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewSoilDetails;
