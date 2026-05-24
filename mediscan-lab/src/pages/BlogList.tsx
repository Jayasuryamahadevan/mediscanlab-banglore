import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { sortedPosts } from '../lib/siteData';
import { MEDICAL_IMAGES, BLOG_IMAGES, BLOG_IMAGE_SET } from '../lib/medical_images';
import SmartImage from '../components/SmartImage';

const blogImages = BLOG_IMAGE_SET;

const formatDate = (value: string) => {
    if (!value) return 'No date';
    const normalized = value.includes('T') ? value : value.replace(' ', 'T');
    const date = new Date(normalized);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
};

const BlogList = () => {
    const [params] = useSearchParams();
    const q = params.get('q')?.trim().toLowerCase() ?? '';
    const posts = q
        ? sortedPosts.filter((post) =>
              `${post.title} ${post.excerpt} ${post.content ?? ''}`.toLowerCase().includes(q)
          )
        : sortedPosts;

    const [featured, ...rest] = posts;

    return (
        <section className="px-4 py-10">
            <div className="container-shell space-y-8">

                {/* Header Banner */}
                <div className="relative overflow-hidden rounded-[48px] border border-white/80 shadow-2xl h-[350px] md:h-[450px] bg-slate-900">
                    <SmartImage
                        src={MEDICAL_IMAGES.BLOG_HEADER}
                        alt="Mediscan Health Blog"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="eager"
                    />
                    {/* Professional gradient for critical legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                            <span className="inline-block rounded-full bg-white/15 border border-white/30 px-8 py-2.5 text-[11px] font-black uppercase tracking-[0.45em] text-white mb-10 shadow-2xl backdrop-blur-xl">
                                Health Intelligence
                            </span>
                            <h1 className="mt-4 text-5xl font-black text-white md:text-8xl tracking-tighter leading-tight md:leading-[0.9] drop-shadow-2xl">
                                {q ? `Search: "${q}"` : 'Medical Insights & Health News'}
                            </h1>
                            <p className="mt-8 text-white text-lg md:text-2xl font-medium max-w-xl drop-shadow-lg leading-relaxed">
                                {posts.length} peer-reviewed articles from our leading diagnostic experts.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Featured Post */}
                {featured && !q && (
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-[56px] border border-white/80 shadow-[0_50px_100px_-20px_rgba(2,6,23,0.3)] h-[500px] md:h-[600px] bg-slate-900"
                    >
                        <SmartImage
                            src={BLOG_IMAGES[featured.title] || blogImages[0]}
                            alt={featured.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20">
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <span className="rounded-full bg-[var(--color-brand-pink)] px-6 py-2 text-[11px] font-black text-white uppercase tracking-[0.3em] shadow-2xl">Featured Analysis</span>
                                <span className="flex items-center gap-3 text-sm font-black text-white uppercase tracking-[0.25em] drop-shadow-md">
                                    <Calendar size={16} className="text-[var(--color-brand-pink)] brightness-125" /> {formatDate(featured.date)}
                                </span>
                            </div>
                            <h2 className="text-4xl font-black text-white md:text-7xl leading-tight md:leading-[0.95] tracking-tighter max-w-4xl drop-shadow-2xl">{featured.title}</h2>
                            <p className="mt-8 text-white text-lg md:text-2xl font-medium max-w-3xl line-clamp-2 drop-shadow-lg leading-relaxed">{featured.excerpt}</p>
                            <Link
                                to={featured.path}
                                className="mt-12 inline-flex items-center gap-4 rounded-[20px] bg-white text-black px-12 py-6 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[var(--color-brand-pink)] hover:text-white hover:scale-105 transition-all w-fit shadow-2xl"
                            >
                                Read Investigation <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.article>
                )}

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {(q ? posts : rest).map((post, i) => (
                        <motion.article
                            key={post.path}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 4) * 0.08, duration: 0.45 }}
                            className="group glass-panel-elite interactive-card overflow-hidden rounded-[32px] flex flex-col bg-white border-white/60 shadow-xl"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-[240px] overflow-hidden bg-slate-100">
                                <SmartImage
                                    src={BLOG_IMAGES[post.title] || blogImages[(i + 1) % blogImages.length]}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <span className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest">
                                        <Calendar size={12} className="text-[var(--color-brand-pink)]" /> {formatDate(post.date)}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1 gap-4">
                                <div className="flex items-center gap-3">
                                    <BookOpen size={16} className="text-[var(--color-brand-pink)]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-muted)]">Medical Journal</span>
                                </div>
                                <h2 className="text-2xl font-black text-black leading-tight tracking-tight group-hover:text-[var(--color-brand-pink-deep)] transition-colors">{post.title}</h2>
                                <p className="text-sm leading-relaxed text-[var(--color-muted)] font-medium line-clamp-3 flex-1">{post.excerpt}</p>
                                <Link
                                    to={post.path}
                                    className="mt-4 inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-black group-hover:text-[var(--color-brand-pink-deep)] group-hover:gap-5 transition-all"
                                >
                                    Read Analysis
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-24 glass-panel-elite rounded-[40px] bg-white/40 border-white/60">
                        <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BookOpen size={40} className="text-[var(--color-brand-pink)]" />
                        </div>
                        <p className="text-2xl font-black text-black tracking-tight">No results matched your search</p>
                        <p className="text-[var(--color-muted)] mt-2 font-medium">Refine your parameters and try again.</p>
                        <Link to="/blog" className="btn-brand-black mt-8 inline-flex px-10 py-4 text-xs font-black uppercase tracking-[0.2em]">
                            Reset All Articles
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
};

export default BlogList;
