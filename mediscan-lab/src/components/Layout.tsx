
import Navbar from './Navbar';
import Footer from './Footer';
import SupportWidget from './SupportWidget';
import RedirectInterceptor from './RedirectInterceptor';

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
            <RedirectInterceptor />
        </div>
    );
};

export default Layout;
