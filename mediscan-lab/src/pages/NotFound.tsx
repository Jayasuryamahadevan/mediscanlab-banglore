import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="px-4 py-24 min-h-[70vh] flex items-center">
            <div className="container-shell">
                <article className="glass-panel-elite rounded-[48px] p-12 text-center md:p-24 bg-white/45 shadow-2xl border-white/60 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-pink)]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                    
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-pink)] mb-6">Error: Code 404</p>
                    <h1 className="text-5xl md:text-8xl font-black text-black tracking-tighter leading-none mb-6">Diagnostic <br /> <span className="text-[var(--color-brand-pink)]">Offline</span></h1>
                    <p className="mt-6 text-xl text-[var(--color-muted)] max-w-xl mx-auto font-medium leading-relaxed">
                        The requested medical portal path could not be resolved. This endpoint is either restricted or decommissioned.
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        <Link to="/" className="btn-brand-black rounded-[20px] px-12 py-5 text-xs font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
                            Initialize Portal
                        </Link>
                        <Link to="/search" className="glass-panel-soft rounded-[20px] border border-white/70 bg-white/45 px-12 py-5 text-xs font-black uppercase tracking-widest text-black shadow-xl hover:bg-white transition-all">
                            Manual Search
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default NotFound;
