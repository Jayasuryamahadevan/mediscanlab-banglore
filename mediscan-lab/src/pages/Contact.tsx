import { useEffect } from 'react';
import { Clock } from 'lucide-react';
import { siteData } from '../lib/siteData';

const Contact = () => {
    useEffect(() => {
        window.location.href = siteData.bookingUrl;
    }, []);

    return (
        <section className="px-4 py-20 min-h-[60vh] flex items-center justify-center">
            <div className="container-shell text-center space-y-8">
                <div className="w-20 h-20 bg-[var(--color-brand-pink)]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Clock size={40} className="text-[var(--color-brand-pink)]" />
                </div>
                <h1 className="text-4xl font-black tracking-tighter text-slate-900">Redirecting to Booking Portal...</h1>
                <p className="text-slate-500 font-medium text-lg">
                    If you are not redirected automatically, {' '}
                    <a 
                        href={siteData.bookingUrl} 
                        className="text-[var(--color-brand-pink)] underline font-bold hover:text-[var(--color-brand-pink-deep)] transition-colors"
                    >
                        click here
                    </a>.
                </p>
            </div>
        </section>
    );
};

export default Contact;
