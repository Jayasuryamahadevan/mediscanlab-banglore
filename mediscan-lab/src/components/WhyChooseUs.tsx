import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Activity } from 'lucide-react';
import { MEDICAL_IMAGES } from '../lib/medical_images';
import SmartImage from './SmartImage';

const features = [
    {
        icon: <ShieldCheck size={32} />,
        title: "NABL Accredited",
        description: "Our labs are certified for the highest standards of quality and accuracy."
    },
    {
        icon: <Clock size={32} />,
        title: "Fast Reports",
        description: "Get your digital reports within hours. We value your time and health."
    },
    {
        icon: <Award size={32} />,
        title: "Expert Doctors",
        description: "Consult with our panel of top specialists for accurate diagnosis."
    },
    {
        icon: <Activity size={32} />,
        title: "Latest Technology",
        description: "Equipped with world-class MRI, CT, and Pathology machines."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="px-4 py-12 md:py-24">
            <div className="container-shell">
                <div className="rounded-[34px] border border-white/70 bg-white/45 p-5 md:p-8 backdrop-blur-md">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Why Choose Mediscan</span>
                                <h2 className="hover-title text-3xl md:text-5xl mt-3 font-extrabold text-[var(--color-ink)] tracking-tight">Excellence in Diagnostics</h2>
                                <p className="text-fade text-[var(--color-muted)] mt-4 font-medium text-lg max-w-lg">
                                    With decades of experience and state-of-the-art technology, we provide accurate and timely results to help you make informed health decisions.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="glass-panel-soft interactive-card p-5 md:p-6 rounded-[24px] flex flex-col group border border-white/50"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                            <div className="text-[var(--color-brand-pink)]">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-extrabold mb-2 text-black">{feature.title}</h3>
                                        <p className="text-[var(--color-muted)] text-sm leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-full min-h-[300px] lg:min-h-[600px] rounded-[34px] overflow-hidden shadow-2xl">
                            <motion.div 
                                initial={{ opacity: 0, scale: 1.05 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="h-full w-full bg-slate-200"
                            >
                                <SmartImage
                                    src={MEDICAL_IMAGES.LAB_TEAM}
                                    alt="Advanced Laboratory Technology"
                                    className="h-full w-full object-cover grayscale-[0.2]"
                                    loading="lazy"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                                <div className="glass-panel-elite rounded-3xl p-6 border border-white/20 bg-black/40 backdrop-blur-xl">
                                    <p className="text-white font-black text-xl md:text-2xl tracking-tight">Elite Central Laboratory</p>
                                    <p className="text-white/80 text-sm mt-2 leading-relaxed">Equipped with fully automated Siemens & Roche systems for precise clinical reporting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
