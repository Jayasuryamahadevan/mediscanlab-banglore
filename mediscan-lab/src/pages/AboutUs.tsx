import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData, toParagraphs, getAnyContentByPath } from '../lib/siteData';
import { MapPin, Users, Award, CheckCircle2, Building2, Quote, Briefcase } from 'lucide-react';
import { MEDICAL_IMAGES } from '../lib/medical_images';

const milestonesData = [
    { year: '1995', title: 'Radiology Department', desc: 'Inaugurated our dedicated Radiology Department offering initial scanning procedures.' },
    { year: '1997', title: 'Diagnostic Services', desc: 'Formally launched full clinical diagnostics and advanced reporting.' },
    { year: '2001', title: 'Expansion & Relocation', desc: 'Relocated to a significantly larger, state-of-the-art diagnostic facility based on high patient trust and growth.' },
    { year: '2005', title: 'Home Sample Collection', desc: 'Pioneered professional, sterile home sample collection services in the region.' },
    { year: '2013', title: 'NABL Accreditation & standalone center', desc: 'Received premium National Accreditation Board for Testing and Calibration Laboratories (NABL) gold standard accreditation, and established a specialized standalone diagnostic center.' },
    { year: '2016', title: 'City Labs launch', desc: 'Inaugurated our advanced standalone pathology laboratory facility in the heart of Gulbarga city.' },
];

const managementData = [
    {
        name: 'Dr. Chetan Durgi',
        degree: 'MBBS, DMRD, MD',
        role: 'Chairman, Managing Director & Consultant Radiologist',
        bio: 'Dr. Chetan Durgi did his MD in Radiology in 1980 and MBBS in 1977 from M.R. Medical College, Gulbarga. Under his visionary guidance and active leadership over the past several decades, Mediscan Labs transitioned into a high-precision, state-of-the-art diagnostic facility accredited with NABL, making it a medical beacon of hope and quality in North Karnataka.'
    },
    {
        name: 'Dr. Suchitra C Durgi',
        degree: 'MBBS, DMRD',
        role: 'Director & Consultant Radiologist',
        bio: 'Dr. Suchitra C Durgi did her DMRD in Radiology in 1980 and MBBS in 1977 from M.R. Medical College, Gulbarga. She has been central to the expansion of radiological and ultrasonography services at Mediscan Labs, ensuring absolute accuracy and clinical support for hundreds of thousands of patients.'
    }
];

const doctorsData = [
    {
        name: 'Dr. Vijaykumar Pattankar',
        degree: 'MBBS, MD, FICP, PGIMER',
        role: 'Senior Consultant Pathologist & Founder Fellow',
        specialties: ['Cardiac Pathology', 'Immunopathology', 'Oncopathology'],
        bio: 'University topper throughout academics and Silver Medal Award Winner during MD. A highly renowned Pathologist serving the industry for over 40+ years. Formerly Professor & HOD of Pathology at MR Medical College. Presented 155 research papers and 66 guest lectures globally. Served as External Expert in selection committee at PGIMER Chandigarh, and External Reviewer for Philip Morris research program USA.'
    },
    {
        name: 'Dr. Sunil Kumar Biradar',
        degree: 'MBBS, MD',
        role: 'Consultant Microbiologist & Associate Professor',
        specialties: ['Medical Microbiology', 'Molecular Techniques', 'Internal Auditor'],
        bio: 'Trained in Advanced Microbiological Techniques at JIAMER Pondicherry & MAHE Manipal, and Molecular Techniques at MAMB Pune. Currently Associate Professor in the Department of Microbiology at MR Medical College. Serves as a certified Internal Auditor for NABL and resource person for NACO.'
    },
    {
        name: 'Dr. S M Awanti',
        degree: 'MBBS, MD',
        role: 'Consultant Biochemist',
        specialties: ['Clinical Biochemistry', 'Metabolic Markers'],
        bio: 'Expert consultant spearheading the Department of Biochemistry. Highly experienced in handling advanced fully automated immunoassay systems and analyzing micro-markers.'
    },
    {
        name: 'Dr. Veeramma N',
        degree: 'MBBS, MD',
        role: 'Consultant Pathologist',
        specialties: ['Histopathology', 'Hematology'],
        bio: 'Lead pathologist driving the clinical reporting of our pathology center. Specializes in advanced cytological evaluations and sterile diagnostic analysis.'
    },
    {
        name: 'Dr. Anand Kanaki',
        degree: 'MBBS, MD',
        role: 'Consultant Clinician',
        specialties: ['Clinical Diagnostics', 'General Pathology'],
        bio: 'Dedicated senior consultant supporting routine diagnostics and report validation across various clinical pathology divisions.'
    },
    {
        name: 'Dr. P. V. Suresh',
        degree: 'MBBS, MD, DM',
        role: 'Visiting Consultant Cardiologist',
        specialties: ['Non-Invasive Cardiology', 'Echocardiography'],
        bio: 'Super-specialist Visiting Cardiologist supervising complex echocardiography, stress tests, and cardiac diagnostic reporting.'
    }
];

