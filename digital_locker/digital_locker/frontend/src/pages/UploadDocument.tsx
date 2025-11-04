import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categories = ['Marksheet', 'PAN Card', 'Passport', 'Degree', 'Medical', 'Other'];

const UploadDocument = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !category || !title) return alert('Please provide required fields.');
    // Simulate successful upload
    alert('Document uploaded successfully!');
    navigate('/my-documents');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Link to="/dashboard" className="inline-flex items-center text-gray-700 hover:text-indigo-600 mb-6 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
        <div className="bg-white rounded-3xl shadow-2xl border border-indigo-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Document</h2>
          <form onSubmit={handleUpload} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Document Title <span className="text-red-500">*</span>
              </label>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                placeholder="e.g., 12th Marksheet"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              >
                <option value="">Select</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={desc}
                onChange={e => setDesc(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 resize-none"
                placeholder="Optional (e.g., issued by CBSE, 2014)"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Upload File <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={e => setFile(e.target.files?.[0] || null)}
                required
                className="block w-full py-1.5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-xl transition"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadDocument;
