/**
 * Home and section images are served from local public assets for reliability.
 * This avoids third-party hotlink failures and keeps layout behavior unchanged.
 */

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

const q = "?auto=format&fit=crop&q=80&w=800";

export const PACKAGE_IMAGES: Record<string, string> = {
    "Basic Health Check Up": `https://images.unsplash.com/photo-1505751172876-fa1923c5c528${q}`,
    "Master Health Check Up (Male)": `https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca${q}`,
    "Master Health Check Up (Female)": `https://images.unsplash.com/photo-1559839734-2b71ea197ec2${q}`,
    "Senior Citizen Check Up (Male)": `https://images.unsplash.com/photo-1506126613408-eca07ce68773${q}`,
    "Senior Citizen Check Up (Female)": `https://images.unsplash.com/photo-1576765608535-5f04d1e3f289${q}`,
    "Basic Diabetic Check Up": `https://images.unsplash.com/photo-1504813184591-015556c5c50f${q}`,
    "Executive Diabetic Check Up": `https://images.unsplash.com/photo-1581056771107-24ca5f033842${q}`,
    "Whole Body Check Up (Male)": `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b${q}`,
    "Whole Body Check Up (Female)": `https://images.unsplash.com/photo-1544367567-0f2fcb009e0b${q}`,
    "Executive Health Check Up (Male)": `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d${q}`,
    "Executive Health Check Up (Female)": `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2${q}`,
    "Basic Child Health Check Up": `https://images.unsplash.com/photo-1581594693702-fbdc51b2763b${q}`,
    "Advanced Child Health Check Up": `https://images.unsplash.com/photo-1622253692010-5550c9b4b98e${q}`,
    "Cancer Screening Check Up (Male)": `https://images.unsplash.com/photo-1530026405186-ed1ea400c3a4${q}`,
    "Cancer Screening Check Up (Female)": `https://images.unsplash.com/photo-1516549655169-df83a0774514${q}`,
    "Basic Renal Check Up (Male)": `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d${q}`,
    "Advanced Renal Check Up": `https://images.unsplash.com/photo-1582750433444-6483a46fdbd4${q}`,
    "Basic Heart Check Up": `https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd${q}`,
    "Basic Hypertension Check Up": `https://images.unsplash.com/photo-1612277795421-9bc7702c6d0b${q}`
};

export const LAB_TEST_IMAGES: Record<string, string> = {
    "Coombs Test": `https://images.unsplash.com/photo-1613478223719-2ab802602423${q}`,
    "D-Dimer Test": `https://images.unsplash.com/photo-1579154204601-01588f351e67${q}`,
    "Glucose Tolerance Test & Obstetrical Glucose": `https://images.unsplash.com/photo-1551076805-e1869033e561${q}`,
    "Tolerance Test": `https://images.unsplash.com/photo-1607613009820-a29f7bb81c04${q}`,
    "Gram Stain Test": `https://images.unsplash.com/photo-1576086213369-97a306d36557${q}`,
    "PAPP-A": `https://images.unsplash.com/photo-1559757175-5700dde675bc${q}`,
    "Pregnancy Test": `https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7${q}`,
    "Rheumatoid Factor (RA Test)": `https://images.unsplash.com/photo-1447452001602-7090c7ab2db3${q}`,
    "Sickling Test": `https://images.unsplash.com/photo-1579163465015-3a4b098710bc${q}`,
    "Weil - Felix Test": `https://images.unsplash.com/photo-1576086213369-97a306d36557${q}`,
    "Widal Test (Slide Test)": `https://images.unsplash.com/photo-1582719478250-c89cae4dc85b${q}`,
    "Liver Function Test (LFT)": `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158${q}`,
    "Tests": `https://images.unsplash.com/photo-1666214280391-33ffaf4d3f5e${q}`,
    "Cervical Cancer Screening": `https://images.unsplash.com/photo-1631217868264-e5b90bb7e133${q}`
};

