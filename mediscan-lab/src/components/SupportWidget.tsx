
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calendar, X, ChevronRight } from 'lucide-react';
import { siteData } from '../lib/siteData';
import ChatBotIcon from './ChatBotIcon';

const SupportWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "919035534724";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in Mediscan services.")}`;
    const contactUrl = siteData.bookingUrl;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-10 right-10 z-[9999] flex flex-col items-end font-outfit">
            {/* Premium Popover Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0.95, y: 20, filter: 'blur(10px)' }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="mb-6 w-80 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.15)]"
                    >
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                            <div className="flex items-center gap-3 opacity-60">
                                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em]">Concierge AI</h3>
                            </div>
                            <p className="mt-2 text-xl font-bold leading-tight">Professional Medical Assistance</p>
                        </div>
                        
                        <div className="flex flex-col gap-1 p-3">
                            {/* WhatsApp Option */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-2xl p-4 transition-all hover:bg-slate-50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-transform group-hover:scale-110">
                                        <MessageCircle size={24} fill="currentColor" fillOpacity={0.1} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold text-slate-900">Direct WhatsApp</span>
                                        <span className="text-[11px] font-medium text-slate-500">Fast response guaranteed</span>
                                    </div>
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                                    <ChevronRight size={16} className="text-slate-900" />
                                </div>
                            </a>

                            {/* Booking Option */}
                            <a
                                href={contactUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-2xl p-4 transition-all hover:bg-slate-50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900 transition-transform group-hover:scale-110">
                                        <Calendar size={24} fill="currentColor" fillOpacity={0.1} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold text-slate-900">Schedule Lab Test</span>
                                        <span className="text-[11px] font-medium text-slate-500">Home collection available</span>
                                    </div>
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                                    <ChevronRight size={16} className="text-slate-900" />
                                </div>
                            </a>
                        </div>

                        <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-slate-200" />
                                    ))}
                                </div>
                                <p className="text-[11px] font-semibold text-slate-400">
                                    3 agents online
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Minimalist Trigger Button */}
            <div className="relative">
                <motion.button
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full transition-all duration-500 shadow-[0_10px_30px_rgba(2,6,23,0.2)] border border-white/10 ${
                        isOpen 
                        ? 'bg-slate-800 rotate-0' 
                        : 'bg-slate-900 hover:bg-slate-950'
                    }`}
                    aria-label="Support Menu"
                >
                    <div className="h-8 w-8 md:h-10 md:w-10">
                        {isOpen ? (
                            <X size={32} className="text-white w-full h-full" strokeWidth={2} />
                        ) : (
                            <ChatBotIcon isOpen={isOpen} />
                        )}
                    </div>

                    {/* Crisp Notification Dot */}
                    {!isOpen && (
                        <div className="absolute top-0 right-0 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center rounded-full border-[3px] border-white bg-red-500 shadow-md">
                            <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        </div>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default SupportWidget;
