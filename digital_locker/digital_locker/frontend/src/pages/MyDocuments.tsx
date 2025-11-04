import { Link } from 'react-router-dom';

const documents = [
  { id: 1, title: '10th Marksheet', category: 'Marksheet', uploaded: '2024-05-17', status: 'Active' },
  { id: 2, title: 'PAN Card', category: 'PAN Card', uploaded: '2024-05-18', status: 'Shared' },
  { id: 3, title: 'Passport', category: 'Passport', uploaded: '2024-05-19', status: 'Active' }
];

const MyDocuments = () => (
  <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
    <header className="px-6 py-4 flex items-center gap-4">
      <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <h1 className="text-xl font-bold text-gray-900">My Documents</h1>
      <Link to="/upload-document" className="ml-auto px-5 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition">+ Upload New</Link>
    </header>
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-gray-100 shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left font-semibold">Title</th>
              <th className="p-4 text-left font-semibold">Category</th>
              <th className="p-4 text-left font-semibold">Uploaded</th>
              <th className="p-4 text-left font-semibold">Status</th>
              <th className="p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc => (
              <tr key={doc.id} className="border-b last:border-b-0 hover:bg-indigo-50 transition">
                <td className="p-4">{doc.title}</td>
                <td className="p-4">{doc.category}</td>
                <td className="p-4">{doc.uploaded}</td>
                <td className="p-4">{doc.status}</td>
                <td className="p-4">
                  <Link to="/share-document" className="px-3 py-1 rounded bg-indigo-100 text-indigo-700 font-semibold text-xs mr-2">Share</Link>
                  <Link to="/upload-document" className="px-3 py-1 rounded bg-gray-100 text-gray-700 font-semibold text-xs mr-2">Update</Link>
                  <button className="px-3 py-1 rounded bg-red-100 text-red-700 font-semibold text-xs">Delete</button>
                </td>
              </tr>
            ))}
            {documents.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-400">No documents uploaded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default MyDocuments;
