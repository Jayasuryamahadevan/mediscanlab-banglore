import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Search, Activity, Microscope, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';
import { labTests } from '../lib/siteData';

import { MEDICAL_IMAGES } from '../lib/medical_images';

const categoryImages: Record<string, string> = {
    default: MEDICAL_IMAGES.LAB_TEAM,
    blood: MEDICAL_IMAGES.PATHOLOGY,
    mri: MEDICAL_IMAGES.MRI_SCAN,
    xray: MEDICAL_IMAGES.XRAY,
    ultra: MEDICAL_IMAGES.ULTRASOUND,
};

const getCardImage = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('mri') || t.includes('ct') || t.includes('scan')) return categoryImages.mri;
    if (t.includes('x-ray') || t.includes('xray') || t.includes('x ray')) return categoryImages.xray;
    if (t.includes('ultra') || t.includes('echo') || t.includes('sono')) return categoryImages.ultra;
    if (t.includes('blood') || t.includes('cbc') || t.includes('haemo') || t.includes('lipid')) return categoryImages.blood;
    return categoryImages.default;
};

const LabTests = () => {
    const [query, setQuery] = useState('');

    const filtered = query
        ? labTests.filter(
              (t) =>
                  t.title.toLowerCase().includes(query.toLowerCase()) ||
                  t.excerpt?.toLowerCase().includes(query.toLowerCase())
          )
        : labTests;

    return (
        <div className="min-h-screen pb-20">
            {/* Header Section */}
            <header className="bg-black pt-24 pb-48 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <Microscope size={400} className="absolute -bottom-20 -right-20 text-white/5 transform rotate-12" />
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-pink)]/20 rounded-full blur-[150px]" />
                </div>
                
                <div className="container-shell relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-[var(--color-brand-pink)]/20 border border-[var(--color-brand-pink)]/40 px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.45em] text-[var(--color-brand-pink)] brightness-125 mb-10 inline-block shadow-2xl backdrop-blur-xl">
                            Clinical Diagnostics
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                            Advanced Laboratory <br />
                            <span className="text-[var(--color-brand-pink)] brightness-125">Analysis Directory</span>
                        </h1>
                        <p className="mt-10 text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                            Search through our comprehensive database of over {labTests.length} specialized diagnostic tests. 
                            Transparency in medical parameters starts here.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div className="container-shell -mt-24 relative z-20">
                {/* Search Bar */}
                <div className="glass-panel-elite mx-auto max-w-3xl rounded-[40px] p-2 md:p-3 shadow-2xl mb-16 bg-white border-white/60">
                    <div className="flex items-center gap-6 px-8 py-6">
                        <Search size={28} className="text-black" />
                        <input
                            type="text"
                            placeholder="Identify clinical parameters..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 bg-transparent text-2xl font-black text-black outline-none placeholder:text-black/20 tracking-tight"
                        />
                        <div className="hidden md:flex items-center gap-3 border-l border-black/5 pl-8 text-black/40">
                            <Activity size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{filtered.length} Results</span>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item, i) => (
                        <motion.article
                            key={item.path}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 6) * 0.05 }}
                            className="group glass-panel-elite rounded-[40px] overflow-hidden flex flex-col hover:translate-y-[-10px] transition-all duration-700 shadow-xl bg-white border-white/60"
                        >
                            <div className="relative h-[260px] overflow-hidden bg-slate-100">
                                <img
                                    src={getCardImage(item.title)}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/20">
                                        <HeartPulse size={16} className="text-[var(--color-brand-pink)]" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black">Quality Verified</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shadow-2xl">
                                        <FlaskConical size={22} className="text-[var(--color-brand-pink)]" />
                                    </div>
                                    <p className="text-[10px] font-black text-white uppercase tracking-[0.35em] drop-shadow-lg">Diagnostic Protocol</p>
                                </div>
                            </div>
                            
                            <div className="p-10 flex flex-col flex-1">
                                <h2 className="text-3xl font-black text-black group-hover:text-[var(--color-brand-pink)] transition-colors leading-tight tracking-tighter">
                                    {item.title}
                                </h2>
                                <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted)] font-medium line-clamp-3 flex-1">
                                    {item.excerpt || "Comprehensive clinical test conducted using advanced robotic analyzers and verified by MD Pathologists."}
                                </p>
                                <div className="mt-10 flex items-center justify-between border-t border-black/5 pt-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Efficiency</span>
                                        <span className="text-sm font-black text-black">4-6 HR TAT</span>
                                    </div>
                                    <Link
                                        to={item.path}
                                        className="btn-brand-black rounded-2xl px-10 py-4 text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
                                    >
                                        Inspect
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-24 glass-panel-elite rounded-[40px] max-w-2xl mx-auto bg-white border-white/60 shadow-2xl">
                        <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Search size={40} className="text-[var(--color-brand-pink)]" />
                        </div>
                        <h3 className="text-3xl font-black text-black tracking-tight leading-none">Parameter mismatch</h3>
                        <p className="text-[var(--color-muted)] mt-4 font-medium">Your search query did not match our clinical database.</p>
                        <button 
                            onClick={() => setQuery('')}
                            className="mt-10 btn-brand-pink rounded-2xl px-10 py-5 text-[10px] font-black uppercase tracking-widest shadow-xl"
                        >
                            Reset Directory
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LabTests;
