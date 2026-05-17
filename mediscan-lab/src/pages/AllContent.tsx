import { Link } from 'react-router-dom';
import { labTests, siteData, sortedCustomEntries, sortedPages, sortedPosts, sortedProducts } from '../lib/siteData';
import { motion } from 'framer-motion';
import { Layers3, FileText, FlaskConical, Package, ArrowRight } from 'lucide-react';

const ContentGroup = ({
    title,
    count,
    items,
    icon: Icon
}: {
    title: string;
    count: number;
    items: Array<{ path: string; title: string; excerpt?: string; meta?: string }>;
    icon: React.ElementType;
}) => (
    <section className="space-y-8">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-pink)]/10 flex items-center justify-center text-[var(--color-brand-pink)]">
                <Icon size={24} />
            </div>
            <div>
                <h2 className="text-2xl font-black text-black tracking-tight leading-none">{title}</h2>
                <p className="mt-2 text-[10px] font-black text-[var(--color-muted)] uppercase tracking-[0.3em]">
                    {count} Certified Records
                </p>
            </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, idx) => (
                <motion.article 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    key={`${title}-${item.path}`} 
                    className="glass-panel-elite rounded-[32px] p-8 hover:translate-y-[-6px] transition-all duration-500 group bg-white/45 shadow-xl border-white/60"
                >
                    <div className="flex justify-between items-start mb-4">
                        {item.meta ? (
                            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-pink-deep)] bg-[var(--color-brand-pink)]/10 px-3 py-1.5 rounded-full border border-[var(--color-brand-pink)]/10">
                                {item.meta}
                            </span>
                        ) : <div />}
                    </div>
                    <h3 className="text-xl font-black text-black group-hover:text-[var(--color-brand-pink-deep)] transition-colors line-clamp-2 tracking-tight leading-tight">
                        {item.title}
                    </h3>
                    {item.excerpt ? (
                        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] line-clamp-3 font-medium">
                            {item.excerpt}
                        </p>
                    ) : null}
                    <Link
                        to={item.path}
                        className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-black group-hover:text-[var(--color-brand-pink-deep)] group-hover:gap-5 transition-all"
                    >
                        Access Details
                        <ArrowRight size={16} />
                    </Link>
                </motion.article>
            ))}
        </div>
    </section>
);

const AllContent = () => {
    const customByType = sortedCustomEntries.reduce<Record<string, typeof sortedCustomEntries>>((acc, item) => {
        const key = item.postTypeLabel === 'Service' ? 'Specialized Service' : 
                    item.postTypeLabel === 'Team Member' ? 'Medical Specialists' : 
                    item.postTypeLabel === 'Client' ? 'Corporate Partners' : item.postTypeLabel;
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});

    return (
        <div className="min-h-screen pb-20">
            {/* Elite Header */}
            <header className="bg-black pt-16 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-brand-pink)] rounded-full blur-[150px]" />
                </div>
                
                <div className="container-shell relative z-10 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-pink)] mb-6 block">Medical Directory</span>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                            Diagnostic Resource <br /><span className="text-[var(--color-brand-pink)]">Database</span>
                        </h1>
                        <p className="mt-8 text-lg text-white/60 leading-relaxed font-medium">
                            Access our complete clinical database of specialized medical services, lab parameters, and wellness packages.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div className="container-shell -mt-16 relative z-20 space-y-20">
                {/* Stats Row */}
                <div className="grid gap-6 md:grid-cols-4">
                    {[
                        { label: 'Core Pages', count: siteData.stats.totalPages, icon: Layers3, color: 'text-black' },
                        { label: 'Health Guides', count: siteData.stats.totalPosts, icon: FileText, color: 'text-[var(--color-brand-pink-deep)]' },
                        { label: 'Special Packages', count: siteData.stats.totalProducts, icon: Package, color: 'text-black' },
                        { label: 'Total Services', count: siteData.stats.totalCustomEntries, icon: FlaskConical, color: 'text-[var(--color-brand-pink)]' }
                    ].map((stat, idx) => (
                        <motion.div 
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-panel-elite rounded-[32px] p-8 flex flex-col items-center text-center bg-white shadow-2xl border-white/60"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-black/5 shadow-sm flex items-center justify-center ${stat.color} mb-4`}>
                                <stat.icon size={28} />
                            </div>
                            <p className="text-4xl font-black text-black tracking-tighter">{stat.count}</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-muted)] mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Content Sections */}
                <ContentGroup
                    title="Essential Services"
                    count={sortedPages.filter(p => !/sample page|homepage|elementor|#\d+/i.test(p.title)).length}
                    icon={Layers3}
                    items={sortedPages
                        .filter(p => !/sample page|homepage|elementor|#\d+/i.test(p.title))
                        .map((item) => ({ path: item.path, title: item.title, excerpt: item.excerpt, meta: 'Core Portal' }))}
                />

                <ContentGroup
                    title="Diagnostic Parameters"
                    count={labTests.length}
                    icon={FlaskConical}
                    items={labTests.map((item) => ({ path: item.path, title: item.title, excerpt: item.excerpt, meta: 'Verified Test' }))}
                />

                <ContentGroup
                    title="Elite Wellness Packages"
                    count={sortedProducts.length}
                    icon={Package}
                    items={sortedProducts.map((item) => ({ path: item.path, title: item.title, excerpt: item.excerpt, meta: item.price }))}
                />

                <ContentGroup
                    title="Medical Insights"
                    count={sortedPosts.length}
                    icon={FileText}
                    items={sortedPosts.map((item) => ({ path: item.path, title: item.title, excerpt: item.excerpt, meta: item.date }))}
                />

                {Object.entries(customByType).map(([label, entries]) => (
                    <ContentGroup
                        key={label}
                        title={`${label} Center`}
                        count={entries.length}
                        icon={FlaskConical}
                        items={entries.map((item) => ({
                            path: item.path,
                            title: item.title,
                            excerpt: item.excerpt,
                            meta: item.postTypeLabel === 'Service' ? 'Clinical' : 
                                  item.postTypeLabel === 'Testimonial' ? 'Verified Review' : 
                                  item.postTypeLabel === 'Team Member' ? 'MD Specialist' : 'Verified'
                        }))}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllContent;
