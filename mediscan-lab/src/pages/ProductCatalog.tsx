import { Link } from 'react-router-dom';
import { sortedProducts } from '../lib/siteData';
import { motion } from 'framer-motion';
import { Package, ArrowRight, ShoppingCart } from 'lucide-react';
import { PRODUCT_IMAGES, PRODUCT_IMAGE_SET } from '../lib/medical_images';
import SmartImage from '../components/SmartImage';

const ProductCatalog = () => {
    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <header className="bg-black pt-24 pb-48 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-25 pointer-events-none">
                    <Package size={400} className="absolute -bottom-20 -right-20 text-white transform rotate-12" />
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-pink)]/10 rounded-full blur-[150px]" />
                </div>
                
                <div className="container-shell relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="bg-[var(--color-brand-pink)]/30 border border-[var(--color-brand-pink)]/40 px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.45em] text-white mb-10 inline-block shadow-2xl backdrop-blur-xl">
                            Premium Medical Equipment
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                            Specialized <br /> 
                            <span className="text-[var(--color-brand-pink)] brightness-125">Medical Catalog</span>
                        </h1>
                        <p className="mt-10 text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                            Explore our elite collection of diagnostic units and certified laboratory products for clinical excellence.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div className="container-shell -mt-16 relative z-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sortedProducts.map((item, i) => (
                        <motion.article 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            key={item.path} 
                            className="group glass-panel-elite rounded-[40px] overflow-hidden flex flex-col hover:translate-y-[-8px] transition-all duration-500 shadow-xl border-white/60"
                        >
                            <div className="relative h-[260px] overflow-hidden">
                                <SmartImage
                                    src={PRODUCT_IMAGES[item.title] || PRODUCT_IMAGE_SET[i % PRODUCT_IMAGE_SET.length]}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-black shadow-lg">Verified Stock</span>
                                </div>
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-3xl font-black text-white tracking-tight">{item.price}</p>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-1 gap-5 bg-white/45">
                                <div className="flex items-center gap-3">
                                    <Package size={16} className="text-[var(--color-brand-pink)]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-muted)]">Clinical Unit</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-black text-black group-hover:text-[var(--color-brand-pink-deep)] transition-colors leading-tight line-clamp-2 tracking-tight">
                                    {item.title}
                                </h2>
                                <p className="text-sm leading-relaxed text-[var(--color-muted)] line-clamp-2 flex-1 font-medium">
                                    {item.excerpt}
                                </p>
                                <div className="flex items-center gap-4 mt-4">
                                    <Link
                                        to={item.path}
                                        className="btn-brand-black flex-1 flex items-center justify-center gap-3 rounded-2xl py-4 text-xs font-black uppercase tracking-widest shadow-xl"
                                    >
                                        <ShoppingCart size={16} />
                                        Purchase
                                    </Link>
                                    <Link
                                        to={item.path}
                                        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-100 text-black hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;
