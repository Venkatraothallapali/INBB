import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutFounders from './pages/AboutFounders';
import Contests from './pages/Contests';
import RegionalBrainBee from './pages/RegionalBrainBee';
import Winners2026 from './pages/Winners2019';
import INBBFinal from './pages/INBBFinal';
import Sponsor from './pages/Sponsor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-founders" element={<AboutFounders />} />
          <Route path="contests" element={<Contests />} />
          <Route path="regional-brain-bee" element={<RegionalBrainBee />} />
          <Route path="winners-2026" element={<Winners2026 />} />
          <Route path="inbb-final" element={<INBBFinal />} />
          <Route path="sponsor" element={<Sponsor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
