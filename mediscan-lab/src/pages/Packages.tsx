import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FlaskConical, ArrowRight, Package, Star, ShieldCheck, Heart } from 'lucide-react';
import { siteData, checkupPackages, sortedProducts } from '../lib/siteData';
import { MEDICAL_IMAGES, SERVICE_IMAGE_SET } from '../lib/medical_images';

const Packages = () => {
    return (
        <div className="min-h-screen pb-20">
            {/* Elite Hero Header */}
            <header className="bg-black pt-24 pb-48 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src={MEDICAL_IMAGES.PACKAGES_HEADER}
                        className="w-full h-full object-cover"
                        alt="Background"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent" />
                </div>

                <div className="container-shell relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-[var(--color-brand-pink)]/30 border border-[var(--color-brand-pink)]/40 px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.45em] text-white mb-10 inline-block shadow-2xl backdrop-blur-xl">
                            Premium Wellness
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                            Total Health <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-pink)] via-[var(--color-brand-pink)] to-white brightness-125">Checkup Packages</span>
                        </h1>
                        <p className="mt-10 text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                            Comprehensive diagnostic screens designed for every life stage.
                            Early detection is the first step towards a healthier future.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div className="container-shell -mt-24 relative z-20">
                {/* Main Packages Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {checkupPackages.map((item, i) => (
                        <motion.article
                            key={`${item.title}-${item.price}-${item.sourcePath}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group glass-panel-elite rounded-[40px] flex flex-col hover:translate-y-[-10px] transition-all duration-500 shadow-2xl bg-white border-white/60"
                        >
                            <div className="relative h-[280px] overflow-hidden rounded-[36px] m-2 bg-slate-100">
                                <img
                                    src={SERVICE_IMAGE_SET[i % SERVICE_IMAGE_SET.length]}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/30" /> {/* Protective overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                                <div className="absolute top-4 right-4">
                                    <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl border border-white/20">
                                        <Star size={14} className="text-[var(--color-brand-pink)] fill-[var(--color-brand-pink)]" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black">Top Choice</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 tracking-tighter drop-shadow-lg">{item.title}</h2>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl font-black text-[var(--color-brand-pink)] brightness-125 drop-shadow-md">{item.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:p-10 pt-6 flex flex-col flex-1 gap-8 md:gap-10">
                                <div className="space-y-6 flex-1">
                                    <div className="flex items-center gap-5 text-sm md:text-base font-bold text-slate-700 tracking-tight">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[var(--color-brand-pink)]/10 flex items-center justify-center text-[var(--color-brand-pink)] border border-[var(--color-brand-pink)]/5">
                                            <ShieldCheck size={22} />
                                        </div>
                                        <span>Full Body Analysis</span>
                                    </div>
                                    <div className="flex items-center gap-5 text-sm md:text-base font-bold text-slate-700 tracking-tight">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-900/5 flex items-center justify-center text-slate-900 border border-black/5">
                                            <Heart size={22} />
                                        </div>
                                        <span>Cardiac Markers Included</span>
                                    </div>
                                    <div className="flex items-center gap-5 text-sm md:text-base font-bold text-slate-700 tracking-tight">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[var(--color-brand-pink)]/10 flex items-center justify-center text-[var(--color-brand-pink)] border border-[var(--color-brand-pink)]/5">
                                            <FlaskConical size={22} />
                                        </div>
                                        <span>60+ Parameters Tested</span>
                                    </div>
                                </div>

                                <a
                                    href={siteData.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-brand-black flex items-center justify-center gap-4 rounded-[24px] py-7 text-[11px] font-black uppercase tracking-[0.25em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all w-full"
                                >
                                    Access Package
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Upsell Banner */}
                <div className="mt-28 rounded-[56px] overflow-hidden bg-black p-1 shadow-[0_50px_100px_-20px_rgba(2,6,23,0.3)]">
                    <div className="rounded-[55px] bg-black/40 backdrop-blur-3xl p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-pink)]/15 rounded-full blur-[120px] -mr-48 -mt-48" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-brand-pink)]/5 rounded-full blur-[100px] -ml-48 -mb-48" />

                        <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
                            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-[var(--color-brand-pink)] brightness-110">Clinical Storefront</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl">
                                Specialized Health <br /> Checkup Catalog
                            </h2>
                            <p className="text-white/70 text-xl font-medium leading-relaxed max-w-xl">
                                Explore our full range of individual checkups and diagnostic products in our digital storefront.
                            </p>
                            <Link to="/products" className="btn-brand-pink inline-flex items-center gap-4 rounded-[20px] px-12 py-6 text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(190,24,93,0.4)] hover:brightness-110 transition-all">
                                Explore Catalog
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="lg:w-[45%] relative">
                            <div className="relative z-10 grid grid-cols-2 gap-5">
                                {sortedProducts.slice(0, 4).map((p) => (
                                    <motion.div
                                        key={p.path}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="glass-panel-elite p-6 rounded-[32px] space-y-4 border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-pink)]/15 flex items-center justify-center text-[var(--color-brand-pink)] brightness-125">
                                            <Package size={22} />
                                        </div>
                                        <p className="text-[11px] font-black text-white line-clamp-2 uppercase tracking-[0.15em] leading-snug">{p.title}</p>
                                        <p className="text-2xl font-black text-[var(--color-brand-pink)] brightness-125">{p.price}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none rounded-[32px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;
