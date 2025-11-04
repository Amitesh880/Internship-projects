import { useState } from 'react';
import { Link } from 'react-router-dom';

const docs = [
  { id: 1, title: 'PAN Card.pdf' },
  { id: 2, title: 'Passport.pdf' },
  { id: 3, title: '10th Marksheet.pdf' }
];

const ShareDocument = () => {
  const [selected, setSelected] = useState<number | null>(docs[0].id);
  const [email, setEmail] = useState('');
  const [expiry, setExpiry] = useState('24');

  const handleShare = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Document shared successfully!');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Link to="/my-documents" className="inline-flex items-center text-gray-700 hover:text-indigo-600 mb-6 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to My Documents
        </Link>
        <div className="bg-white rounded-3xl shadow-2xl border border-indigo-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Document</h2>
          <form onSubmit={handleShare} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Document to Share
              </label>
              <select
                value={selected ?? undefined}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                onChange={e => setSelected(Number(e.target.value))}
              >
                {docs.map(d => <option key={d.id} value={d.id}>{d.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Share With (Email)
              </label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                placeholder="recipient@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Validity (hours)</label>
              <select
                value={expiry}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                onChange={e => setExpiry(e.target.value)}
              >
                <option value="6">6 Hours</option>
                <option value="24">24 Hours</option>
                <option value="72">72 Hours</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-xl transition"
            >
              Share Securely
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShareDocument;
