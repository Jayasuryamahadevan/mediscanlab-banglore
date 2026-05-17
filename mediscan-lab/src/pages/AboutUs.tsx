import { motion } from 'framer-motion';
import { siteData, toParagraphs, getAnyContentByPath } from '../lib/siteData';
import { MapPin, Users, Award, CheckCircle2 } from 'lucide-react';
import { MEDICAL_IMAGES } from '../lib/medical_images';

const milestones = [
    'NABL Accredited Laboratory',
    'ISO 9001:2015 Certified',
    '25+ Years of Diagnostic Excellence',
    'State-of-the-art MRI & CT Scanners',
    'Home Sample Collection Available',
    'Digital Reports in 4 Hours',
];

const AboutUs = () => {
    const pageContent = getAnyContentByPath('/about-us');
    const contentText = pageContent ? (pageContent.content ?? pageContent.excerpt) : siteData.about.excerpt;
    const paragraphs = toParagraphs(contentText, 2);

    return (
        <section className="px-4 py-10 pb-24">
            <div className="container-shell space-y-12">

                <div className="relative overflow-hidden rounded-[48px] border border-white/70 shadow-2xl h-[500px] md:h-[650px] bg-slate-900">
                    <img
                        src={MEDICAL_IMAGES.ABOUT_HEADER}
                        alt="Mediscan Lab Facility"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="eager"
                    />
                    {/* Multi-layered protection for absolute legibility */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-24 z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-block rounded-full bg-white/15 border border-white/30 px-8 py-2.5 text-[11px] font-black uppercase tracking-[0.45em] text-white mb-10 shadow-2xl backdrop-blur-xl">
                                Institutional Legacy
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                                {siteData.site.title.split(' ')[0]} <br />
                                <span className="text-[var(--color-brand-pink)] brightness-125">{siteData.site.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="mt-10 max-w-2xl text-xl md:text-2xl font-bold text-white leading-relaxed drop-shadow-2xl">
                                {(siteData.about as { tagline?: string }).tagline || 'Pioneering precision diagnostics with autonomous systems and expert care since inception.'}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {[
                        { icon: <Users size={32} />, value: '100+', label: 'Elite Clinicians', color: 'text-black' },
                        { icon: <MapPin size={32} />, value: '3', label: 'Primary Districts', color: 'text-[var(--color-brand-pink)]' },
                        { icon: <Award size={32} />, value: 'NABL', label: 'Gold Standard Accreditation', color: 'text-black' },
                        { icon: <CheckCircle2 size={32} />, value: '1K+', label: 'Diagnostic Procedures', color: 'text-[var(--color-brand-pink-deep)]' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel-elite rounded-[32px] p-8 flex flex-col items-center text-center bg-white/45 border-white/60 shadow-xl"
                        >
                            <div className={`${stat.color}`}>{stat.icon}</div>
                            <h3 className="mt-5 text-4xl font-black text-black tracking-tighter">{stat.value}</h3>
                            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-muted)]">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Who We Are + Image */}
                <div className="grid gap-10 lg:grid-cols-2 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel-elite rounded-[40px] p-10 md:p-14 space-y-8 bg-white/45 border-white/60 shadow-2xl"
                    >
                        <h2 className="text-4xl font-black text-black tracking-tighter leading-none">Who We Are</h2>
                        {paragraphs.slice(0, 2).map((p, i) => (
                            <p key={i} className="text-lg leading-relaxed text-[var(--color-muted)] font-medium">{p}</p>
                        ))}
                        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {milestones.map((m) => (
                                <div key={m} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[var(--color-brand-pink)] group-hover:bg-black group-hover:text-white transition-all">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-sm font-black text-black uppercase tracking-tight">{m}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative overflow-hidden rounded-[40px] min-h-[500px] shadow-2xl"
                    >
                        <img
                            src={MEDICAL_IMAGES.LAB_TEAM}
                            alt="Medical Team"
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="glass-panel-elite rounded-[32px] p-8 border border-white/60 backdrop-blur-xl bg-white/90 shadow-2xl">
                                <p className="text-2xl font-black text-black tracking-tighter">Clinical Excellence</p>
                                <p className="text-sm text-slate-600 mt-2 font-bold">Our board-certified pathologists and radiologists ensure absolute diagnostic accuracy.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Technology Section */}
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: 'MRI & CT Scan',
                            desc: 'High-field 1.5T MRI and 128-slice CT technology for exceptional clarity.',
                            img: MEDICAL_IMAGES.MRI_SCAN,
                        },
                        {
                            title: 'Clinical Pathology',
                            desc: 'Fully automated hematology, biochemistry and immunology analyzers.',
                            img: MEDICAL_IMAGES.PATHOLOGY,
                        },
                        {
                            title: 'Digital X-Ray & Echo',
                            desc: 'Instant digital X-Ray with 2D Echo cardiology for heart diagnostics.',
                            img: MEDICAL_IMAGES.XRAY,
                        },
                    ].map((item, i) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group relative h-[400px] overflow-hidden rounded-[40px] shadow-xl"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/20" /> {/* Extra protection */}
                            <div className="absolute inset-0 flex flex-col justify-end p-10">
                                <h3 className="text-2xl font-black text-white tracking-tighter leading-none">{item.title}</h3>
                                <p className="mt-4 text-sm text-white/80 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
