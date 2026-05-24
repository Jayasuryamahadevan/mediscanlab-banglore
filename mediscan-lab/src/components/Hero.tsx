import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FlaskConical, Package, Search, Phone, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData, handleExternalRedirect } from '../lib/siteData';
import { MEDICAL_IMAGES } from '../lib/medical_images';

const supportPhone = siteData.contact.phones[4] ?? '+91 90355 34721';

const Hero = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        const q = query.trim();
        navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#f8fafc] px-4 py-16 md:py-24">
            {/* Professional Background Composition */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-brand-pink)]/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-900/5 rounded-full blur-[120px]" />
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-[0.03] grayscale" 
                    style={{ backgroundImage: `url('${MEDICAL_IMAGES.LAB_TEAM}')` }} 
                />
            </div>

            <div className="container-shell relative z-10">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">

                    {/* Left: Content & Glass Card */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative">
                        {/* Vertical Accent Line */}
                        <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-brand-pink)]/40 via-slate-200 to-transparent hidden xl:block" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-3 rounded-full bg-white border border-slate-100 px-4 py-1.5 mb-8 md:mb-10 shadow-sm">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--color-brand-pink)]" />
                                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400">Trusted by 50,000+ Patients</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl lg:text-[8.5rem] font-black leading-[0.95] md:leading-[0.85] tracking-tighter text-[var(--color-brand-black)] mb-6 md:mb-8">
                                <span className="block opacity-60">Precision</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[var(--color-brand-pink)] to-slate-700 brightness-110">Diagnostics</span>
                            </h1>

                            <div className="flex items-start gap-6 max-w-lg mb-8 md:mb-12">
                                <div className="w-1.5 bg-[var(--color-brand-pink)]/40 h-16 rounded-full" />
                                <p className="text-lg md:text-xl font-bold text-slate-600 leading-relaxed tracking-tight">
                                    {siteData.hero.subheading}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full lg:w-full">
                                <div className="flex flex-1 flex-col sm:flex-row gap-4 md:gap-5">
                                    <a
                                        href={siteData.bookingUrl}
                                        onClick={(e) => handleExternalRedirect(e, siteData.bookingUrl)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-brand-black group relative overflow-hidden flex items-center justify-center gap-5 rounded-[20px] px-10 py-6 md:px-12 md:py-7 text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl transition-all hover:translate-y-[-2px] flex-1"
                                    >
                                        <span className="relative z-10">Get Started</span>
                                        <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </a>

                                    <a
                                        href={siteData.reportsUrl}
                                        onClick={(e) => handleExternalRedirect(e, siteData.reportsUrl)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-brand-black group relative overflow-hidden flex items-center justify-center gap-5 rounded-[20px] px-10 py-6 md:px-12 md:py-7 text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl transition-all hover:translate-y-[-2px] flex-1 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
                                    >
                                        <span className="relative z-10">Download Report</span>
                                        <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                </div>

                                <a 
                                    href={`tel:${supportPhone.replace(/\s+/g, '')}`}
                                    className="glass-panel-elite flex items-center gap-5 rounded-[20px] px-8 py-6 md:py-7 border-white/60 bg-white/40 shadow-xl group hover:bg-white transition-all text-left shrink-0"
                                >
                                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0 group-hover:bg-[var(--color-brand-pink)] transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400 mb-0.5">Emergency Line</p>
                                        <p className="text-sm font-black text-slate-900 tracking-tighter">{supportPhone}</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                            className="mt-12 md:mt-16 flex items-center gap-8 md:gap-10"
                        >
                            {[
                                { label: 'Center', val: 'Kalaburagi' },
                                { label: 'Reports', val: 'Fast-Track' },
                                { label: 'Trust', val: '25Y Legacy' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col gap-1">
                                    <span className="text-[8px] font-black uppercase tracking-[0.25em] text-slate-400">{stat.label}</span>
                                    <p className="text-sm md:text-base font-black text-slate-900 tracking-tight">{stat.val}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Apple-Styled Device Frame with Auto-Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[320px] md:max-w-[400px] lg:max-w-none"
                    >
                        {/* Device Bezel - Clean Silver/White Apple Aesthetic */}
                        <div className="relative z-10 rounded-[48px] md:rounded-[64px] p-2 md:p-3 bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5">
                            {/* Screen Area */}
                            <div className="relative overflow-hidden rounded-[40px] md:rounded-[52px] bg-slate-50 w-full h-[450px] lg:h-[600px]">
                                <img
                                    src={MEDICAL_IMAGES.HERO_MAIN}
                                    alt="Advanced Medical Diagnostics"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                                    loading="eager"
                                />
                                
                                {/* iOS Style Status Overlay / Telemetry */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md z-20">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-[10px] font-semibold tracking-wide text-white">System Active</span>
                                </div>

                                {/* iOS Style Widget Card (AI Diagnostics) */}
                                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 rounded-[24px] p-5 md:p-6 bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] z-20">
                                    <div className="flex items-center gap-3 mb-2 md:mb-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)] shrink-0 animate-pulse">
                                            <Activity size={16} />
                                        </div>
                                        <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">AI Diagnostics</h3>
                                    </div>
                                    <p className="text-xs md:text-sm font-bold text-slate-500 leading-relaxed">
                                        Integrated smart-analysis systems for higher precision and absolute clarity in clinical results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Minimal Shadow/Glow behind device */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-blue-500/5 blur-[100px] -z-10" />
                    </motion.div>
                </div>

                {/* Glass Search Interface - Redesigned */}
                <div className="mt-20 md:mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel-elite mx-auto max-w-5xl rounded-[32px] md:rounded-[48px] p-2 md:p-4 shadow-[0_40px_80px_-20px_rgba(2,6,23,0.2)] bg-white/60 border-white/80"
                    >
                        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_0.6fr] gap-2 md:gap-3">
                            <label className="flex h-14 md:h-20 items-center gap-4 md:gap-6 rounded-[24px] md:rounded-[36px] bg-white/80 border border-white px-6 md:px-10 focus-within:ring-8 ring-[var(--color-brand-pink)]/5 transition-all shadow-sm">
                                <Search size={20} className="text-slate-400" />
                                <input
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    type="text"
                                    placeholder="Search parameters..."
                                    className="h-full w-full bg-transparent text-sm md:text-lg font-bold text-slate-900 outline-none placeholder:text-slate-300"
                                />
                            </label>

                            <div className="flex items-center gap-2 p-1 md:p-2">
                                <Link to="/tests" className="flex-1 flex items-center justify-center gap-2 md:gap-3 h-12 md:h-full rounded-[20px] md:rounded-[30px] bg-slate-900 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg">
                                    <FlaskConical size={16} />
                                    PROCEDURES
                                </Link>
                                <Link to="/packages" className="flex-1 flex items-center justify-center gap-2 md:gap-3 h-12 md:h-full rounded-[20px] md:rounded-[30px] bg-[var(--color-brand-pink)] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-[var(--color-brand-pink-deep)] transition-all shadow-lg">
                                    <Package size={16} />
                                    PACKAGES
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="h-14 md:h-20 rounded-[24px] md:rounded-[36px] btn-brand-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] transition-all hover:shadow-[0_20px_40px_-10px_rgba(2,6,23,0.4)] hover:brightness-110"
                            >
                                Execute Search
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Scroll Indicator - Hidden on mobile for less cluster */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Discover More</span>
                    <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-transparent relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 48] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/3 bg-[var(--color-brand-pink)]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
