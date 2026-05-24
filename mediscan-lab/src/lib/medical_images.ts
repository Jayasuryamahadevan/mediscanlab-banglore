/**
 * Home and section images are served from local public assets for reliability.
 * This avoids third-party hotlink failures and keeps layout behavior unchanged.
 */

const base = (import.meta as any).env.BASE_URL || '/';

export const MEDICAL_IMAGES = {
    // Hero & Banners
    HERO_MAIN: '/assets/home/hero-main.jpg',
    DIAGNOSTICS_HEADER: '/assets/home/lab-team.jpg',
    PACKAGES_HEADER: '/assets/home/checkup-1.jpg',
    BLOG_HEADER: '/assets/home/blog-header.jpg',
    ABOUT_HEADER: '/assets/home/about-header.jpg',
    CONTACT_HEADER: '/assets/home/contact-header.jpg',

    // Departments & Services
    PATHOLOGY: '/assets/home/pathology.jpg',
    RADIOLOGY: '/assets/home/radiology.jpg',
    CARDIOLOGY: '/assets/home/cardiology.jpg',
    MRI_SCAN: '/assets/home/mri-scan.jpg',
    XRAY: '/assets/home/medical-equipment.jpg',
    ULTRASOUND: '/assets/home/checkup-2.jpg',
    LAB_TEAM: '/assets/home/lab-team.jpg',

    // General Medical
    CHECKUP_1: '/assets/home/checkup-1.jpg',
    CHECKUP_2: '/assets/home/checkup-2.jpg',
    DOCTOR_CONSULT: '/assets/home/doctor-consult.jpg',
    MEDICAL_EQUIPMENT: '/assets/home/medical-equipment.jpg',
    FACILITY: '/assets/home/facility.jpg',
};

export const SERVICE_IMAGE_SET = [
    '/assets/home/pathology.jpg',
    '/assets/home/doctor-consult.jpg',
    '/assets/home/cardiology.jpg',
    '/assets/home/medical-equipment.jpg',
    '/assets/home/checkup-2.jpg',
    '/assets/home/facility.jpg',
    '/assets/home/radiology.jpg',
    '/assets/home/checkup-1.jpg',
];

export const BLOG_IMAGE_SET = [
    '/assets/home/doctor-consult.jpg',
    '/assets/home/medical-equipment.jpg',
    '/assets/home/checkup-1.jpg',
    '/assets/home/cardiology.jpg',
    '/assets/home/about-header.jpg',
    '/assets/home/contact-header.jpg',
];

export const PRODUCT_IMAGE_SET = [
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800", // Caps bottles
    "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800", // Supplement kits
    "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800", // Stethoscope & clinical items
    "https://images.unsplash.com/photo-1631815541560-afde51f80ec1?auto=format&fit=crop&q=80&w=800", // Testing kit box
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800", // Precision testing items
    "https://images.unsplash.com/photo-1587854692152-cbe660dbbc88?auto=format&fit=crop&q=80&w=800", // Monitoring supplies box
    "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=800", // Certified clinical unit
    "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800", // Stethoscope package
];