export const SERVICE_IMAGES: Record<string, string> = {
    "Radiology Services": `https://images.unsplash.com/photo-1559757175-5700dde675bc${q}`,
    "Cardiology Services": `https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd${q}`,
    "Clinical Laboratory Services": `https://images.unsplash.com/photo-1579154204601-01588f351e67${q}`,
    "Heart Failure Management": `https://images.unsplash.com/photo-1559839734-2b71ea197ec2${q}`,
    "Blood Pressure Monitoring": `https://images.unsplash.com/photo-1612277795421-9bc7702c6d0b${q}`,
    "24/7 Monitoring and Care": `https://images.unsplash.com/photo-1551076805-e1869033e561${q}`,
    "Optimization of Therapy": `https://images.unsplash.com/photo-1584308666744-24d5c474f2ae${q}`,
    "Valve Implantation": `https://images.unsplash.com/photo-1530026405186-ed1ea400c3a4${q}`,
    "Children's Heart Surgery": `https://images.unsplash.com/photo-1622253692010-5550c9b4b98e${q}`,
    "Latest Equipment surgery": `https://images.unsplash.com/photo-1584515979956-d9f6e5d09982${q}`,
    "Heart Transplant Carefully": `https://images.unsplash.com/photo-1613478223719-2ab802602423${q}`,
    "Recognized Cardiologists": `https://images.unsplash.com/photo-1527613426441-4da17471b66d${q}`
};

