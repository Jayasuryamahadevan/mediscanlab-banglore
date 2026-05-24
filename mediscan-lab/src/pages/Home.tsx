import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />

            <WhyChooseUs />
            <Services />
            <Reviews />
        </div>
    );
};

export default Home;
