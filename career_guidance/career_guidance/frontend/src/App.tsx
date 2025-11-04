import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/Homepage';
import StudentLogin from './pages/StudentLogin';
import StudentSignup from './pages/StudentSignup';
import CollegeSignup from './pages/CollegeSignup';
import CareerSelection from './pages/CareerSelection';
import LocationSelection from './pages/LocationSelection';
import CollegeList from './pages/CollegeList';
import CollegeDetails from './pages/CollegeDetails';
import CollegeApplication from './pages/CollegeApplication';
import StudentDetails from './pages/StudentDetails';
import AptitudeTest from './pages/AptitudeTest';
import TestResults from './pages/TestResults';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/college-signup" element={<CollegeSignup />} />
        <Route path="/career-selection" element={<CareerSelection />} />
        <Route path="/location-selection" element={<LocationSelection />} />
        <Route path="/college-list" element={<CollegeList />} />
        <Route path="/college-details/:id" element={<CollegeDetails />} />
        <Route path="/college-application/:id" element={<CollegeApplication />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />
        <Route path="/test-results" element={<TestResults />} />
      </Routes>
    </Router>
  );
}
export default App;
