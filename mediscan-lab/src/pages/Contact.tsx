import React from 'react';
import { Calendar, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { siteData, handleExternalRedirect } from '../lib/siteData';

const Contact: React.FC = () => {
    const phoneNumber = "919035534724";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in Mediscan services.")}`;
    const primaryPhone = siteData.contact.phones[0] ?? '+91 90355 34724';
    const primaryEmail = siteData.contact.emails[0] ?? 'support@mediscanlab.com';
    const address = siteData.contact.location;

    return (
        <section className="px-4 py-32 md:py-48 min-h-[90vh] bg-slate-50/40 relative overflow-hidden font-outfit">
            {/* Soft ambient background glows */}
            <div className="absolute left-1/3 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-100/30 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--color-brand-pink)]/5 blur-3xl" />

            <div className="container-shell max-w-5xl space-y-16">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-pink)] block">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl leading-[1.1]">
                        How Can We <span className="text-slate-400">Help You</span> Today?
                    </h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                        Whether you are ready to book a checkup, need clinical support, or have specific diagnostic queries, we are here for you.
                    </p>
                </div>

                {/* Main Redirect Cards Grid */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    
                    {/* Booking Portal Card */}
                    <div className="group rounded-[40px] border border-slate-200/60 bg-white/70 p-10 shadow-lg hover:shadow-xl backdrop-blur-xl transition-all duration-500 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 transition-transform group-hover:scale-110">
                                <Calendar size={32} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-slate-900">Schedule Lab Tests</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                    Book checkups, blood tests, radiology procedures, and schedule professional home sample collection directly online.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <a
                                href={siteData.bookingUrl}
                                onClick={(e) => handleExternalRedirect(e, siteData.bookingUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-black transition-all shadow-md group-hover:shadow-lg"
                            >
                                Open Booking Portal
                                <Calendar size={14} />
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp Consulting Card */}
                    <div className="group rounded-[40px] border border-slate-200/60 bg-white/70 p-10 shadow-lg hover:shadow-xl backdrop-blur-xl transition-all duration-500 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-transform group-hover:scale-110">
                                <MessageCircle size={32} fill="currentColor" fillOpacity={0.1} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-slate-900">Direct Clinical Chat</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                    Consult directly with our support team regarding diagnostics package specifications, custom quotes, or reporting timelines.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <a
                                href={whatsappUrl}
                                onClick={(e) => handleExternalRedirect(e, whatsappUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-[#20ba56] transition-all shadow-md group-hover:shadow-lg"
                            >
                                Connect on WhatsApp
                                <MessageCircle size={14} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Trust and General Contact info */}
                <div className="rounded-[48px] border border-slate-100 bg-white p-8 md:p-12 shadow-sm grid gap-8 grid-cols-1 md:grid-cols-2">
                    
                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                            <MapPin size={22} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Main Lab</span>
                            <p className="text-sm font-bold text-slate-900 leading-relaxed">{address}</p>
                            <p className="text-xs font-semibold text-slate-500">{siteData.contact.phones.slice(0, 4).join(', ')}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                            <MapPin size={22} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">New Branch</span>
                            <p className="text-sm font-bold text-slate-900 leading-relaxed">{siteData.contact.branch}</p>
                            <p className="text-xs font-semibold text-slate-500">{siteData.contact.branchPhone}</p>
                        </div>
                    </div>

                </div>

                <div className="rounded-[48px] border border-slate-100 bg-white p-8 md:p-12 shadow-sm grid gap-8 grid-cols-1 md:grid-cols-3">
                    
                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                            <Phone size={22} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Calling</span>
                            <p className="text-sm font-bold text-slate-900">{primaryPhone}</p>
                            <span className="text-[10px] text-slate-400 font-semibold block">Available Mon - Sat (8 AM - 8 PM)</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                            <Mail size={22} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Support</span>
                            <p className="text-sm font-bold text-slate-900">{primaryEmail}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                            <MapPin size={22} />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Download Reports</span>
                            <a
                                href={siteData.reportsUrl}
                                onClick={(e) => handleExternalRedirect(e, siteData.reportsUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-[var(--color-brand-pink)] hover:underline"
                            >
                                reports.mediscanlab.com
                            </a>
                            <span className="text-[10px] text-slate-400 font-semibold block">Access your reports online 24x7</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
