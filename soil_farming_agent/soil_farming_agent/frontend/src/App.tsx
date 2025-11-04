import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PostSoilDetails from './pages/PostSoilDetails';
import PostDistributor from './pages/PostDistributor';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import UserDashboard from './pages/UserDashboard';
import ViewSoilDetails from './pages/ViewSoilDetails';
import ViewDistributors from './pages/ViewDistributors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/post-soil-details" element={<PostSoilDetails />} />
        <Route path="/post-distributor" element={<PostDistributor />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/view-soil-details" element={<ViewSoilDetails />} />
        <Route path="/view-distributors" element={<ViewDistributors />} />
      </Routes>
    </Router>
  );
}

export default App;
