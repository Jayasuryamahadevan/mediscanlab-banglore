import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Scan, Stethoscope, Activity, Heart, Shield } from 'lucide-react';
import { serviceHighlights } from '../lib/siteData';

import { MEDICAL_IMAGES, SERVICE_IMAGE_SET } from '../lib/medical_images';

const serviceIcons = [
    <Scan size={24} />,
    <Microscope size={24} />,
    <Stethoscope size={24} />,
    <Activity size={24} />,
    <Heart size={24} />,
    <Shield size={24} />,
];

const ServicesDirectory = () => {
    return (
        <div className="min-h-screen pb-20">
            {/* Editorial Header */}
            <header className="bg-black pt-32 lg:pt-40 pb-48 lg:pb-56 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0">
                    <img 
                        src={MEDICAL_IMAGES.DIAGNOSTICS_HEADER} 
                        className="w-full h-full object-cover opacity-80"
                        alt="Background"
                        loading="eager"
                    />
                    {/* Critical visibility layers - Darkened for perfect contrast */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                <div className="container-shell relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-20"
                        >
                            <span className="bg-[var(--color-brand-pink)]/40 border border-white/20 px-6 py-2 md:px-8 md:py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.45em] text-white mb-8 md:mb-10 inline-block shadow-2xl backdrop-blur-xl">
                                Centers of Medical Excellence
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] md:leading-[0.9] tracking-tighter drop-shadow-2xl">
                                Clinical <br /> 
                                <span className="text-[var(--color-brand-pink)] brightness-125">Specialties</span>
                            </h1>
                            {/* Fixed text color from invalid text-white/90 to text-slate-100 */}
                            <p className="mt-6 md:mt-8 text-lg md:text-xl text-slate-100 font-medium leading-relaxed max-w-lg drop-shadow-lg">
                                Mediscan houses world-class diagnostic departments, led by specialists and equipped with autonomous imaging & pathology systems.
                            </p>
                        </motion.div>
                        
                        <div className="relative hidden lg:block w-full max-w-lg xl:max-w-xl mx-auto mr-0">
                            <div className="absolute -inset-20 bg-[var(--color-brand-pink)]/10 rounded-full blur-[120px]" />
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1 }}
                                className="relative z-10 glass-panel-elite rounded-[40px] xl:rounded-[60px] p-3 xl:p-4 bg-white/10 border-white/20 shadow-2xl backdrop-blur-2xl"
                            >
                                <img 
                                    src={MEDICAL_IMAGES.FACILITY} 
                                    className="w-full h-auto aspect-[4/3] object-cover rounded-[30px] xl:rounded-[50px] shadow-2xl"
                                    alt="Medical Facility"
                                    loading="eager"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container-shell -mt-24 relative z-20">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {serviceHighlights.map((service, i) => (
                        <motion.article
                            key={service.path}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            className="group glass-panel-elite rounded-[48px] flex flex-col hover:translate-y-[-10px] transition-all duration-700 overflow-hidden shadow-2xl bg-white border-white/60"
                        >
                            {/* Department ID Overlay */}
                            <div className="absolute top-10 right-10 z-30 pointer-events-none">
                                <span className="text-6xl font-black text-black/5 group-hover:text-[var(--color-brand-pink)]/10 transition-colors tracking-tighter">
                                    {i < 9 ? `0${i + 1}` : i + 1}
                                </span>
                            </div>

                            <div className="relative h-[280px] overflow-hidden bg-slate-100">
                                <img
                                    src={SERVICE_IMAGE_SET[i % SERVICE_IMAGE_SET.length]}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/30" /> {/* Added protective overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                                
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-[var(--color-brand-pink)] mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                                        {serviceIcons[i % serviceIcons.length]}
                                    </div>
                                    <h2 className="text-3xl font-black text-white leading-tight tracking-tighter drop-shadow-lg">{service.title}</h2>
                                </div>
                            </div>

                            <div className="p-10 space-y-8 flex flex-col flex-1">
                                <p className="text-[var(--color-muted)] text-sm font-medium leading-relaxed line-clamp-3 flex-1">
                                    {service.excerpt || 'Access cutting-edge medical diagnostic technologies and expert clinical care at our specialized laboratory center.'}
                                </p>
                                
                                <div className="pt-8 border-t border-black/5 mt-auto">
                                    <Link
                                        to={service.path}
                                        className="flex items-center justify-between group/btn"
                                    >
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Explore Department</span>
                                        <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-black group-hover/btn:bg-[var(--color-brand-pink)] group-hover/btn:text-white group-hover/btn:border-transparent transition-all shadow-sm">
                                            <ArrowRight size={20} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesDirectory;
