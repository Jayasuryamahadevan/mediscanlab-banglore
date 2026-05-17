
import React from 'react';

const ChatBotIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-full h-full transition-all duration-700 ease-in-out ${isOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        >
            <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Glowing Aura Ring */}
            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#neonGradient)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" className="animate-spin-slow" style={{ animationDuration: '10s' }} />

            {/* Sleek Bot Face Shield */}
            <path d="M30 35 Q50 25 70 35 L75 55 Q50 80 25 55 Z" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />
            
            {/* Glowing Eyes */}
            <circle cx="40" cy="48" r="4" fill="#22D3EE" filter="url(#neonGlow)" className="animate-pulse" />
            <circle cx="60" cy="48" r="4" fill="#22D3EE" filter="url(#neonGlow)" className="animate-pulse" />
            
            {/* Minimalist Tech Lines */}
            <line x1="50" y1="62" x2="50" y2="68" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <circle cx="50" cy="22" r="2.5" fill="url(#neonGradient)" filter="url(#neonGlow)" />
            <line x1="50" y1="26" x2="50" y2="30" stroke="url(#neonGradient)" strokeWidth="1.5" />
        </svg>
    );
};

export default ChatBotIcon;