const clientsData = [
    'Canara Bank',
    'Corporation Bank',
    'Syndicate Bank',
    'Pragathi Krishna Gramin Bank (PKGB)',
    'Karnataka State Police',
    'Life Insurance Corporation of India (LIC)'
];

const AboutUs = () => {
    const pageContent = getAnyContentByPath('/about-us');
    const contentText = pageContent ? (pageContent.content ?? pageContent.excerpt) : siteData.about.excerpt;
    const paragraphs = toParagraphs(contentText, 2);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
            }
        }
    }, [location]);

    return (
        <section className="px-4 py-10 pb-32 bg-slate-50/50 font-outfit relative">
            <div className="container-shell space-y-24">

                {/* Hero Banner Section */}
                <div className="relative overflow-hidden rounded-[48px] border border-white/70 shadow-2xl h-[500px] md:h-[650px] bg-slate-900">
                    <img
                        src={MEDICAL_IMAGES.ABOUT_HEADER}
                        alt="Mediscan Lab Facility"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="eager"
                    />
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
                                Pioneering precision diagnostics with NABL standards and clinical expertise for over 25 years.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {[
                        { icon: <Users size={32} />, value: '100+', label: 'Elite Clinicians', color: 'text-black' },
                        { icon: <MapPin size={32} />, value: 'Kalaburagi', label: 'Primary District', color: 'text-[var(--color-brand-pink)]' },
                        { icon: <Award size={32} />, value: 'NABL & ISO', label: 'Accreditation Standards', color: 'text-black' },
                        { icon: <CheckCircle2 size={32} />, value: '25+ Years', label: 'Diagnostic Excellence', color: 'text-[var(--color-brand-pink-deep)]' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel-elite rounded-[32px] p-8 flex flex-col items-center text-center bg-white/70 border-white/60 shadow-xl"
                        >
                            <div className={`${stat.color}`}>{stat.icon}</div>
                            <h3 className="mt-5 text-3xl font-black text-black tracking-tighter">{stat.value}</h3>
                            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-muted)]">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Who We Are */}
                <div className="grid gap-10 lg:grid-cols-2 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel-elite rounded-[40px] p-10 md:p-14 space-y-8 bg-white/70 border-white/60 shadow-2xl"
                    >
                        <h2 className="text-4xl font-black text-black tracking-tighter leading-none">Who We Are</h2>
                        {paragraphs.slice(0, 2).map((p, i) => (
                            <p key={i} className="text-lg leading-relaxed text-[var(--color-muted)] font-semibold">{p}</p>
                        ))}
                        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'NABL Accredited Laboratory',
                                'ISO 9001:2015 Certified',
                                '25+ Years of Legacy',
                                'Advanced MRI & CT Imaging',
                                'Sterile Home Collection',
                                'Quick Digital Reports',
                            ].map((m) => (
                                <div key={m} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[var(--color-brand-pink)] group-hover:bg-black group-hover:text-white transition-all">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-xs font-black text-black uppercase tracking-tight">{m}</span>
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

                {/* Milestones / Growth Path */}
                <div id="milestones" className="space-y-12 scroll-mt-28">
                    <div className="text-center space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] block">Our Growth Path</span>
                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">Milestones & History</h2>
                        <div className="w-12 h-1 bg-[var(--color-brand-pink)] mx-auto rounded-full" />
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
                        {milestonesData.map((m, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[var(--color-brand-pink)] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(228,64,95,0.4)]" />
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <span className="text-2xl font-black text-[var(--color-brand-pink)] leading-none shrink-0 tracking-tight">{m.year}</span>
                                    <div className="glass-panel-elite rounded-[24px] p-6 bg-white border border-slate-100 shadow-sm flex-1">
                                        <h4 className="text-lg font-black text-slate-900 tracking-tight mb-2">{m.title}</h4>
                                        <p className="text-sm text-slate-500 font-bold leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Management Section */}
                <div id="management" className="space-y-12 scroll-mt-28">
                    <div className="text-center space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] block">Leadership</span>
                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">Management Team</h2>
                        <div className="w-12 h-1 bg-[var(--color-brand-pink)] mx-auto rounded-full" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {managementData.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="glass-panel-elite rounded-[40px] p-8 md:p-10 bg-white shadow-lg border border-slate-100 flex flex-col justify-between"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#986699]/10 text-[#986699] flex items-center justify-center font-black">
                                            <Building2 size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900 leading-tight">{m.name}</h3>
                                            <span className="text-[10px] font-black uppercase text-[var(--color-brand-pink)] tracking-wider">{m.degree}</span>
                                        </div>
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 leading-none">{m.role}</p>
                                    <p className="text-sm text-slate-500 font-bold leading-relaxed">{m.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team of Empanelled Doctors */}
                <div id="doctors" className="space-y-12 scroll-mt-28">
                    <div className="text-center space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] block">Board of Experts</span>
                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">Empanelled Doctors</h2>
                        <div className="w-12 h-1 bg-[var(--color-brand-pink)] mx-auto rounded-full" />
                    </div>

                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {doctorsData.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                                className="glass-panel-elite rounded-[32px] p-6 bg-white/70 border border-slate-100 flex flex-col justify-between shadow-md"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                                        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black shrink-0 text-sm">
                                            DR
                                        </div>
                                        <div>
                                            <h4 className="text-md font-black text-slate-900 tracking-tight">{doc.name}</h4>
                                            <p className="text-[9px] font-bold text-slate-400 leading-none uppercase mt-1">{doc.degree}</p>
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-wider text-[#986699]">{doc.role}</p>
                                    <p className="text-xs text-slate-500 font-bold leading-relaxed">{doc.bio}</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-50">
                                    {doc.specialties.map((spec) => (
                                        <span key={spec} className="text-[8px] font-black uppercase tracking-wider bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Directors Message */}
                <div id="director-message" className="scroll-mt-28">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel-elite rounded-[48px] p-8 md:p-16 bg-white border border-slate-100 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute right-0 top-0 text-[18rem] font-serif text-slate-50 -z-10 leading-none select-none select-none select-none translate-x-20 -translate-y-20">
                            ”
                        </div>
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start relative z-10">
                            <div className="space-y-6">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)]">
                                    <Quote size={32} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight">
                                    Director's <span className="text-slate-400">Message</span>
                                </h2>
                                <div className="space-y-2 pt-4">
                                    <p className="text-lg font-black text-slate-950">Dr. Chetan S Durgi</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-pink)]">Director & Consultant Radiologist</p>
                                    <p className="text-xs text-slate-400 font-semibold uppercase">Mediscan Labs Diagnostic Center</p>
                                </div>
                            </div>
                            <div className="space-y-6 text-slate-600 font-medium text-sm leading-relaxed text-left border-l border-slate-100 pl-0 lg:pl-10">
                                <p>
                                    "I am glad to highlight the growth of Mediscan Labs for the past 20+ years which is exclusively based on the **PERFECT REPORTS GENERATION** and the struggle put in by the entire staff team over the years.
                                </p>
                                <p>
                                    We always focus on enriching the experience of patients which really helps them to have total satisfaction on the reports generated. We always look ahead to develop the skills of the team by providing excellent on-the-job training based on technology and need-of-the-hour.
                                </p>
                                <p>
                                    Our driving force has been passion for our work and commitment to our patient’s wellbeing. Over the span of 20+ years, our dedication towards our patients has not withered; instead it has given us strength and motivation to remain in step with the latest developments in this fast-changing field, by periodically upgrading and modernizing tests and the lab.
                                </p>
                                <p>
                                    We are proud to state that **MEDISCAN LAB is the only PRIVATE lab in NORTH KARNATAKA accredited with both ISO and NABL**."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Chief Administrative Officer Message */}
                <div id="cao-message" className="scroll-mt-28">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel-elite rounded-[48px] p-8 md:p-16 bg-white border border-slate-100 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute right-0 top-0 text-[18rem] font-serif text-slate-50 -z-10 leading-none select-none select-none select-none translate-x-20 -translate-y-20">
                            ”
                        </div>
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start relative z-10">
                            <div className="space-y-6">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#986699]/10 text-[#986699]">
                                    <Quote size={32} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight">
                                    CAO's <span className="text-slate-400">Message</span>
                                </h2>
                                <div className="space-y-2 pt-4">
                                    <p className="text-lg font-black text-slate-950">Mr. Zainula Abid Ali</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#986699]">Chief Administrative Officer</p>
                                    <p className="text-xs text-slate-400 font-semibold uppercase">Mediscan Labs Diagnostic Center</p>
                                </div>
                            </div>
                            <div className="space-y-6 text-slate-600 font-medium text-sm leading-relaxed text-left border-l border-slate-100 pl-0 lg:pl-10">
                                <p>
                                    "Hi, Welcome! And thank you for visiting our Mediscan Labs website.
                                </p>
                                <p>
                                    With the Motto of **“Shared Growth, Responsibility and Respect”**, Mediscan Labs has been providing the advanced medical diagnostic services with ultra-modern infrastructure and also with the objective of improvement of healthcare services and encouraging medical academic programs, medical camps, & promoting research & patient education.
                                </p>
                                <p>
                                    In the 21st century, we will need to expand the scale and accelerate the speed of our business in order to raise medical standards and shrink the healthcare gap. Highly qualified Mediscan Labs staff will do this boldly and rapidly to rise to this challenge.
                                </p>
                                <p>
                                    If you need any additional information, please contact my staff or me, and we will be glad to be of assistance."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Our Clients */}
                <div id="clients" className="space-y-12 scroll-mt-28">
                    <div className="text-center space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] block">Corporate Partners</span>
                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">Our Clients</h2>
                        <div className="w-12 h-1 bg-[var(--color-brand-pink)] mx-auto rounded-full" />
                    </div>

                    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
                        {clientsData.map((client, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="glass-panel-elite rounded-[24px] p-6 bg-white border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[var(--color-brand-pink)]/10 group-hover:text-[var(--color-brand-pink)] transition-colors mb-4">
                                    <Briefcase size={16} />
                                </div>
                                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider leading-relaxed">
                                    {client}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