export const BLOG_IMAGES: Record<string, string> = {
    "ಡಯಾಬಿಟಿಸ್ ಆರೈಕೆ: ನಿಮಗೆ ಅಗತ್ಯವಿರುವ 4 ಪ್ರಮುಖ ನಿಯಮಿತ ಪರೀಕ್ಷೆಗಳು": `https://images.unsplash.com/photo-1504813184591-015556c5c50f${q}`,
    "40 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಮಹಿಳೆಯರಿಗೆ ಅಗತ್ಯವಿರುವ ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷೆಗಳು": `https://images.unsplash.com/photo-1559839734-2b71ea197ec2${q}`,
    "40ರ ಹರೆಯದ ಪುರುಷರು ಎಷ್ಟು ಬಾರಿ ರಕ್ತ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಬೇಕು?": `https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca${q}`,
    "ಹಾರ್ಮೋನ್ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಮಹಿಳೆಯರ ಮೂಳೆ ಆರೋಗ್ಯದ ಮೇಲೆ ಅವುಗಳ ಪರಿಣಾಮ": `https://images.unsplash.com/photo-1447452001602-7090c7ab2db3${q}`,
    "ಇಂಟರ್ವೆನ್ಷನಲ್ ರೇಡಿಯಾಲಜಿಯಲ್ಲಿನ ಪ್ರಗತಿಗಳು: ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ": `https://images.unsplash.com/photo-1559757175-5700dde675bc${q}`,
    "ಮಕ್ಕಳಲ್ಲಿ ಥೈರಾಯ್ಡ್ ಆರೋಗ್ಯವನ್ನು ಬೆಂಬಲಿಸಲು ಪೌಷ್ಟಿಕಾಂಶದ ಸಲಹೆಗಳು": `https://images.unsplash.com/photo-1498837167922-ddd27525d352${q}`,
    "ಹೃದಯದ ಆರೋಗ್ಯದ ಮೇಲೆ ಒತ್ತಡದ ಪರಿಣಾಮ ಮತ್ತು ಅದನ್ನು ನಿರ್ವಹಿಸುವ ವಿಧಾನಗಳು": `https://images.unsplash.com/photo-1506126613408-eca07ce68773${q}`,
    "ದೀಪಾವಳಿ ನಂತರದ ಆರೋಗ್ಯ ಸಲಹೆಗಳು: ಶಿಫಾರಸು ಮಾಡಲಾದ ಆರೋಗ್ಯ ತಪಾಸಣೆಗಳು": `https://images.unsplash.com/photo-1516549655169-df83a0774514${q}`,
    "ಪಿಸಿಒಡಿ ನಿರ್ವಹಣೆಯಲ್ಲಿ ನಿಯಮಿತ ಆರೋಗ್ಯ ತಪಾಸಣೆಯ ಪ್ರಾಮುಖ್ಯತೆ: ಮಹಿಳೆಯರಿಗೆ ಮಾರ್ಗದರ್ಶಿ": `https://images.unsplash.com/photo-1576765608535-5f04d1e3f289${q}`,
    "ಚಳಿಗಾಲದ ಪೌಷ್ಟಿಕಾಂಶ: ನಿಮ್ಮನ್ನು ಆರೋಗ್ಯವಾಗಿ ಮತ್ತು ಶಕ್ತಿಯುತವಾಗಿಡುವ ಆಹಾರಗಳು": `https://images.unsplash.com/photo-1546069901-ba9599a7e63c${q}`,
    "ಆಸ್ತಮಾ ಮತ್ತು ಕಾಲೋಚಿತ ಬದಲಾವಣೆಗಳು: ವಿವಿಧ ಋತುಗಳಲ್ಲಿ ಅಲರ್ಜಿಗಳಿಗೆ ಸಿದ್ಧತೆ": `https://images.unsplash.com/photo-1588776814546-1ffcf47267a5${q}`,
    "ಹೃದಯದ ಆರೋಗ್ಯಕ್ಕಾಗಿ NT-proBNP ಪರೀಕ್ಷೆ: ಉದ್ದೇಶ, ವೆಚ್ಚ ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ತಿಳಿಯಿರಿ": `https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd${q}`,
    "ಮೆಡಿಸ್ಕ್ಯಾನ್ ಲ್ಯಾಬ್, ಕಲಬುರಗಿಯಲ್ಲಿ ಸುಲಭ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ವಿಟಮಿನ್ ಡಿ ತಪಾಸಣೆ": `https://images.unsplash.com/photo-1509967419530-da38b4704bc6${q}`,
    "ಡೆಂಗ್ಯೂ ಜ್ವರ - ಕಾರಣ, ಲಕ್ಷಣಗಳು ಮತ್ತು ಚಿಕಿತ್ಸೆ": `https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b${q}`,
    "Diabetes Care: The Top 4 Regular Tests You Need": `https://images.unsplash.com/photo-1504813184591-015556c5c50f${q}`,
    "Essential Medical Tests For Women Over 40": `https://images.unsplash.com/photo-1559839734-2b71ea197ec2${q}`,
    "When and How Often Should Men in Their 40s Get Blood Work": `https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca${q}`,
    "Hormonal Changes and Their Effect on Women’s Bone Health": `https://images.unsplash.com/photo-1447452001602-7090c7ab2db3${q}`,
    "Advancements in Interventional Radiology: A Comprehensive Guide": `https://images.unsplash.com/photo-1559757175-5700dde675bc${q}`,
    "Nutritional Considerations for Supporting Thyroid Health in Children": `https://images.unsplash.com/photo-1498837167922-ddd27525d352${q}`,
    "The Impact of Stress on Heart Health and How to Manage It": `https://images.unsplash.com/photo-1506126613408-eca07ce68773${q}`,
    "Post-Diwali Health Tips:Recommended Health Checkups": `https://images.unsplash.com/photo-1516549655169-df83a0774514${q}`,
    "The Importance of Regular Health Check-ups in Managing PCOD: A Guide for Women": `https://images.unsplash.com/photo-1576765608535-5f04d1e3f289${q}`,
    "Winter Nutrition: Foods to Keep You Healthy and Energized": `https://images.unsplash.com/photo-1546069901-ba9599a7e63c${q}`,
    "Asthma and Seasonal Changes: Preparing for Allergies in Different Seasons": `https://images.unsplash.com/photo-1588776814546-1ffcf47267a5${q}`,
    "NT-proBNP Test for Heart Health: Know the Purpose, Cost, and Results": `https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd${q}`,
    "Simple and Reliable Vitamin D Check at MediscanLab, Kalburgi": `https://images.unsplash.com/photo-1509967419530-da38b4704bc6${q}`
};

export const PRODUCT_IMAGES: Record<string, string> = {
    "Health Check Up": `https://images.unsplash.com/photo-1505751172876-fa1923c5c528${q}`,
    "Senior Citizen Health Checkup": `https://images.unsplash.com/photo-1506126613408-eca07ce68773${q}`,
    "Diabetic Health Checkup": `https://images.unsplash.com/photo-1504813184591-015556c5c50f${q}`,
    "Whole Body Checkup": `https://images.unsplash.com/photo-1579154204601-01588f351e67${q}`,
    "Executive Health Check Up": `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d${q}`,
    "Child Health Check Up": `https://images.unsplash.com/photo-1581594693702-fbdc51b2763b${q}`
};
