import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Clock, Share2, ShieldCheck } from 'lucide-react';
import { getPostBySlug, toParagraphs, handleExternalRedirect } from '../lib/siteData';
import { motion } from 'framer-motion';
import { MEDICAL_IMAGES } from '../lib/medical_images';

const formatDate = (value: string) => {
    if (!value) return 'No date';
    const normalized = value.includes('T') ? value : value.replace(' ', 'T');
    const date = new Date(normalized);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

const BlogPost = () => {
    const { slug = '' } = useParams();
    const post = getPostBySlug(slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const paragraphs = toParagraphs(post.content ?? post.excerpt, 40);

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Header */}
            <header className="relative h-[450px] md:h-[600px] overflow-hidden">
                <img 
                    src={MEDICAL_IMAGES.BLOG_HEADER} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="container-shell absolute inset-0 flex flex-col justify-end pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 font-bold text-xs uppercase tracking-widest">
                            <ArrowLeft size={16} />
                            Health Blog
                        </Link>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-[var(--color-brand-pink)] text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Medical Insight</span>
                            <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                                <Calendar size={14} />
                                {formatDate(post.date)}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                            {post.title}
                        </h1>
                    </motion.div>
                </div>
            </header>

            <div className="container-shell mt-12">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                    {/* Main Content */}
                    <article className="glass-panel-elite rounded-[40px] p-8 md:p-12 bg-white/45 shadow-2xl border-white/60">
                        <div className="prose prose-lg max-w-none space-y-6">
                            {paragraphs.map((paragraph, i) => (
                                <p key={i} className="text-black text-lg leading-relaxed font-medium">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-black uppercase tracking-widest">Mediscan Editorial</p>
                                    <p className="text-xs font-bold text-[var(--color-muted)]">Verified Health Content</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black transition-colors">
                                    <Share2 size={18} />
                                </button>
                                <a
                                    href={post.link}
                                    onClick={(e) => handleExternalRedirect(e, post.link)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-brand-black rounded-2xl px-6 py-3.5 text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-xl"
                                >
                                    Source Article <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="glass-panel-soft rounded-[32px] p-8 border border-white/70 bg-white/45">
                            <h3 className="text-lg font-black text-black mb-6 tracking-tight">Quick Facts</h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3 text-sm font-bold text-black">
                                    <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-pink)]/10 flex items-center justify-center text-[var(--color-brand-pink)]">
                                        <Clock size={16} />
                                    </div>
                                    <span>5 Min Read</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-black">
                                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black">
                                        <ShieldCheck size={16} />
                                    </div>
                                    <span>Expert Reviewed</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-[40px] overflow-hidden relative group shadow-2xl">
                            <img 
                                src={MEDICAL_IMAGES.CHECKUP_1} 
                                className="w-full h-[350px] object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt="Checkup"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <p className="text-white font-black text-2xl leading-tight tracking-tight">Ready for your annual checkup?</p>
                                <Link to="/packages" className="mt-6 btn-brand-pink rounded-2xl py-4 text-center text-xs font-black uppercase tracking-widest shadow-xl">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
