import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import RouteScrollTop from './components/RouteScrollTop';
import CmsPage from './pages/CmsPage';
import Packages from './pages/Packages';
import LabTests from './pages/LabTests';
import Search from './pages/Search';
import ServicesDirectory from './pages/ServicesDirectory';
import ProductCatalog from './pages/ProductCatalog';
import ProductPage from './pages/ProductPage';
import AllContent from './pages/AllContent';
import AboutUs from './pages/AboutUs';
import SmoothScroll from './components/SmoothScroll';
import './styles/variables.css';

const pageTransition = {
    initial: { opacity: 0, y: 20, scale: 0.994, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -16, scale: 0.996, filter: 'blur(4px)' }
};

const AnimatedRoutes = () => {
    const location = useLocation();
    const transitionKey = `${location.pathname}${location.search}`;

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={transitionKey}
                className="page-transition-shell"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.34, ease: [0.22, 0.61, 0.36, 1] }}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/tests" element={<LabTests />} />
                    <Route path="/services" element={<ServicesDirectory />} />
                    <Route path="/products" element={<ProductCatalog />} />
                    <Route path="/product/:slug" element={<ProductPage />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/all-content" element={<AllContent />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="*" element={<CmsPage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <SmoothScroll>
                <RouteScrollTop />
                <Layout>
                    <AnimatedRoutes />
                </Layout>
            </SmoothScroll>
        </Router>
    );
}

export default App;
