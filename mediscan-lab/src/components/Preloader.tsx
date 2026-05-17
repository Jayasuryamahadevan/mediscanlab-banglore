import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [percent, setPercent] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 2;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => setIsVisible(false), 600);
            }
            setPercent(progress);
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[10000] bg-[#134e48] flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[12vw] md:text-[8vw] font-black text-white/10 leading-none select-none"
                        >
                            MEDISCAN
                        </motion.div>
                        <motion.div 
                            className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-black text-[#ffbc52]"
                        >
                            {percent}%
                        </motion.div>
                    </div>
                    
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-[#ffbc52]"
                                initial={{ width: 0 }}
                                animate={{ width: `${percent}%` }}
                            />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                            Elite Diagnostic Experience
                        </p>
                    </div>

                    <div className="absolute bottom-10 container-shell flex justify-between items-center text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <span>Digital Precision</span>
                        <span>Since 2004</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
