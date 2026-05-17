
import Navbar from './Navbar';
import Footer from './Footer';
import SupportWidget from './SupportWidget';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <SupportWidget />
        </div>
    );
};

export default Layout;
