
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Masterclass from './pages/Masterclass.tsx';
import Bootcamp from './pages/Bootcamp.tsx';
import Coaching from './pages/Coaching.tsx';
import About from './pages/About.tsx';
import Success from './pages/Success.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/masterclass" element={<Layout><Masterclass /></Layout>} />
        <Route path="/bootcamp" element={<Layout><Bootcamp /></Layout>} />
        <Route path="/coaching" element={<Layout><Coaching /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/success" element={<Layout><Success /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
