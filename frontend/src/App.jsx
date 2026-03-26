import { Link, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import FormPredictionPage from './pages/FormPredictionPage';
import ImagePredictionPage from './pages/ImagePredictionPage';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <div className="shell">
      <header className="header">
        <Link to="/" className="brand">AI Disease Predictor</Link>
        <Link to="/dashboard">Dashboard</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/predict/:disease" element={<FormPredictionPage />} />
          <Route path="/analyze/:disease" element={<ImagePredictionPage />} />
        </Routes>
      </main>
    </div>
  );
}
