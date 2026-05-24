/**
 * Verified high-stability local and remote medical assets for Mediscan Lab
 * Premium, human-centric clinical images - 100% safe, machine-free, and professional.
 */

const base = (import.meta as any).env.BASE_URL || '/';

export const MEDICAL_IMAGES = {
    // Hero & Banners - Bright, professional, human-focused
    HERO_MAIN: `${base}images/hero_doctor.png`, // Warm, smiling friendly doctor holding stethoscope
    DIAGNOSTICS_HEADER: "https://images.unsplash.com/photo-1579684389782-64d84b5e902a?auto=format&fit=crop&q=80&w=1200", // Reassuring consultation banner
    PACKAGES_HEADER: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200", // Elder patient primary care checkup
    BLOG_HEADER: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200", // Group of specialists reviewing scan
    ABOUT_HEADER: `${base}images/hero_doctor.png`, // Friendly clinical lead
    CONTACT_HEADER: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200", // Reassuring consultation checkup
    
    // Departments & Services - Human-focused diagnostics
    PATHOLOGY: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800", // Lab specialist with microscope
    RADIOLOGY: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", // Radiology scanning specialist reviewing charts
    CARDIOLOGY: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800", // Cardiology stethoscope
    MRI_SCAN: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", // Scanning review specialists
    XRAY: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", // Diagnostic radiography explanation
    ULTRASOUND: "https://images.unsplash.com/photo-1590233649036-ed4d914d7944?auto=format&fit=crop&q=80&w=800", // Gentle prenatal scan
    LAB_TEAM: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Pathology team
    
    // General Medical
    CHECKUP_1: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800", // Primary care checkup
    CHECKUP_2: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800", // Clinical verification
    DOCTOR_CONSULT: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800", // Caring physician consult
    MEDICAL_EQUIPMENT: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800", // Clinical tools
    FACILITY: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", // Compassionate modern facility
};

export const SERVICE_IMAGE_SET = [
    // 1. Pathology & Lab
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
    // 2. Radiology & Imaging (Human review, no machine tunnel)
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    // 3. Cardiology & Stethoscopy
    "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
    // 4. Family & Geriatric Medicine
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
    // 5. Maternal / prenatal care (Reassuring checkup)
    "https://images.unsplash.com/photo-1590233649036-ed4d914d7944?auto=format&fit=crop&q=80&w=800",
    // 6. Pediatrics & Child Wellness
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    // 7. General Physician Consulting
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    // 8. Specialized Ophthalmology & Diagnostic Vision
    "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800",
    // 9. Comprehensive Doctor Consultation
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    // 10. Pathology Lab Specialist
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    // 11. Clinical Diagnosis Discussion
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    // 12. Doctor explaining medical graphs
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    // 13. Health & Preventive Wellness counseling
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    // 14. Doctor checking blood pressure
    "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800",
    // 15. Hospital Care Reception (Bright ambience)
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    // 16. Male checkup consultation
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    // 17. Female checkup consultation
    "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800",
    // 18. Senior citizen wellness
    "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?auto=format&fit=crop&q=80&w=800",
    // 19. Senior lady consult
    "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800",
    // 20. Infant pediatrician care
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
    // 21. Reassuring specialist
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    // 22. Clinical analysis on tablet
    "https://images.unsplash.com/photo-1504813184591-015556c5c50f?auto=format&fit=crop&q=80&w=800",
    // 23. Direct stethoscope clinical assessment
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    // 24. Reassuring clinical desk
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
];

export const BLOG_IMAGE_SET = [
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800", // Medical Guidance
    "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800", // Clinical Assessment
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800", // Patient Consultation
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800", // Pathology Findings
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800", // Medical Research
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800", // Clinical Analysis
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800", // Wellness Recommendations
    "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800", // Stethoscopy updates
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800", // Pediatric updates
    "https://images.unsplash.com/photo-1590233649036-ed4d914d7944?auto=format&fit=crop&q=80&w=800", // Prenatal tips
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", // Radiology news
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Diagnostic lab updates
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

