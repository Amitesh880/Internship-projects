import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostSoilDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    soilName: '',
    soilType: '',
    phLevel: '',
    texture: '',
    color: '',
    waterRetention: '',
    fertility: '',
    suitableCrops: '',
    bestSeasons: '',
    nutrients: '',
    drainage: '',
    organicMatter: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Soil details posted successfully!');
    navigate('/admin-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center gap-4">
          <Link to="/admin-dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Add New Soil Type</h1>
        </div>
      </header>

      <div className="p-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-6">
            <h2 className="text-3xl font-extrabold text-white mb-2">Soil Information Entry</h2>
            <p className="text-amber-100">Provide detailed soil characteristics and recommendations</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* Basic Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-amber-200 flex items-center gap-2">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 font-bold">1</span>
                Basic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Soil Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="soilName"
                    required
                    value={formData.soilName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                    placeholder="e.g., Loamy Sand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Soil Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="soilType"
                    required
                    value={formData.soilType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                  >
                    <option value="">Select type</option>
                    <option value="Sandy">Sandy</option>
                    <option value="Clay">Clay</option>
                    <option value="Loamy">Loamy</option>
                    <option value="Silt">Silt</option>
                    <option value="Peat">Peat</option>
                    <option value="Chalk">Chalk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    pH Level <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="phLevel"
                    required
                    step="0.1"
                    value={formData.phLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                    placeholder="e.g., 6.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Texture
                  </label>
                  <input
                    type="text"
                    name="texture"
                    value={formData.texture}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                    placeholder="e.g., Coarse, Medium, Fine"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Color
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                    placeholder="e.g., Dark Brown"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Water Retention
                  </label>
                  <select
                    name="waterRetention"
                    value={formData.waterRetention}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                  >
                    <option value="">Select level</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Fertility Level
                  </label>
                  <select
                    name="fertility"
                    value={formData.fertility}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                  >
                    <option value="">Select level</option>
                    <option value="Poor">Poor</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Good">Good</option>
                    <option value="Excellent">Excellent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Drainage
                  </label>
                  <select
                    name="drainage"
                    value={formData.drainage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none"
                  >
                    <option value="">Select drainage</option>
                    <option value="Poor">Poor</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Good">Good</option>
                    <option value="Excellent">Excellent</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Agricultural Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-200 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">2</span>
                Agricultural Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Suitable Crops <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="suitableCrops"
                    required
                    value={formData.suitableCrops}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none"
                    placeholder="List crops that grow well in this soil (comma separated)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Best Seasons
                  </label>
                  <input
                    type="text"
                    name="bestSeasons"
                    value={formData.bestSeasons}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                    placeholder="e.g., Monsoon, Winter, Summer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Key Nutrients
                  </label>
                  <textarea
                    name="nutrients"
                    value={formData.nutrients}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none"
                    placeholder="List primary nutrients (N, P, K, etc.)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Organic Matter %
                  </label>
                  <input
                    type="number"
                    name="organicMatter"
                    step="0.1"
                    value={formData.organicMatter}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                    placeholder="e.g., 3.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Additional Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none"
                    placeholder="Add any additional information, recommendations, or special characteristics..."
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Publish Soil Details
              </button>
              <Link
                to="/admin-dashboard"
                className="px-8 py-4 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostSoilDetails;
