
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import UserGuidePage from './pages/UserGuide';
import DocsPage from './pages/Docs';
import ApiReferencePage from './pages/ApiReference';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/user-guide" element={<UserGuidePage />} />
            <Route path="/api" element={<ApiReferencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}