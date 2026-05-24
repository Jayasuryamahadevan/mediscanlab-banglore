import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, FlaskConical, Share2, Layers3 } from 'lucide-react';
import { checkupPackages, getAnyContentByPath, siteData, toParagraphs, handleExternalRedirect } from '../lib/siteData';
import { motion } from 'framer-motion';

const CmsPage = () => {
    const location = useLocation();
    const content = getAnyContentByPath(location.pathname);

    if (!content) {
        return (
            <section className="px-4 py-12">
                <div className="container-shell">
                    <div className="glass-panel-elite rounded-[40px] p-12 text-center max-w-2xl mx-auto bg-white/45 shadow-2xl border-white/60">
                        <div className="w-16 h-16 bg-[var(--color-brand-pink)]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <FlaskConical size={32} className="text-[var(--color-brand-pink)]" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-pink)]">Clinical Alert</p>
                        <h1 className="mt-4 text-4xl font-black text-black leading-tight tracking-tighter">Content Not Synchronized</h1>
                        <p className="mt-6 text-[var(--color-muted)] text-lg leading-relaxed font-medium">
                            The requested medical data is currently under verification or has been moved to a new clinical section.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-6">
                            <Link to="/search" className="btn-brand-black rounded-2xl px-10 py-5 text-xs font-black uppercase tracking-widest shadow-xl">
                                Search Units
                            </Link>
                            <Link to="/" className="glass-panel-soft rounded-2xl border border-white/60 bg-white/45 px-10 py-5 text-xs font-black uppercase tracking-widest text-black">
                                Return Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const paragraphs = toParagraphs(content.content ?? content.excerpt, 24);
    const bodyParagraphs = paragraphs.filter((item) => item.length > 60);
    const renderedParagraphs = bodyParagraphs.length > 0 ? bodyParagraphs : paragraphs;
    const relatedPackages = content.sourceType === 'page' ? checkupPackages.filter((item) => item.sourcePageSlug === content.slug).slice(0, 10) : [];
    
    const contentTypeLabel =
        content.sourceType === 'custom'
            ? content.postTypeLabel ?? 'Medical Service'
            : content.sourceType === 'post'
              ? 'Health Guide'
              : content.sourceType === 'product'
                ? 'Checkup Package'
                : 'Diagnostic Service';

    const canOpenOriginal = /^https?:\/\//i.test(content.link);

    // Dynamic background color based on type
    const headerBg = content.sourceType === 'post' ? 'bg-[var(--color-brand-pink-deep)]' : 'bg-black';

    return (
        <div className="min-h-screen pb-20">
            {/* Header Hero */}
            <div className={`relative overflow-hidden pt-12 pb-24 ${headerBg}`}>
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="container-shell relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-all">
                            <ArrowLeft size={16} />
                            Portal
                        </Link>
                        <span className="text-white/20">•</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7a4f7b] bg-[#f4eef5] px-4 py-1.5 rounded-full">
                            {contentTypeLabel}
                        </span>
                    </div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl tracking-tighter"
                    >
                        {content.title}
                    </motion.h1>

                    <div className="mt-10 flex flex-wrap items-center gap-8 text-slate-200 text-xs font-black uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>Clinical Update: Today</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>Certified Lab Team</span>
                        </div>
                        {'price' in content && content.price && (
                            <div className="flex items-center gap-3 bg-white/10 text-white px-5 py-2 rounded-2xl border border-white/10 shadow-2xl">
                                <span className="opacity-60 text-[10px]">UNIT PRICE:</span>
                                <span className="font-black text-xl tracking-tight text-[var(--color-brand-pink)]">{content.price}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container-shell -mt-12 relative z-20">
                <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel-elite rounded-[40px] p-8 md:p-12 bg-white/45 shadow-2xl border-white/60"
                    >
                        {/* Excerpt/Intro */}
                        {content.excerpt && (
                            <div className="mb-12 p-8 rounded-3xl bg-black text-white italic text-xl leading-relaxed tracking-tight border-l-[6px] border-[var(--color-brand-pink)] shadow-xl">
                                "{content.excerpt}"
                            </div>
                        )}

                        {/* Main Content */}
                        <div className="space-y-8 text-lg text-black leading-relaxed font-medium">
                            {renderedParagraphs.map((paragraph, idx) => (
                                <p key={idx} className="transition-all duration-300">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="mt-16 pt-10 border-t border-black/5 flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <button className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black hover:bg-[var(--color-brand-pink)] transition-all duration-300">
                                    <Share2 size={20} />
                                </button>
                                <span className="text-[10px] font-black text-black uppercase tracking-[0.2em]">Share Report</span>
                            </div>

                            {canOpenOriginal && (
                                <a
                                    href={content.link}
                                    onClick={(e) => handleExternalRedirect(e, content.link)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="glass-panel-soft inline-flex items-center gap-3 rounded-2xl border border-white/60 bg-white/45 px-8 py-4 text-xs font-black uppercase tracking-widest text-black shadow-lg"
                                >
                                    Certified Document
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Appointment Card */}
                        <div className="bg-black rounded-[40px] p-10 text-white overflow-hidden relative group shadow-2xl">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-brand-pink)]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                            <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight leading-none">Schedule Diagnostic</h3>
                            <p className="text-white/50 text-sm mb-10 relative z-10 leading-relaxed font-medium">Book your laboratory slot for professional analysis and fast results.</p>
                            <Link
                                to="/contact"
                                className="bg-[var(--color-brand-pink)] text-black w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-center block relative z-10 hover:bg-white transition-all duration-300 shadow-xl"
                            >
                                Get Appointment
                            </Link>
                        </div>

                        {/* Quick Nav */}
                        <div className="glass-panel-elite rounded-[40px] p-8 bg-white/45 border-white/60 shadow-2xl">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-muted)] mb-8">Clinical Links</h4>
                            <div className="space-y-3">
                                {siteData.quickLinks.slice(0, 5).map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className="block p-4 rounded-2xl border border-transparent hover:border-[var(--color-brand-pink)]/30 hover:bg-[var(--color-brand-pink)]/5 transition-all text-sm font-bold text-black"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Help */}
                        <div className="glass-panel-soft rounded-[40px] p-8 border-dashed border-2 border-white/70 bg-white/45 text-center shadow-lg">
                            <h4 className="text-sm font-black text-black mb-3 tracking-tight">Need Support?</h4>
                            <p className="text-sm text-[var(--color-muted)] leading-relaxed font-medium">
                                Contact our clinical desk for guidance on your medical results.
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/60">
                                <p className="text-[10px] font-black text-[var(--color-muted)] uppercase tracking-widest mb-2">Direct Line</p>
                                <p className="text-2xl font-black text-black tracking-tighter leading-none">{siteData.contact.phones[0] || '+91 98765 43210'}</p>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Related Packages Section */}
                {relatedPackages.length > 0 && (
                    <motion.section 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-20"
                    >
                        <h2 className="text-4xl font-black text-black mb-12 tracking-tighter">Certified Units</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {relatedPackages.map((pkg, idx) => (
                                <article key={idx} className="glass-panel-elite rounded-[40px] p-10 hover:translate-y-[-8px] transition-all duration-500 bg-white/45 border-white/60 shadow-2xl">
                                    <div className="w-14 h-14 bg-[var(--color-brand-pink)]/10 rounded-2xl flex items-center justify-center mb-8 text-[var(--color-brand-pink)]">
                                        <Layers3 size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-black leading-none tracking-tight">{pkg.title}</h3>
                                    <p className="mt-6 text-4xl font-black text-black tracking-tighter">{pkg.price}</p>
                                    <Link 
                                        to="/contact" 
                                        className="mt-10 w-full py-4 rounded-2xl border-[3px] border-black text-black font-black text-xs uppercase tracking-widest text-center block hover:bg-black hover:text-white transition-all duration-300 shadow-xl"
                                    >
                                        Inquire Now
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </motion.section>
                )}
            </div>
        </div>
    );
};

export default CmsPage;
