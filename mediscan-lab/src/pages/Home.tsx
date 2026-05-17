import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />

            <WhyChooseUs />
            <Services />
        </div>
    );
};

export default Home;
