import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldCheck, X } from 'lucide-react';

const RedirectInterceptor: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pendingUrl, setPendingUrl] = useState('');
    const [pendingTarget, setPendingTarget] = useState('_blank');

    useEffect(() => {
        const handleGlobalClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a');
            
            if (anchor && anchor.href) {
                const url = anchor.href;
                
                // Intercept WhatsApp URLs or Mediscan external booking portal URLs
                const isWhatsApp = url.includes('wa.me');
                const isBooking = url.includes('jayasuryamahadevan') || url.includes('booking') || url.includes('mediscanlab-banglore');
                
                if (isWhatsApp || isBooking) {
                    event.preventDefault();
                    setPendingUrl(url);
                    setPendingTarget(anchor.target || '_blank');
                    setIsOpen(true);
                }
            }
        };

        document.addEventListener('click', handleGlobalClick, true);
        return () => {
            document.removeEventListener('click', handleGlobalClick, true);
        };
    }, []);

    const handleConfirm = () => {
        setIsOpen(false);
        if (pendingUrl) {
            window.open(pendingUrl, pendingTarget);
        }
    };

    const handleCancel = () => {
        setIsOpen(false);
        setPendingUrl('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
                    {/* Backdrop with elegant glassmorphic blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCancel}
                        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
                    />

                    {/* Modal Content container */}
                    <motion.div
                        initial={{ scale: 0.95, y: 12, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 12, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-slate-100 bg-white p-8 shadow-2xl font-outfit"
                    >
                        {/* Close Trigger */}
                        <button
                            onClick={handleCancel}
                            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <X size={16} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            {/* Shield Verification Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 shadow-inner">
                                <ShieldCheck size={32} />
                            </div>

                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-brand-pink)] mb-2 block">
                                Secure Connection
                            </span>
                            
                            <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-3">
                                Shall we redirect you?
                            </h3>

                            <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8 px-2">
                                You are heading to an external portal to connect with our clinical team or finalize your diagnostic schedule. Proceed safely?
                            </p>

                            {/* Options Action Buttons */}
                            <div className="flex w-full gap-3">
                                <button
                                    onClick={handleCancel}
                                    className="flex-1 rounded-2xl border border-slate-200 bg-white py-4 text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 active:scale-95 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-black active:scale-95 transition-all shadow-lg shadow-slate-950/10"
                                >
                                    Yes, Proceed
                                    <ExternalLink size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RedirectInterceptor;
