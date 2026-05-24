import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../lib/siteData';

const defaultReviews = [
    {
        name: 'Sangamesh',
        content: 'Good and accurate reports of blood investigation. Staff are good. Reporting is fast.',
        source: 'Google Reviews'
    },
    {
        name: 'Manjunath Bendigeri',
        content: 'Service is good, Cordial friendly staff, place is maintained neat and clean and also hygienic.',
        source: 'Google Reviews'
    },
    {
        name: 'Patient Trust',
        content: 'Trusted by 50,000+ patients monthly for accurate diagnostics and compassionate care with NABL & ISO certifications.',
        source: 'Mediscan Lab'
    }
];

const reviewList = testimonials.length > 0 ? testimonials : defaultReviews;

const Reviews = () => {
    return (
        <section className="px-4 py-12 md:py-24">
            <div className="container-shell">
                <div className="rounded-[48px] border border-slate-200/60 bg-white/60 px-8 py-16 md:px-16 shadow-xl backdrop-blur-xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] block mb-4">
                            Patient Testimonials
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--color-brand-black)] leading-[1.1]">
                            What Our <span className="text-slate-400">Patients</span> Say
                        </h2>
                        <p className="text-slate-500 font-medium mt-4 text-lg">
                            Real feedback from the community we serve every day.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {reviewList.map((review, index) => (
                            <motion.div
                                key={review.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group rounded-[32px] border border-slate-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col relative"
                            >
                                <Quote size={32} className="text-[var(--color-brand-pink)]/10 absolute top-6 right-6" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-slate-600 leading-relaxed flex-1">
                                    "{review.content}"
                                </p>
                                <div className="mt-8 pt-6 border-t border-slate-50">
                                    <p className="text-base font-black text-slate-900">{review.name}</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">{review.source}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
