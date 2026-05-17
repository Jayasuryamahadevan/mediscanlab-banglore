import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Layers3, MessageCircle, ChevronRight } from 'lucide-react';
import { siteData, checkupPackages, sortedPosts } from '../lib/siteData';
import { MEDICAL_IMAGES, SERVICE_IMAGE_SET, BLOG_IMAGE_SET } from '../lib/medical_images';

const formatDate = (value: string) => {
    if (!value) {
        return '';
    }

    const normalized = value.includes('T') ? value : value.replace(' ', 'T');
    const parsed = new Date(normalized);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }

    return parsed.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};

const Services = () => {
    const packageCards = checkupPackages.slice(0, 8);
    const postCards = sortedPosts.slice(0, 4);

    return (
        <section className="py-12 md:py-24">
            <div className="container-shell space-y-12">
                <section className="rounded-[40px] border border-slate-200/60 bg-white/60 px-6 py-10 shadow-xl backdrop-blur-xl md:px-12">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] mb-3 block">Premium Care</span>
                            <h2 className="text-3xl font-black tracking-tight text-[var(--color-brand-black)] md:text-5xl lg:text-6xl leading-[1.1]">
                                Comprehensive <span className="text-slate-400">Diagnostic</span> Packages
                            </h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                to="/packages"
                                className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-white hover:text-[var(--color-brand-pink)] transition-all shadow-sm"
                            >
                                View All
                                <Layers3 size={14} />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {packageCards.map((card, i) => (
                            <article key={`${card.title}-${card.price}`} className="group glass-panel-soft overflow-hidden rounded-[32px] flex flex-col h-full hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-slate-50">
                                <div className="relative h-44 overflow-hidden bg-slate-200">
                                    <img 
                                        src={SERVICE_IMAGE_SET[i % SERVICE_IMAGE_SET.length]} 
                                        alt={card.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">Clinical Choice</span>
                                    </div>
                                    <div className="absolute bottom-4 left-5 right-5">
                                        <h3 className="text-lg font-black leading-tight text-white line-clamp-1">{card.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-5 bg-white">
                                     <div className="flex items-center justify-between">
                                         <p className="text-2xl font-black text-[var(--color-brand-black)] tracking-tight">{card.price}</p>
                                         <div className="w-8 h-8 rounded-full bg-[var(--color-brand-pink-soft)] flex items-center justify-center text-[var(--color-brand-pink)]">
                                             <FlaskConical size={14} />
                                         </div>
                                     </div>
                                     <div className="space-y-2">
                                         <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                             <span>Verified Protocol</span>
                                             <span className="w-1 h-1 rounded-full bg-slate-300" />
                                             <span className="text-[var(--color-brand-pink)]">Instant Report</span>
                                         </div>
                                     </div>
                                     <a
                                        href={siteData.bookingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-brand-black mt-auto inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all"
                                    >
                                        Book Now
                                        <ArrowRight size={14} />
                                    </a>
                                 </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-8 rounded-[40px] border border-slate-200/60 bg-white/60 p-8 shadow-xl backdrop-blur-xl md:grid-cols-3">
                    {[
                        {
                            title: 'Radiology',
                            tag: 'High-Precision',
                            desc: 'Advanced 1.5T MRI, 128-Slice CT, and High-Resolution Ultrasound diagnostics.',
                            img: MEDICAL_IMAGES.RADIOLOGY,
                            path: '/radiology-services',
                            theme: 'black'
                        },
                        {
                            title: 'Clinical Lab',
                            tag: 'Automated',
                            desc: 'NABL accredited automated pathology for 500+ specialized blood and clinical tests.',
                            img: MEDICAL_IMAGES.PATHOLOGY,
                            path: '/tests',
                            theme: 'pink'
                        },
                        {
                            title: 'Cardiology',
                            tag: 'Specialized',
                            desc: 'Comprehensive heart diagnostics including 2D Echo, TMT, and Digital ECG analysis.',
                            img: MEDICAL_IMAGES.CARDIOLOGY,
                            path: '/services',
                            theme: 'black'
                        }
                    ].map((service) => (
                        <article key={service.title} className="group relative h-[400px] overflow-hidden rounded-[32px] shadow-lg">
                            <img 
                                src={service.img} 
                                alt={service.title} 
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/80 mb-3 block drop-shadow-md">{service.tag}</span>
                                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter drop-shadow-lg">{service.title}</h3>
                                <p className="mt-4 text-sm text-white/95 font-medium leading-relaxed line-clamp-2 drop-shadow-sm">{service.desc}</p>
                                <Link 
                                    to={service.path} 
                                    className={`mt-10 inline-flex items-center justify-center w-full rounded-[20px] py-4.5 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-400 ${
                                        service.theme === 'pink' 
                                        ? 'bg-[var(--color-brand-pink)] text-white hover:bg-[var(--color-brand-pink-deep)] shadow-[0_15px_30px_-10px_rgba(190,24,93,0.5)]' 
                                        : 'bg-white/15 backdrop-blur-xl border border-white/25 text-white hover:bg-white hover:text-black hover:scale-[1.02]'
                                    }`}
                                >
                                    Explore Service
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="rounded-[40px] border border-slate-200/60 bg-white/60 px-6 py-10 shadow-xl backdrop-blur-xl md:px-12">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] mb-3 block">Expert Insights</span>
                            <h3 className="text-3xl font-black tracking-tight text-[var(--color-brand-black)] md:text-5xl leading-tight">Latest Health Articles</h3>
                        </div>
                        <Link to="/blog" className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-white hover:text-[var(--color-brand-pink)] transition-all shadow-sm">
                            Read All
                        </Link>
                    </div>
                    <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
                        {postCards.map((post, i) => (
                            <article key={post.path} className="group flex flex-col sm:flex-row gap-6 p-4 rounded-[32px] hover:bg-white transition-all duration-500 border border-transparent hover:border-slate-100 hover:shadow-2xl">
                                <div className="relative h-48 sm:h-44 sm:w-44 shrink-0 overflow-hidden rounded-[24px]">
                                    <img
                                        src={BLOG_IMAGE_SET[i % BLOG_IMAGE_SET.length]}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[var(--color-brand-pink)]">{formatDate(post.date)}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-100" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">Medical Guide</span>
                                    </div>
                                    <h4 className="text-2xl font-black leading-tight text-[var(--color-brand-black)] group-hover:text-[var(--color-brand-pink)] transition-colors line-clamp-2 tracking-tighter">{post.title}</h4>
                                    <Link to={post.path} className="mt-2 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-[var(--color-brand-pink)] transition-all">
                                        Read Analysis
                                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-[48px] border border-slate-100 bg-white px-8 py-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] md:px-16 text-center">
                    <div className="max-w-xl mx-auto flex flex-col items-center">
                        <div className="relative mb-8 h-20 w-20">
                            <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/5" />
                            <img 
                                src="/robot.png" 
                                alt="Support Mascot" 
                                className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                            />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">Personal Assistance</span>
                        <h3 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl mb-6">
                            How can we help you?
                        </h3>
                        <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                            Whether you're looking for diagnostic advice or need help with booking, our clinical team is ready to assist you on WhatsApp.
                        </p>
                        <a
                            href="https://wa.me/919035534724"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 rounded-3xl bg-slate-900 px-10 py-5 text-sm font-black uppercase tracking-widest text-white hover:bg-black transition-all shadow-2xl hover:scale-[1.02] active:scale-95 group"
                        >
                            <MessageCircle size={18} className="text-[#25D366]" />
                            Chat with Experts
                            <ChevronRight size={16} className="text-white/30 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Services;
