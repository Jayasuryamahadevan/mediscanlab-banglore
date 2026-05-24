import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <section className="px-4 py-8 md:py-12">
                <div className="container-shell">
                    <div className="rounded-[34px] border border-slate-200/70 bg-white/65 p-6 md:p-8 shadow-xl backdrop-blur-xl">
                        <div className="grid gap-4 md:grid-cols-2">
                            <a
                                href="https://reports.mediscanlab.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all hover:shadow-lg"
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#986699]">Patient Portal</p>
                                <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--color-brand-black)]">Download Report</h3>
                                <p className="mt-2 text-sm font-medium text-slate-500">Access and download your digital reports securely.</p>
                            </a>

                            <Link
                                to="/home-sample-collection"
                                className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all hover:shadow-lg"
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#986699]">At-Home Service</p>
                                <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--color-brand-black)]">Home Sample Collection</h3>
                                <p className="mt-2 text-sm font-medium text-slate-500">Book trained technicians for convenient blood collection at home.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <Services />
            <Reviews />
        </div>
    );
};

export default Home;
