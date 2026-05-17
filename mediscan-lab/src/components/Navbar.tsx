import { FormEvent, useMemo, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MapPin, Menu, Search, X, FlaskConical, Headphones, ArrowRight, ChevronDown } from 'lucide-react';
import { siteData } from '../lib/siteData';

const cityName = siteData.contact.location.split(',')[0]?.trim() || 'Kalaburagi';
const topOffer = siteData.checkupPackages[0];
const quickLinkMap = new Map(siteData.quickLinks.map((item) => [item.title.toLowerCase(), item.path]));
const resolvePath = (title: string, fallback: string) => quickLinkMap.get(title.toLowerCase()) ?? fallback;

const primaryNav = [
    { label: 'About', path: resolvePath('About Us', '/about-us') },
    { label: 'Services', path: '/services' },
    { label: 'Lab Tests', path: '/tests' },
    { label: 'Health Packages', path: '/packages' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
].filter((item, index, arr) => arr.findIndex((candidate) => candidate.path === item.path) === index);

const servicesDropdownItems = [
    { label: 'Radiology Services', path: '/radiology-services' },
    { label: 'Cardiology Services', path: '/cardiology-services' },
    { label: 'Clinical Laboratory Services', path: '/clinical-laboratory-services' }
];

const navbarLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-400 ${isActive
        ? 'text-[var(--color-brand-pink)] brightness-110 drop-shadow-sm'
        : 'text-slate-600 hover:text-[var(--color-brand-black)] hover:translate-y-[-1px]'
    }`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const placeholder = useMemo(
        () => `Search 200+ diagnostic procedures...`,
        []
    );

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const q = searchQuery.trim();
        navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50">
            {/* Announcement Bar */}
            <div className="mx-2 md:mx-4 mt-2 md:mt-3 rounded-full glass-panel-soft border-white/20 bg-slate-900/90 text-white overflow-hidden relative backdrop-blur-xl shadow-lg">
                <div className="absolute inset-0 bg-[var(--color-brand-pink)]/20 skew-x-[-20deg] transform translate-x-[-50%]" />
                <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-2 md:py-2.5 relative z-10">
                    <div className="flex items-center gap-3 md:gap-4">
                        <span className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-pink)] animate-pulse shadow-[0_0_8px_var(--color-brand-pink)]" />
                            Live Offer
                        </span>
                        <p className="text-[10px] md:text-xs font-black tracking-widest uppercase text-white/90">
                            {topOffer?.title ?? 'Full Body Checkup'} <span className="text-[var(--color-brand-pink)] brightness-125 ml-2 font-black">@{topOffer?.price ?? '₹1000'}</span>
                        </p>
                    </div>
                    <Link to="/packages" className="hidden sm:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/80 hover:text-white transition-all hover:translate-x-1">
                        View Packages
                        <ArrowRight size={12} className="text-[var(--color-brand-pink)] brightness-125" />
                    </Link>
                </div>
            </div>

            {/* Main Nav */}
            <div className="mx-2 md:mx-4 mt-2 md:mt-4 rounded-[24px] md:rounded-[32px] glass-panel-elite border-white/60 bg-white/70 shadow-2xl">
                <div className="container-shell py-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <Link to="/" className="shrink-0 flex items-center h-14 w-auto group">
                            <img src="/logo.png" alt="Mediscan Labs" className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                        </Link>

                        {/* Search - Desktop */}
                        <div className="hidden lg:flex items-center flex-1 max-w-xl">
                            <form onSubmit={handleSearch} className="w-full">
                                <label className="flex h-11 items-center gap-4 rounded-2xl bg-slate-50 border border-slate-100 px-5 group focus-within:bg-white focus-within:border-[var(--color-brand-pink)]/30 transition-all shadow-inner">
                                    <Search size={18} className="text-slate-300 group-focus-within:text-[var(--color-brand-pink)]" />
                                    <input
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                        type="text"
                                        placeholder={placeholder}
                                        className="h-full w-full bg-transparent text-sm font-bold text-[var(--color-brand-black)] outline-none placeholder:text-slate-300 placeholder:font-medium"
                                    />
                                </label>
                            </form>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <div className="hidden xl:flex items-center gap-3 pr-4 border-r border-slate-100">
                                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                                    <MapPin size={18} />
                                </div>
                                <div className="leading-none">
                                    <span className="block text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">Center</span>
                                    <span className="text-sm font-black text-[var(--color-brand-black)]">{cityName}</span>
                                </div>
                            </div>

                            <a
                                href={siteData.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-[var(--color-brand-pink)] transition-all shadow-lg shimmer-mask"
                            >
                                <Headphones size={16} />
                                Support
                            </a>

                            <button
                                aria-label="Toggle menu"
                                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-900 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all"
                                onClick={() => setIsOpen((prev) => !prev)}
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Secondary Desktop Nav */}
                    <nav className="hidden lg:flex items-center justify-center gap-2 mt-4 pt-4 border-t border-slate-100">
                        {primaryNav.map((item) => {
                            if (item.label === 'Services') {
                                return (
                                    <div key={item.path} className="relative group">
                                        <NavLink to={item.path} className={(props) => `${navbarLinkClass(props)} flex items-center gap-1`}>
                                            {({ isActive }) => (
                                                <>
                                                    Services
                                                    <ChevronDown size={12} className="text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
                                                    {isActive && (
                                                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--color-brand-pink)] rounded-full" />
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                        {/* Dropdown Menu */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                            <div className="rounded-[24px] border border-slate-200/60 bg-white/95 px-2 py-3 shadow-2xl backdrop-blur-xl flex flex-col gap-1">
                                                {servicesDropdownItems.map((subItem) => (
                                                    <Link 
                                                        key={subItem.path} 
                                                        to={subItem.path} 
                                                        className="px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 hover:text-[var(--color-brand-pink)] hover:bg-[var(--color-brand-pink-soft)]/20 transition-all text-left"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                                <div className="border-t border-slate-100 my-1 pt-1">
                                                    <Link 
                                                        to="/services" 
                                                        className="px-4 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-brand-pink)] hover:bg-[var(--color-brand-pink-soft)]/30 transition-all text-left flex items-center justify-between"
                                                    >
                                                        <span>All Specialties</span>
                                                        <ArrowRight size={12} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <NavLink key={item.path} to={item.path} className={navbarLinkClass}>
                                    {({ isActive }) => (
                                        <>
                                            {item.label}
                                            {isActive && (
                                                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--color-brand-pink)] rounded-full" />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="mt-4 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300 pb-6 border-t border-slate-50 pt-6">
                            <form onSubmit={handleSearch} className="mb-6">
                                <label className="flex h-14 items-center gap-4 rounded-[20px] bg-slate-50 border border-slate-100 px-6 shadow-inner">
                                    <Search size={20} className="text-slate-300" />
                                    <input
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                        type="text"
                                        placeholder="Search procedures..."
                                        className="h-full w-full bg-transparent text-sm font-bold text-[var(--color-brand-black)] outline-none"
                                    />
                                </label>
                            </form>

                            <div className="flex flex-col gap-3 mb-8">
                                {primaryNav.map((item) => {
                                    if (item.label === 'Services') {
                                        return (
                                            <div key={item.path} className="flex flex-col gap-2 rounded-[20px] border border-slate-100 p-2 bg-white shadow-sm">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                                    className="flex items-center justify-between px-4 h-14 w-full text-slate-600 transition-all"
                                                >
                                                    <span className="text-sm font-black uppercase tracking-widest text-slate-600">Services</span>
                                                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                                {isMobileServicesOpen && (
                                                    <div className="flex flex-col gap-2 px-2 pb-2 pl-4 border-t border-slate-50 pt-2">
                                                        {servicesDropdownItems.map((subItem) => (
                                                            <NavLink
                                                                key={subItem.path}
                                                                to={subItem.path}
                                                                onClick={() => setIsOpen(false)}
                                                                className={({ isActive }) => `flex items-center justify-between px-4 h-12 rounded-xl transition-all ${isActive ? 'bg-[var(--color-brand-pink-soft)]/30 text-[var(--color-brand-pink)] font-black' : 'text-slate-500 font-bold'
                                                                    }`}
                                                            >
                                                                <span className="text-xs uppercase tracking-wider">{subItem.label}</span>
                                                            </NavLink>
                                                        ))}
                                                        <NavLink
                                                            to="/services"
                                                            onClick={() => setIsOpen(false)}
                                                            className="flex items-center justify-between px-4 h-12 rounded-xl text-[var(--color-brand-pink)] font-black"
                                                        >
                                                            <span className="text-xs uppercase tracking-wider">All Specialties</span>
                                                            <ArrowRight size={14} />
                                                        </NavLink>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    return (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) => `flex items-center justify-between px-6 h-16 rounded-[20px] border border-slate-100 transition-all ${isActive ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-600'
                                                }`}
                                        >
                                            <span className="text-sm font-black uppercase tracking-widest">{item.label}</span>
                                            <ArrowRight size={18} className="text-slate-300" />
                                        </NavLink>
                                    );
                                })}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <a href={`tel:${siteData.contact.phones[0]}`} className="flex flex-col items-center justify-center p-6 rounded-[24px] bg-slate-50 border border-slate-100">
                                    <PhoneIcon className="text-[var(--color-brand-pink)] mb-2" size={24} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Support</span>
                                </a>
                                <a
                                    href={siteData.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="flex flex-col items-center justify-center p-6 rounded-[24px] bg-[var(--color-brand-pink)] text-white shadow-xl"
                                >
                                    <FlaskConical className="mb-2" size={24} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Book Lab</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

const PhoneIcon = ({ className, size }: { className?: string, size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export default Navbar;
