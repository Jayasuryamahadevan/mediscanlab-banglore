import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteData } from '../lib/siteData';

const Footer = () => {
    const primaryPhone = siteData.contact.phones[0] ?? '+91 98765 43210';
    const primaryEmail = siteData.contact.emails[0] ?? 'support@mediscanlab.com';

    return (
        <footer className="px-4 pb-16">
            <div className="container-shell">
                <div className="rounded-[48px] border border-slate-200/60 bg-white/60 px-8 py-16 md:px-16 shadow-xl backdrop-blur-xl">
                    <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

                        {/* Brand */}
                        <div className="text-center md:text-left">
                            <Link to="/" className="shrink-0 flex items-center h-12 w-auto mb-8 justify-center md:justify-start group">
                                <img src="/logo.png" alt="Mediscan Labs" className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                            </Link>
                            <p className="text-sm leading-relaxed text-slate-500 max-w-[300px] mx-auto md:mx-0 font-medium">
                                {siteData.site.description}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-3 justify-center md:justify-start">
                                {['NABL Accredited', 'ISO 9001:2015', 'AERB Approved'].map((badge) => (
                                    <span
                                        key={badge}
                                        className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-[9px] font-black tracking-widest text-slate-400 uppercase"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="text-center md:text-left">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-8">Navigation</h4>
                            <ul className="space-y-4">
                                {siteData.quickLinks.map((item) => (
                                    <li key={item.path}>
                                        <Link to={item.path} className="text-sm font-bold text-slate-500 hover:text-[var(--color-brand-pink)] transition-colors">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specialties */}
                        <div className="text-center md:text-left">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-8">Specialties</h4>
                            <ul className="space-y-4">
                                {['Radiology', 'Pathology', 'Cardiology', 'Health Checkups'].map((dept) => (
                                    <li key={dept}>
                                        <Link
                                            to={`/search?q=${encodeURIComponent(dept)}`}
                                            className="text-sm font-bold text-slate-500 hover:text-[var(--color-brand-pink)] transition-colors"
                                        >
                                            {dept}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connectivity */}
                        <div className="text-center md:text-left">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-8">Contact Center</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 justify-center md:justify-start">
                                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <MapPin size={18} className="text-[var(--color-brand-pink)]" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 leading-relaxed text-left">{siteData.contact.location}</span>
                                </li>
                                <li className="flex items-center gap-4 justify-center md:justify-start">
                                    <div className="w-10 h-10 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0">
                                        <Phone size={18} className="text-white" />
                                    </div>
                                    <a href={`tel:${primaryPhone}`} className="text-sm font-black text-[var(--color-brand-black)] hover:text-[var(--color-brand-pink)] transition-colors">
                                        {primaryPhone}
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 justify-center md:justify-start">
                                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <Mail size={18} className="text-slate-400" />
                                    </div>
                                    <a href={`mailto:${primaryEmail}`} className="text-sm font-black text-[var(--color-brand-black)] hover:text-[var(--color-brand-pink)] transition-colors">
                                        {primaryEmail}
                                    </a>
                                </li>
                                <li className="pt-4">
                                    <a
                                        href={siteData.bookingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-brand-pink w-full inline-flex items-center justify-center rounded-[20px] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] shadow-xl"
                                    >
                                        Book Now
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-slate-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        <span>© {new Date().getFullYear()} {siteData.site.title}</span>
                        <div className="flex items-center gap-8">
                            <Link to="/about-us" className="hover:text-[var(--color-brand-black)] transition-colors">Privacy</Link>
                            <Link to="/contact" className="hover:text-[var(--color-brand-black)] transition-colors">Terms</Link>
                            <Link to="/blog" className="hover:text-[var(--color-brand-black)] transition-colors">Compliances</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
