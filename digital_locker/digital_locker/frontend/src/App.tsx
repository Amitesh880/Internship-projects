import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserRegister from './pages/UserRegister';
import VerifyOTP from './pages/VerifyOTP';
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';
import UploadDocument from './pages/UploadDocument';
import MyDocuments from './pages/MyDocuments';
import ShareDocument from './pages/ShareDocument';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload-document" element={<UploadDocument />} />
        <Route path="/my-documents" element={<MyDocuments />} />
        <Route path="/share-document" element={<ShareDocument />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
