import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioSingle from './pages/PortfolioSingle';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
