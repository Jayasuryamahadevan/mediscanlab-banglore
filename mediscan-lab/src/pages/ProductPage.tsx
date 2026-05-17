import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getProductByPath, getProductBySlug, toParagraphs } from '../lib/siteData';

const ProductPage = () => {
    const { slug = '' } = useParams();
    const location = useLocation();
    const product = getProductBySlug(slug) ?? getProductByPath(location.pathname);

    if (!product) {
        return (
            <section className="px-4 py-12">
                <div className="container-shell">
                    <div className="glass-panel-soft rounded-[28px] p-8 text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted)]">Product Missing</p>
                        <h1 className="mt-2 text-4xl font-black text-black tracking-tight">This product was not found</h1>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link to="/products" className="btn-brand-black rounded-2xl px-8 py-4 text-xs font-black uppercase tracking-widest shadow-xl">
                                Browse Catalog
                            </Link>
                            <Link to="/" className="glass-panel-soft rounded-2xl border border-white/60 bg-white/45 px-8 py-4 text-xs font-black uppercase tracking-widest text-black">
                                Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const paragraphs = toParagraphs(product.content ?? product.excerpt, 20);

    return (
        <section className="px-4 py-12">
            <div className="container-shell space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <Link to="/products" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[var(--color-brand-pink-deep)] hover:gap-4 transition-all">
                        <ArrowLeft size={16} />
                        Back to Catalog
                    </Link>
                    <a
                        href={product.link}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-panel-soft inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/45 px-6 py-3 text-xs font-black uppercase tracking-widest text-black"
                    >
                        Source Link
                        <ExternalLink size={14} />
                    </a>
                </div>

                <article className="rounded-[40px] border border-white/70 bg-white/45 p-8 backdrop-blur-xl md:p-12 shadow-2xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink-deep)] bg-[var(--color-brand-pink)]/10 px-4 py-2 rounded-full">Diagnostic Equipment</span>
                    <h1 className="mt-8 text-4xl font-black text-black md:text-6xl tracking-tighter leading-none">{product.title}</h1>
                    <p className="mt-6 text-5xl font-black text-black tracking-tight">{product.price}</p>
                    <p className="mt-8 text-xl text-[var(--color-muted)] font-medium leading-relaxed max-w-3xl">{product.excerpt}</p>

                    <div className="mt-12 space-y-6">
                        {(paragraphs.length > 0 ? paragraphs : [product.excerpt]).map((paragraph) => (
                            <p key={paragraph.slice(0, 40)} className="rounded-3xl bg-white/60 p-8 text-base md:text-lg leading-relaxed text-black font-medium border border-white/50 shadow-sm">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ProductPage;
