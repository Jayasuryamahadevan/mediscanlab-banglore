import { FormEvent, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, FlaskConical, FileText, Package, Layers3, ArrowRight } from 'lucide-react';
import { searchSite } from '../lib/siteData';
import { motion } from 'framer-motion';

const Search = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const initialQuery = params.get('q') ?? '';
    const [query, setQuery] = useState(initialQuery);

    const results = useMemo(() => searchSite(initialQuery), [initialQuery]);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const value = query.trim();
        if (!value) {
            navigate('/search');
            return;
        }
        navigate(`/search?q=${encodeURIComponent(value)}`);
    };

    const getIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'test': return FlaskConical;
            case 'post': return FileText;
            case 'product': return Package;
            default: return Layers3;
        }
    };

    return (
        <div className="min-h-screen pb-20">
            {/* Search Header */}
            <header className="bg-black pt-24 pb-48 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <SearchIcon size={400} className="absolute -bottom-20 -right-20 text-white transform rotate-12" />
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-pink)]/10 rounded-full blur-[150px]" />
                </div>
                
                <div className="container-shell relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                            How can we <br />
                            <span className="text-[var(--color-brand-pink)] brightness-125">help you</span> today?
                        </h1>
                        <p className="mt-10 text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                            Search across our medical tests, services, and health guides with precision accuracy.
                        </p>
                        
                        <form onSubmit={onSubmit} className="mt-16 relative group max-w-3xl mx-auto">
                            <label className="flex items-center gap-6 bg-white rounded-[40px] p-2 pr-2 pl-10 shadow-2xl focus-within:ring-8 ring-white/10 transition-all border border-white/20">
                                <SearchIcon size={28} className="text-slate-300 group-focus-within:text-[var(--color-brand-pink)] transition-colors" />
                                <input
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search blood tests, health checkups..."
                                    className="h-14 w-full bg-transparent text-2xl font-black text-black outline-none placeholder:text-slate-400 tracking-tight"
                                />
                                <button type="submit" className="btn-brand-black rounded-[32px] px-12 py-5 text-[11px] font-black uppercase tracking-[0.2em] h-full shadow-2xl hover:scale-105 transition-transform">
                                    Search
                                </button>
                            </label>
                        </form>
                    </motion.div>
                </div>
            </header>

            {/* Results Grid */}
            <div className="container-shell -mt-8 relative z-20">
                <div className="space-y-4">
                    {initialQuery && (
                        <p className="text-xs font-black uppercase tracking-widest text-[var(--color-muted)] mb-8 ml-4">
                            Found {results.length} matches for "<span className="text-[var(--color-brand-pink-deep)]">{initialQuery}</span>"
                        </p>
                    )}

                    {results.length === 0 ? (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="glass-panel-elite rounded-[38px] p-16 text-center border-white/60"
                        >
                            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300 border border-gray-100">
                                <SearchIcon size={32} />
                            </div>
                            <h2 className="text-2xl font-black text-black tracking-tight">No matches found</h2>
                            <p className="mt-3 text-[var(--color-muted)] max-w-sm mx-auto font-medium">
                                We couldn't find anything matching your search. Try using simpler keywords like "Sugar", "CBC", or "MRI".
                            </p>
                        </motion.div>
                    ) : (
                        <div className="grid gap-5">
                            {results.map((item, idx) => {
                                const Icon = getIcon(item.type);
                                return (
                                    <motion.article 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        key={`${item.type}-${item.path}-${item.title}`} 
                                        className="glass-panel-soft rounded-[28px] p-8 hover:bg-white transition-all group border-l-8 border-l-transparent hover:border-l-[var(--color-brand-pink)] shadow-sm hover:shadow-xl border-white/60"
                                    >
                                        <div className="flex gap-8">
                                            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gray-50 items-center justify-center text-gray-300 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                                <Icon size={26} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-black px-3 py-1 rounded-full">
                                                        {item.type === 'test' ? 'Diagnostic Test' : 
                                                         item.type === 'post' ? 'Health Guide' : 
                                                         item.type === 'package' ? 'Health Package' : 
                                                         item.type === 'service' ? 'Medical Service' : 
                                                         item.type === 'product' ? 'Diagnostic Unit' : 'Information'}
                                                    </span>
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Medical Accuracy Verified</span>
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-black text-black group-hover:text-[var(--color-brand-pink-deep)] transition-colors tracking-tight">
                                                    {item.title}
                                                </h2>
                                                {item.excerpt && (
                                                    <p className="mt-3 text-sm md:text-base text-[var(--color-muted)] line-clamp-2 leading-relaxed font-medium">
                                                        {item.excerpt}
                                                    </p>
                                                )}
                                                <Link
                                                    to={item.path}
                                                    className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--color-brand-pink-deep)] hover:gap-4 transition-all"
                                                >
                                                    Access Details
                                                    <ArrowRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
