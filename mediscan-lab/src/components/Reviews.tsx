import { motion } from 'framer-motion';

const reviews = [
    {
        text: "Good and accurate reports of blood investigation. Ultrasound reports are average by sir but madam reports are to up to the mark. Staff are good. Reporting is fast.",
        author: "Sangamesh",
        rating: 5
    },
    {
        text: "Service is good, Coordial friendly staff, place is maintained neat n clean and also hygienic.",
        author: "Manjunath Bendigeri",
        rating: 5
    }
];

const Reviews = () => {
    return (
        <section className="px-4 py-12 md:py-24 bg-slate-50">
            <div className="container-shell">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl mt-3 font-extrabold text-[var(--color-ink)] tracking-tight">What Our Patients Said</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 md:p-8 rounded-[24px] bg-white shadow-xl border border-slate-100"
                        >
                            <div className="flex gap-1 mb-4 text-[#986699]">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-slate-600 font-medium leading-relaxed italic">"{review.text}"</p>
                            <h4 className="mt-6 font-bold text-lg text-[var(--color-brand-black)]">- {review.author}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;