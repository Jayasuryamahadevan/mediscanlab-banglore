import React from 'react';
import { Shield, Lock, FileText, Mail, Info, Calendar } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    const lastUpdated = "Last Updated: December 2024";

    const sections = [
        {
            id: "commitment",
            num: "1",
            title: "Your Privacy – Our Commitment",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        We are extremely proud of our commitment to protect your privacy. We value your trust in us. We will work hard to earn your confidence so that you can enthusiastically use our Services and recommend us to friends and family. Please read the following policy to understand how your Personal Information will be treated as you make full use of our Website/App / avail our services.
                    </p>
                    <p>
                        For the purposes of this Privacy Policy, the term <strong>“Personal Information”</strong> shall mean any information that may be used to identify you including, but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>First and last name with salutation, a home or other physical address and an email address or other contact information, whether at work or at home.</li>
                        <li>Age and gender.</li>
                        <li>Correspondence address.</li>
                        <li>Physical, physiological and mental health condition.</li>
                        <li>Sexual orientation.</li>
                        <li>Medical Records and History.</li>
                        <li>Biometric Information (the amount of information you choose to keep confidential is entirely up to your discretion; you may enter as much or as little information as you choose, except for the information which is mandatorily required).</li>
                    </ul>
                    <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">
                        The information essentially required for conducting the test may be gathered at the time when the patient gets registered at any authorized centre of the company.
                    </p>
                </div>
            )
        },
        {
            id: "collect",
            num: "2",
            title: "Information we collect",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        When you use our Website/App, we collect and store your Personal Information. Our primary goal in doing so is to provide a safe, efficient, and customized experience to our Users. This allows us to provide services and features that most likely meet your needs, and to customize our Website/App to make your experience safer and easier. Importantly, we only collect Personal Information about you that we consider necessary for achieving this purpose.
                    </p>
                    <p>
                        Additionally, we also:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Collect the location data of our service provider personnel / phlebotomists when the website/app is running in the foreground or background of their mobile device through GPS, IP address, to track their trips to our Customers location and keep them updated about their real time location status.</li>
                        <li>Customer from their mobile devices through GPS, if they enable us to do so, as to reach their serving location accurately and also to enhance your use of our app, including to improving pick-up locations, enabling safety features and preventing and detecting fraud.</li>
                        <li>Ask for permissions to capture and access your Media Gallery and Camera to allow you uploading your prescription or downloading your test reports.</li>
                    </ul>
                    <p>
                        In general, you can browse the Website without telling us who you are or revealing any personal information about yourself. To fully use our Website/App, you will need to register using our online registration form, where you may be required to provide us with your contact and identity information and other Personal Information as may be requested to and complete the Registration Process. Once you give us your Personal Information, and initiate Registration Process, you are not anonymous to us. Wherever possible, we indicate which fields are mandatorily required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service or feature on the Website/App unless we require it so.
                    </p>
                    <p>
                        We may automatically track certain information about you based upon your behaviour on our Website/App. You agree that we may use such information to do internal research on our users’ demographics and medical history to better understand, protect and serve our Users. This information is compiled and analysed on an aggregated basis. This information may include, but is not limited to, the URL that you just came from (whether this URL is on our site or not), which URL you next go to (whether this URL is on our Website/App or not), your computer browser information, and your Internet Protocol (“IP”) address.
                    </p>
                    <p>
                        We use data collection devices such as “cookies” on certain pages of the Website/App to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. “Cookies” are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a “cookie”. We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are “session cookies,” meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website/App and you may be required to re-enter your password more frequently during a session.
                    </p>
                    <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider mt-4">Website/App Interactions</h4>
                    <p>
                        You agree that if you or any third-party shares correspondences with us in any electronic form such as emails, letters etc, containing your personal information, we may collect or store the same, as part of your query/query resolution or for the purposes as mentioned in Clause 3 or 4 below.
                    </p>
                    <p>
                        You agree that we may collect your IP address as a visitor to our Website/App. An IP address is a number that is automatically assigned to your computer when you use the internet. We use IP addresses to help diagnose problems with our server, administer our Website/App, analyse trends, track users’ movement, gather broad demographic information for aggregate use for us to improve the Website/App, and deliver customized, personalized content.
                    </p>
                </div>
            )
        },
        {
            id: "use",
            num: "3",
            title: "Use of your Personal Information",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        You agree that we may use your Personal Information to facilitate the Services you request. You agree that we may use your Personal Information and other information we obtain on the Website/App or at the time of patient registration to enable detailed examination of the medical tests conducted, inform you about online and offline offers, products, services, password retrieval and updates; customize your experience; enforce Terms of Use; and as otherwise described to you at the time of collection.
                    </p>
                    <p>
                        Further, you hereby consent that we may use your anonymized sample/ data for research and development purposes. You agree that we may use Personal Information about you to improve our marketing and promotional efforts, to analyse site usage, improve the Website/App’s content and service offerings, and customize the Website/App’s content, layout, and services. These uses improve the Website/App and better tailor it to meet your needs, so as to provide you with an efficient, safe, and customized experience while using the Website/App.
                    </p>
                    <p>
                        You agree that we may use your Personal Information to contact you and deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements, administrative notices, services offerings, and communications relevant to your use of the Website/App. If you do not wish to receive these communications, we encourage you to unsubscribe / opt out of the receipt of certain communications in your profile or contact our grievance officer.
                    </p>
                </div>
            )
        },
        {
            id: "disclosure",
            num: "4",
            title: "Disclosure of your Personal Information",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        You agree and confirm that we do not rent, sell, or share Personal Information about you with other people (save with your consent) or non-affiliated companies except to provide products or Services under the Terms of Use or this Privacy Policy, or under the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To provide the Personal Information to physicians and other authorized health care professionals who need to access your laboratory report for your proper diagnosis.</li>
                        <li>To insurance companies, hospitals, physicians or third parties with our billing department for payment purpose.</li>
                        <li>To support our healthcare operations, such as performing quality checks on your testing, for teaching purposes, or for developing normal reference ranges for the tests we perform.</li>
                        <li>To respond to summons, court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims.</li>
                        <li>To health department or any other Government body as and when required by them for collecting or processing health information of the state/country.</li>
                        <li>To other laboratories/medical institutions for research and development purposes from time to time, to reveal general statistical information about our Website/App and visitors, such as number of visitors, number and type of services purchased, etc.</li>
                        <li>To transfer/disclose Personal Information about you to trusted partners, may or may not be for gain, to promote certain products/services for commercial purposes, without any prior notice to you.</li>
                    </ul>
                    <p>
                        Further, you agree that we may share your Personal Information for the following categories of activities from time-to-time:
                    </p>
                    <div className="space-y-3 pl-4 border-l-2 border-slate-200 mt-4">
                        <h5 className="font-black text-slate-800 text-xs uppercase tracking-wider">Advertisements</h5>
                        <p>
                            When you enter Personal Information on any forum of an advertiser, such information is simultaneously collected by Website/App and the advertiser. The Personal Information is used by Website/App in accordance with the terms of this Privacy Policy and is used by the advertiser as per the advertiser’s prevalent privacy policies. Because we do not control the privacy practices of these advertisers, you should evaluate their practices before deciding to provide the said information.
                        </p>
                        <p>
                            Website/App may also aggregate (gather up data across all accounts) Personal Information and disclose such information in a non-personally identifiable manner to advertisers and other third parties for other marketing and promotional purposes.
                        </p>
                    </div>
                    <div className="space-y-3 pl-4 border-l-2 border-slate-200 mt-4">
                        <h5 className="font-black text-slate-800 text-xs uppercase tracking-wider">Other Corporate Entities</h5>
                        <p>
                            The Company shares much of the data, including Personal Information about you, with its parent, affiliates, subsidiaries, and joint ventures that are committed to serving your online needs and related services, throughout the world. To the extent that these entities have access to your Personal Information, they will treat it at least as protectively as they treat information they obtain from their other users. The Company’s parent, affiliates, subsidiaries, and joint ventures follow privacy practices no less protective for all users than our practices described in this document, to the extent allowed by applicable law. The Company, its parent, affiliates, subsidiaries, its joint ventures, or any combination of such, will share some or all your Personal Information with another business entity should we plan to, merge with, or be acquired by that business entity.
                        </p>
                    </div>
                    <div className="space-y-3 pl-4 border-l-2 border-slate-200 mt-4">
                        <h5 className="font-black text-slate-800 text-xs uppercase tracking-wider">Posting to public areas of the Website/App</h5>
                        <p>
                            Please remember that if you post any of your Personal Information in public areas of the Website/App such as in online forums or chat rooms, or on the Website/App’s searchable database, such information may be collected and used by others over whom we have no control. We are not responsible for the use of information by third parties based on information you post or otherwise make available in public areas of the Website/App.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "access",
            num: "5",
            title: "Access or change your Personal Information",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        You may review, correct, update, or change your account information at any time. To protect your privacy and security, we will verify your identity before granting access or making changes to your Personal Information. If you have registered your profile on the Website/App, your ID and Password are required to access your Account.
                    </p>
                    <p>
                        Your Personal Information shall be retained till such time as is required for the Purpose or required under applicable law, whichever is later.
                    </p>
                </div>
            )
        },
        {
            id: "security",
            num: "6",
            title: "Information security",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        The Company has implemented appropriate security practices and standards and has a comprehensive documented information security programme and information security policies that contain managerial, technical, operational, and physical security control measures that are commensurate with the information assets being protected with the nature of business. Further, the Company takes appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data and restricts access to your personal data to the Company’s employees who need to have that information in order to fulfil your request or supply our services.
                    </p>
                </div>
            )
        },
        {
            id: "other-sites",
            num: "7",
            title: "Other Websites/Apps",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        Our Website/App may contain links to other Websites/Apps. Please note that when you click on one of these links, you are entering another Website/App over which the Website/App has no control and will bear no responsibility. Often these Websites/Apps require you to enter your Personal Information. We encourage you to read the privacy statements on all such Websites/Apps as their policies may differ from ours. You agree that we shall not be liable for any breach of your privacy of Personal Information or loss incurred by your use of these Websites/Apps.
                    </p>
                </div>
            )
        },
        {
            id: "changes",
            num: "8",
            title: "Changes to this Privacy Policy",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        We reserve the right to update, change or modify this Privacy Policy at any time. The amendment to this Privacy Policy shall come to effect from the time of such update, change or modification and the same will be published on this Website/App.
                    </p>
                </div>
            )
        },
        {
            id: "disclaimer",
            num: "9",
            title: "Disclaimer",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        The Company does not access, store, or keep credit card data. All credit card transactions happen using Secure Server Software (SSL) for 128-bit encryption through third-party gateways and the Company plays no role in the transaction, except for directing the customers to gateways or the relevant webpage. Accordingly, the Company shall not be responsible or liable for any loss or damage due to any disclosure whatsoever of Personal Information or any other information collected by the gateways or such Websites/Apps.
                    </p>
                    <p>
                        The Company shall not be liable for any loss or damage sustained by reason of any disclosure (inadvertent or otherwise) of any Personal Information concerning the User’s account and / or information relating to or regarding online transactions using credit cards / debit cards /cash cards and / or their verification process and particulars nor for any error, omission, or inaccuracy with respect to any information so disclosed and used on such third-party gateways.
                    </p>
                </div>
            )
        },
        {
            id: "governing-law",
            num: "10",
            title: "Governing law and Dispute Resolution",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        This Privacy Policy and Terms of Use shall be governed by and constructed in accordance with the laws of India only without reference to conflict of laws principles and disputes arising in relation hereto and shall be subject to the exclusive jurisdiction of the competent courts of New Delhi, India.
                    </p>
                </div>
            )
        },
        {
            id: "assignability",
            num: "11",
            title: "Assignability",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        The Company may assign any of its responsibilities/obligations to any other person without notice to the User, at its sole discretion. However, you shall not assign, sub-licence or otherwise transfer any of your rights under this Privacy Policy to any other party, unless a written consent is taken from the Company.
                    </p>
                </div>
            )
        },
        {
            id: "contacting",
            num: "12",
            title: "Contacting the Website/App",
            content: (
                <div className="space-y-4 font-medium text-slate-600 leading-relaxed text-sm">
                    <p>
                        If you have any questions about this Privacy Policy, the privacy practices of this Website/App, or if you want to exercise any of the rights that you are given under this Privacy Policy, you can contact the grievance officer Mr. Zanula abid ali at:
                    </p>
                    <a
                        href="mailto:admin@mediscanlab.com"
                        className="inline-flex items-center gap-2 text-sm font-black text-slate-900 bg-slate-50 border border-slate-100 hover:border-[var(--color-brand-pink)] hover:bg-[var(--color-brand-pink)]/5 rounded-2xl px-6 py-4 transition-all"
                    >
                        <Mail size={16} className="text-[var(--color-brand-pink)]" />
                        admin@mediscanlab.com
                    </a>
                    <p className="text-xs text-slate-400 mt-2">
                        The details of the grievance officer may be changed by us from time to time by updating this Privacy Policy.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section className="px-4 py-32 md:py-48 min-h-[90vh] bg-slate-50/40 relative overflow-hidden font-outfit">
            {/* Ambient visual background glow */}
            <div className="absolute left-10 top-20 -z-10 h-96 w-96 rounded-full bg-slate-100 blur-3xl opacity-50" />
            <div className="absolute right-10 bottom-20 -z-10 h-96 w-96 rounded-full bg-[var(--color-brand-pink)]/5 blur-3xl opacity-50" />

            <div className="container-shell max-w-5xl space-y-16">
                
                {/* Header Block */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-800 text-[10px] font-black uppercase tracking-wider mb-2">
                        <Shield size={12} className="text-[var(--color-brand-pink)]" />
                        Legal Policy Documentation
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl leading-[1.1]">
                        Privacy <span className="text-slate-400">Policy</span>
                    </h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                        Mediscan Diagnostic & Healthcare Pvt. Ltd. sets forth our commitment to respect your online privacy and secure your personal information.
                    </p>
                    <div className="inline-flex items-center gap-2 text-slate-400 text-xs font-bold pt-2">
                        <Calendar size={14} />
                        {lastUpdated}
                    </div>
                </div>

                {/* Subtext introduction card */}
                <div className="rounded-[40px] border border-slate-200/60 bg-white/70 p-8 md:p-12 shadow-lg backdrop-blur-xl space-y-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)] mb-6">
                        <Info size={24} />
                    </div>
                    <p className="text-sm font-bold text-slate-700 leading-relaxed">
                        This privacy policy (“Privacy Policy”) sets forth our commitment to respect your online privacy and recognize your need for appropriate protection and management of any Personal Information (as defined below) you share with us. The Privacy Policy applies to our Services available under the domain <a href="https://www.mediscanlab.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-pink)] hover:underline">www.mediscanlab.com</a> (hereinafter referred to as the “Website/App”).
                    </p>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                        By visiting the Website/App or going through the Privacy Policy, as detailed below or the Terms of Use, which prescribes Terms and Conditions for use of Website/App or availing our Services, you agree to be bound by this Privacy Policy and to the use and disclosure of your personal information in accordance with the Privacy Policy.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-3xl p-6 text-red-800 text-xs font-black tracking-wider uppercase text-center mt-6">
                        🚨 If you do not agree please do not use or access the Website/App.
                    </div>
                    <p className="text-xs font-medium text-slate-400 pt-4 border-t border-slate-100 leading-relaxed">
                        The words “you” or “your” or “User” or “Customer” as used herein, refer to all individuals and/or entities accessing or using the Website/App for any reason. The words “we” or “us” or “our” or the “Company” as used herein, refer to Mediscan Diagnostic & Healthcare Pvt Ltd. and/or any of its Associate/Subsidiary/Group Company.
                    </p>
                </div>

                {/* Main Policy Content Blocks */}
                <div className="grid gap-8 lg:grid-cols-[1fr_300px] items-start">
                    
                    {/* Sections content list */}
                    <div className="space-y-12">
                        {sections.map((section) => (
                            <div 
                                key={section.id} 
                                id={section.id}
                                className="group rounded-[40px] border border-slate-200/50 bg-white/60 p-8 md:p-10 shadow-md hover:shadow-lg hover:border-slate-300/60 backdrop-blur-xl transition-all duration-300 scroll-mt-24"
                            >
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white text-xs font-black">
                                        {section.num}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none">
                                        {section.title}
                                    </h3>
                                </div>
                                <div className="pt-2 border-t border-slate-100/80">
                                    {section.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar Table of Contents Navigation */}
                    <aside className="sticky top-28 space-y-8 hidden lg:block">
                        <div className="glass-panel-elite rounded-[40px] p-8 bg-white/70 border-slate-200/60 shadow-lg backdrop-blur-xl">
                            <div className="flex items-center gap-2 mb-6">
                                <Lock size={16} className="text-[var(--color-brand-pink)]" />
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-800">
                                    Policy Index
                                </h4>
                            </div>
                            <div className="space-y-1 font-outfit">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className="flex items-center gap-3 p-3 rounded-xl border border-transparent text-left hover:bg-[var(--color-brand-pink)]/5 hover:border-[var(--color-brand-pink)]/20 transition-all group"
                                    >
                                        <span className="text-[9px] font-black text-slate-400 group-hover:text-[var(--color-brand-pink)] w-4 text-right">
                                            {s.num}.
                                        </span>
                                        <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors line-clamp-1">
                                            {s.title}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Direct Grievance Card */}
                        <div className="rounded-[40px] bg-slate-900 text-white p-8 shadow-xl text-center relative overflow-hidden group">
                            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[var(--color-brand-pink)]/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-1000" />
                            <FileText size={28} className="text-[var(--color-brand-pink)] mx-auto mb-4" />
                            <h5 className="font-black text-lg mb-2">Have Questions?</h5>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">
                                Contact the authorized grievance officer at Mediscan Labs for quick policy clarifications.
                            </p>
                            <a
                                href="mailto:admin@mediscanlab.com"
                                className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--color-brand-pink)] hover:bg-white text-black py-4 text-xs font-black uppercase tracking-wider transition-all shadow-md"
                            >
                                Send Email
                            </a>
                        </div>
                    </aside>

                </div>

            </div>
        </section>
    );
};

export default PrivacyPolicy;
