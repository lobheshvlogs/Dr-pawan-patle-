import {
  Profile,
  Education,
  ResearchItem,
  Article,
  Experience,
  Project,
  Achievement,
  Certificate,
  SkillCategory,
  TimelineMilestone,
  GalleryItem
} from '../types';

export const portfolioProfile: Profile = {
  name: "Dr. Pawan Patle",
  professionalTitle: "2nd-Year BAMS Medical Student",
  degreeBadge: "BAMS — Bachelor of Ayurvedic Medicine & Surgery",
  tagline: "Exploring classical Ayurvedic wisdom, Dravyaguna pharmacology, Roga Nidana diagnostics, and evidence-informed integrative healthcare.",
  shortBio: "Medical student pursuing Bachelor of Ayurvedic Medicine and Surgery with a dedicated focus on Dravyaguna (Ayurvedic Pharmacology), Roga Nidana (Pathology & Diagnostics), Rasa Shastra, and integrative clinical research.",
  fullBio: [
    "I am currently a second-year Bachelor of Ayurvedic Medicine and Surgery (BAMS) student dedicated to developing a deep understanding of human physiology (Kriya Sharir), anatomy (Rachana Sharir), Ayurvedic pharmacology (Dravyaguna), and clinical disease pathogenesis (Roga Nidana).",
    "During my 1st Professional BAMS year, I completed over 180 hours of hands-on human cadaveric dissection in Rachana Sharir (Anatomy), gaining structural clarity across osteology, neuroanatomy, myology, and the 107 classical Marma vital points. Concurrently in Kriya Sharir (Physiology), I investigated systemic organ physiology, hematology practicals, and Tridosha-Dhatu bio-energetics, earning First Class Distinction in University Board Examinations.",
    "My academic journey bridges classical Ayurvedic foundational principles—such as Tridosha equilibrium, Prakriti assessment, Dhatu nutrition, and Panchamahabhuta theory—with modern pathology, diagnostic investigations, and evidence-based pharmacology. Through hospital outpatient scribing, herbal garden taxonomy, and laboratory pharmacology, I continually challenge myself to think critically.",
    "Beyond textbook studies, I actively participate in community AYUSH health camps, botanical herbarium documentation, and literature reviews on phytochemistry and standardized formulations. My goal is to evolve into a compassionate, scientifically grounded Ayurvedic healthcare professional contributing meaningfully to patient wellness and integrative clinical research."
  ],
  currentYear: "2nd Professional Year",
  degree: "BAMS — Bachelor of Ayurvedic Medicine & Surgery",
  institution: "Chhattisgarh Ayurved Medical College",
  university: "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University",
  location: "Chhattisgarh, India",
  email: "patlepawan04@gmail.com",
  linkedin: "https://linkedin.com/in/pawankumar-med",
  instagram: "https://www.instagram.com/pawanpatle04/?hl=en",
  researchGate: "https://researchgate.net/profile/Pawan-Kumar-Med",
  twitter: "https://x.com/pawanpatle04",
  portraitImage: "/images/pawan_studio.jpg",
  heroStatement: "Dedicated to the rigorous study of Ayurvedic medicine, Dravyaguna pharmacology, Roga Nidana diagnostics, and patient-centered healing.",
  coreInterests: [
    "Dravyaguna Vijnana (Ayurvedic Pharmacology & Medicinal Plants)",
    "Roga Nidana & Vikriti Vijnana (Ayurvedic & Modern Pathology)",
    "Rasa Shastra & Bhaishajya Kalpana (Formulations & Phytochemistry)",
    "Prakriti & Nadi Pariksha Clinical Observational Diagnostics",
    "Integrative & Preventive Healthcare (Swasthavritta & Yoga)"
  ],
  futureGoals: {
    title: "Career Aspirations & Long-term Vision",
    description: "Aiming to complete the BAMS curriculum with academic distinction, followed by an intensive rotatory hospital internship, post-graduate clinical specialization (M.D. Ayurveda), and contributions to peer-reviewed integrative medical research.",
    focusAreas: [
      "Pursue Post-Graduate (M.D. Ayurveda) Specialization in Dravyaguna Vijnana or Kayachikitsa",
      "Establish an Evidence-Informed Integrative Outpatient Practice combining classical Nadi/Prakriti diagnostics with modern laboratory investigations",
      "Conduct Clinical Research on Chronic Metabolic, Gastrointestinal, and Skin Disorders in academic collaboration",
      "Promote Grassroots Community Health through Dinacharya, Ritucharya, and Preventive Herbal Education Drives"
    ]
  },
  stats: [
    { label: "Academic Phase", value: "2nd Year", detail: "BAMS Professional Student" },
    { label: "Clinical & Camp Hours", value: "350+ hrs", detail: "Observational OPD & Panchakarma" },
    { label: "Research Papers", value: "4 Papers", detail: "Preclinical reviews & working drafts" },
    { label: "CME & Workshops", value: "22+ Events", detail: "Dravyaguna, Roga Nidana & AYUSH" }
  ]
};

export const clinicalExposureCards = [
  {
    title: "Nadi Pariksha & Pulse Observation",
    focus: "Observational Learning",
    description: "Learning the art of radial pulse palpation under faculty supervision, observing subtle variations corresponding to Vata, Pitta, and Kapha states.",
    icon: "Activity"
  },
  {
    title: "Ashta-vidha & Dasha-vidha Pariksha",
    focus: "Classical Diagnostics",
    description: "Documenting 8-fold and 10-fold diagnostic inspections: Nadi (pulse), Mutra (urine), Mala (stool), Jihwa (tongue), Shabda (voice), Sparsha (skin), Druk (eyes), and Aakruti (physique).",
    icon: "ClipboardList"
  },
  {
    title: "Prakriti & Dosha Assessment",
    focus: "Individualized Totality",
    description: "Eliciting physical, physiological, and psychological traits to determine baseline Prakriti and current Vikriti under senior Vaidyas.",
    icon: "Eye"
  },
  {
    title: "Kayachikitsa OPD Scribing",
    focus: "High-Volume Intake",
    description: "Attending morning hospital outpatient clinics, assisting senior physicians in chronic disease documentation, dietetic intake, and follow-up logging.",
    icon: "Building2"
  },
  {
    title: "Panchakarma Observational Exposure",
    focus: "Therapeutic Procedures",
    description: "Observing Purvakarma protocols (Snehana, Swedana) and standardized monitoring during hospital inpatient detoxification procedures.",
    icon: "HeartHandshake"
  },
  {
    title: "Dravyaguna Herb Identification",
    focus: "Botanical Pharmacology",
    description: "Field identification of medicinal plants in institutional herbal gardens, verifying Rasa, Guna, Virya, Vipaka, and therapeutic karma.",
    icon: "BookOpen"
  },
  {
    title: "Bhaishajya Kalpana Formulations",
    focus: "Pharmacy Exposure",
    description: "Observing standard pharmaceutical preparations of Kwatha (decoctions), Churna (powders), Vati (tablets), and medicated Taila/Ghrita.",
    icon: "FileSpreadsheet"
  },
  {
    title: "Healthcare Ethics & Communication",
    focus: "Bedside Rapport",
    description: "Understanding patient autonomy, compassionate counseling, and respectful bedside communication tailored to diverse rural and urban patients.",
    icon: "ShieldAlert"
  }
];

export const academicWorkCards = [
  {
    title: "1st Year Human Cadaveric Dissection & Marma Mapping",
    category: "Rachana Sharir (Anatomy)",
    description: "Completed 180+ hours in anatomy dissection hall covering thoracic, abdominal, extremity, and head-neck regions, correlating modern anatomy with the 107 Marma vital points.",
    date: "1st Professional BAMS"
  },
  {
    title: "Tridosha & Hematology Laboratory Practicals",
    category: "Kriya Sharir (Physiology)",
    description: "Conducted hematological investigations (RBC, WBC, ESR, Blood Grouping, Bleeding & Clotting Time) and correlated modern systemic parameters with classical Prakriti assessment.",
    date: "1st Professional BAMS"
  },
  {
    title: "Seminar Presentations",
    category: "Classical Samhita",
    description: "Prepared and delivered student seminar presentations on Tridosha homeostasis, Dhatuposhana Nyaya, and Charaka Samhita Nidana Sthana.",
    date: "Semester 3 & 4"
  },
  {
    title: "Case Study Learning",
    category: "Clinical Case Analysis",
    description: "Documenting observational hospital cases of Amlapitta, Sandhivata, and Tamaka Shwasa to analyze Samprapti vighatana (reversal of pathogenesis).",
    date: "Monthly OPD Review"
  },
  {
    title: "Medicinal Flora Herbarium Project",
    category: "Dravyaguna Taxonomy",
    description: "Curated a certified academic herbarium of 75+ indigenous medicinal plants with botanical classification, vernacular names, and therapeutic actions.",
    date: "Academic Year 2024"
  },
  {
    title: "Research Interests",
    category: "Phytochemistry & Plausibility",
    description: "Reviewing indexed scientific literature on bioactive phytoconstituents, standardized herbal extracts, and preclinical anti-inflammatory mechanisms.",
    date: "Ongoing Study"
  },
  {
    title: "Workshops",
    category: "Practical Skill Camps",
    description: "Hands-on participation in Nadi Pariksha workshops, laboratory blood smear staining, and Basic Life Support (BLS) certification.",
    date: "2024 Series"
  },
  {
    title: "Academic Projects",
    category: "Digital Student Tools",
    description: "Developed comparative study charts for Dravyaguna medicinal plants and Roga Nidana differential diagnostic tables for student peer revision.",
    date: "Initiative 2024–2025"
  }
];

export const personalInterestsList = [
  {
    name: "Reading",
    detail: "Classical Ayurvedic treatises (Charaka & Sushruta Samhita), medical history, and integrative scientific journals.",
    icon: "BookOpen"
  },
  {
    name: "Botanical Photography",
    detail: "Documenting high-resolution macroscopic floral characteristics of medicinal plants in campus botanical gardens.",
    icon: "Camera"
  },
  {
    name: "Public Speaking",
    detail: "Participating in National Ayurveda Day inter-collegiate symposiums and student debate circles.",
    icon: "Mic"
  },
  {
    name: "Medicinal Field Treks & Travel",
    detail: "Participating in botanical excursions in forest sanctuaries and visiting community AYUSH primary health outposts.",
    icon: "Compass"
  },
  {
    name: "Yoga & Fitness",
    detail: "Practicing daily Pranayama, Surya Namaskar, and physical conditioning for mental clarity and physical stamina.",
    icon: "Dumbbell"
  },
  {
    name: "Continuous Learning",
    detail: "Engaging with open-access AYUSH research portals, clinical pharmacognosy podcasts, and pathology tutorials.",
    icon: "Sparkles"
  }
];

export const educationList: Education[] = [
  {
    id: "bams-2nd-year",
    degree: "Bachelor of Ayurvedic Medicine and Surgery (BAMS) — 2nd Professional Year",
    institution: "Chhattisgarh Ayurved Medical College",
    university: "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University",
    startYear: "2024",
    expectedGraduation: "2028",
    currentYear: "2nd Professional Year (In Progress)",
    location: "Chhattisgarh, India",
    honors: "Candidate in Good Academic Standing",
    description: "Para-clinical medical curriculum focusing on Dravyaguna (Ayurvedic Pharmacology), Roga Nidana (Pathology & Diagnostics), Rasa Shastra & Bhaishajya Kalpana (Formulations), Charaka Samhita Purvardha, and morning hospital OPD clinical postings.",
    coreSubjects: [
      "Dravyaguna Vijnana (Ayurvedic Pharmacology & Materia Medica)",
      "Roga Nidana & Vikriti Vijnana (Diagnostic Pathology & Etiopathogenesis)",
      "Rasa Shastra & Bhaishajya Kalpana (Pharmaceutical Formulations)",
      "Charaka Samhita — Purvardha (Classical Samhita Study)",
      "Swasthavritta & Yoga (Preventive Medicine & Social Regimens)"
    ]
  },
  {
    id: "bams-1st-year",
    degree: "1st Professional BAMS (First Year — Completed with First Class Distinction)",
    institution: "Chhattisgarh Ayurved Medical College",
    university: "Pt. Deendayal Upadhyay Memorial Health Sciences & Ayush University",
    startYear: "2023",
    expectedGraduation: "2024",
    currentYear: "Completed (First Class Distinction)",
    location: "Chhattisgarh, India",
    honors: "First Class Distinction in Kriya Sharir (Physiology) & Rachana Sharir (Anatomy)",
    description: "Foundational medical sciences curriculum with 180+ hours of cadaveric dissection in the dissection hall, systemic human physiology, classical Tridosha bioenergetics, Ashtanga Hridaya lifestyle medicine, and medical Sanskrit.",
    coreSubjects: [
      "Rachana Sharir (Human Gross Anatomy, Cadaveric Dissection, Embryology, Marma Sharir — 107 Vital Points)",
      "Kriya Sharir (Human Systemic Physiology, Tridosha Equilibrium, Sapta Dhatu Nutrition, Agni & Mala Metabolism)",
      "Ashtanga Hridaya (Sutrasthana, Dinacharya, Ritucharya & Preventive Regimens)",
      "Padartha Vijnana & Ayurveda Itihasa (Epistemology, Pramana Vada, Panchamahabhuta & History of Medicine)",
      "Sanskrit (Ayurvedic Medical Terminology, Grammar & Classical Shloka Recitation)"
    ]
  },
  {
    id: "pre-medical",
    degree: "Higher Secondary Education (Class XII)",
    institution: "Higher Secondary Pre-Medical Science",
    university: "State Board of Secondary Education",
    startYear: "2021",
    expectedGraduation: "2023",
    currentYear: "Completed",
    location: "Chhattisgarh, India",
    honors: "Merit Rank in Pre-Medical Entrance Examination",
    description: "Senior secondary education specializing in pre-medical biological sciences, chemistry, and physics.",
    coreSubjects: [
      "Human Biology & Botany",
      "Organic & Inorganic Chemistry",
      "Physics"
    ]
  }
];

export const experiencesList: Experience[] = [
  {
    id: "exp-1",
    title: "Student Clinical Observer & Scribe",
    organization: "Chhattisgarh Ayurved Medical College & Hospital",
    category: "Clinical Exposure",
    date: "August 2024 — Present",
    location: "Kayachikitsa OPD, Chhattisgarh",
    description: "Participating in morning outpatient rotations in Kayachikitsa OPD under supervising professors. Responsible for recording chief complaints, dietary history, Prakriti screening, and vital signs monitoring.",
    whatILearned: [
      "Assisted senior Vaidyas in scribing comprehensive case records for 120+ chronic outpatient visits",
      "Documented Ashta-vidha Pariksha parameters including tongue inspection, pulse observation, and physical constitution",
      "Observed clinical examinations for metabolic disorders, osteoarticular conditions, and chronic dermatological ailments",
      "Maintained ethical student confidentiality standards and patient rapport protocols"
    ],
    skillsLearned: ["Prakriti Assessment", "Ashta-vidha Pariksha", "Case Documentation", "Vital Signs Monitoring", "Bedside Communication"]
  },
  {
    id: "exp-2",
    title: "Dravyaguna Botanical & Herbarium Trainee",
    organization: "Institutional Herbal Garden & Pharmacognosy Lab",
    category: "Academic Workshop",
    date: "February 2024 — Present",
    location: "Chhattisgarh, India",
    description: "Engaged in hands-on taxonomic identification, seasonal collection, and herbarium mounting of indigenous medicinal plants under departmental botanists.",
    whatILearned: [
      "Cataloged 75+ medicinal plant species detailing morphology, habitat, and classical pharmacological properties",
      "Participated in botanical identification field visits across regional ecological reserves",
      "Assisted in preparing macroscopic and microscopic cross-sections of rhizomes, barks, and leaves"
    ],
    skillsLearned: ["Botanical Identification", "Herbarium Preservation", "Pharmacognosy Basics", "Ayurvedic Materia Medica"]
  }
];

export const researchList: ResearchItem[] = [
  {
    id: "res-1",
    slug: "phytochemical-profiles-adaptogenic-herbs",
    title: "Standardized Phytochemical & Pharmacological Profiles of Indigenous Adaptogenic Herbs",
    category: "Dravyaguna Pharmacology",
    date: "November 2024",
    status: "Under Peer Review",
    abstract: "A systematic compilation investigating the active phytochemical compounds and adaptogenic mechanisms of Withania somnifera (Ashwagandha), Tinospora cordifolia (Guduchi), and Ocimum sanctum (Tulsi). Explores correlations between classical Rasayana properties and modern immunomodulatory biomarkers.",
    methodology: "Secondary literature synthesis of indexed pharmacology trials, TLC/HPTLC standardization studies, and classical Samhita texts.",
    keywords: ["Dravyaguna", "Adaptogens", "Immunomodulation", "Phytochemistry", "Rasayana"],
    authorList: "Dr. Pawan Patle (Student Author), Faculty Mentor, Dept. of Dravyaguna Vijnana",
    journalOrSymposium: "Journal of Ayurveda & Integrative Medicine (Under Faculty Review)",
    findingsBrief: "Demonstrates consistent correlation between classical Rasayana karma and biochemical upregulation of antioxidant and macrophage activity.",
    featured: true
  },
  {
    id: "res-2",
    slug: "lifestyle-dietary-interventions-amlapitta",
    title: "Observational Case Series on Lifestyle & Dietary Interventions in Amlapitta (Hyperacidity)",
    category: "Kayachikitsa Clinical Study",
    date: "September 2024",
    status: "Symposium Presentation",
    abstract: "A documented observational case series tracing symptomatic relief in 25 hospital outpatient cases presenting with Amlapitta managed through Dinacharya dietary regulation, Pathya-Apathya compliance, and classical herbal formulations.",
    methodology: "Prospective student observational cohort documenting symptomatic scoring (Urodaha, Amlodgara) over 6 weeks.",
    keywords: ["Amlapitta", "Kayachikitsa", "Pathya-Apathya", "Observational Study"],
    authorList: "Dr. Pawan Patle (Student Scribe), Supervising Vaidya, Dept. of Kayachikitsa",
    journalOrSymposium: "State Ayurvedic Student Research Forum 2024",
    findingsBrief: "Identified high compliance with Pathya dietary timing as the single most critical factor in achieving sustained symptomatic remission.",
    featured: true
  }
];

export const achievementsList: Achievement[] = [
  {
    id: "ach-1",
    title: "1st Prize — Inter-Collegiate Ayurveda Day Research Presentation",
    issuer: "State University of Health Sciences",
    year: "2024",
    category: "Presentation",
    description: "Awarded top honor among 40+ student presentations for an analytical paper on 'Integrating Modern Diagnostics with Classical Roga Nidana Methodology'.",
    tier: "Gold"
  },
  {
    id: "ach-2",
    title: "University Distinction in Kriya Sharir & Rachana Sharir",
    issuer: "State University Examination Board",
    year: "2024",
    category: "Academic Honor",
    description: "Secured First Class Distinction in 1st Professional BAMS board examinations across Physiology and Anatomy.",
    tier: "Distinction"
  }
];

export const certificatesList: Certificate[] = [
  {
    id: "cert-1",
    title: "National Ayurveda Day Academic Presentation Award",
    issuer: "Ministry of AYUSH & State University of Health Sciences",
    date: "October 2024",
    credentialId: "AYUSH-NAD-2024-9912",
    category: "Academic Presentation",
    previewUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=900&auto=format&fit=crop",
    verified: true,
    skillsHighlighted: ["Roga Nidana Methodology", "Scientific Presentation", "Integrative Diagnostics", "Literature Review"]
  },
  {
    id: "cert-2",
    title: "Basic Life Support (BLS) for Healthcare Providers",
    issuer: "Cardio-Pulmonary Resuscitation & Emergency Council",
    date: "May 2024",
    credentialId: "BLS-MED-9941-IND",
    category: "Emergency & Clinical Skills",
    previewUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop",
    verified: true,
    skillsHighlighted: ["Adult & Pediatric CPR", "AED Operation", "Airway Management", "Foreign-Body Airway Obstruction"]
  },
  {
    id: "cert-3",
    title: "Dravyaguna Botanical Identification & Herbarium Workshop",
    issuer: "Department of Dravyaguna & State Medicinal Plants Board",
    date: "September 2024",
    credentialId: "DRAVYA-BIO-2024-031",
    category: "Botanical Pharmacology",
    previewUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop",
    verified: true,
    skillsHighlighted: ["Medicinal Plant Identification", "Herbarium Mounting", "Macroscopic Phytomorphology", "Rasa-Panchaka Verification"]
  },
  {
    id: "cert-4",
    title: "Good Clinical Practice (GCP) for AYUSH & Clinical Research",
    issuer: "National Institute on Clinical Research / AYUSH Research Council",
    date: "December 2024",
    credentialId: "GCP-AYUSH-2024-7731",
    category: "Clinical Research Ethics",
    previewUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop",
    verified: true,
    skillsHighlighted: ["ICH-GCP Guidelines", "Informed Consent Protocols", "Trial Safety Reporting", "Research Ethics"]
  }
];

export const clinicalDepartments = [
  {
    name: "Kayachikitsa Outpatient Department (OPD)",
    role: "Student Observer & Scribe",
    focus: "Internal medicine consultation, chronic lifestyle disorders, totality-based dietetic and herbal management."
  },
  {
    name: "Dravyaguna Herbal Garden & Herbarium",
    role: "Student Botanical Trainee",
    focus: "Live medicinal plant identification, macroscopic leaf/bark inspection, pharmacological taxonomy."
  },
  {
    name: "Panchakarma Department & Therapy Unit",
    role: "Observational Student",
    focus: "Observation of Snehana, Swedana, Shirodhara, and systemic therapeutic detoxification protocols."
  },
  {
    name: "Rasa Shastra & Bhaishajya Kalpana Pharmacy",
    role: "Pharmaceutical Trainee",
    focus: "Standardized formulation preparation: Kwatha decoctions, Churna processing, and medicated oils."
  },
  {
    name: "Roga Nidana Diagnostic & Pathology Lab",
    role: "Student Laboratory Trainee",
    focus: "Correlating modern hematology, complete blood counts, and urine tests with Ayurvedic etiopathogenesis."
  },
  {
    name: "Community Health & AYUSH Screening Camps",
    role: "Student Triage Coordinator",
    focus: "Vitals recording, Prakriti assessment counseling, and preventive Dinacharya health education in rural camps."
  }
];

export const skillCategoriesList: SkillCategory[] = [
  {
    title: "Ayurvedic / Academic Skills",
    description: "Core diagnostic, observational, and pharmacological methodologies acquired through university lectures and hospital OPDs.",
    skills: [
      "Prakriti Assessment",
      "Nadi Pariksha Observation",
      "Ashta-vidha Pariksha Scribing",
      "Dravyaguna Herb Identification",
      "Roga Nidana Diagnostics",
      "Research & Literature Review"
    ]
  },
  {
    title: "Professional Skills",
    description: "Interpersonal, organizational, and analytical competencies developed in medical teams and student councils.",
    skills: [
      "Communication",
      "Teamwork",
      "Presentation",
      "Time Management",
      "Critical Thinking"
    ]
  },
  {
    title: "Personal Attributes",
    description: "Intrinsic qualities guiding continuous professional growth and compassionate patient care.",
    skills: [
      "Curiosity",
      "Discipline",
      "Continuous Learning",
      "Empathy",
      "Adaptability"
    ]
  }
];

export const galleryList: GalleryItem[] = [
  {
    id: "gal-mountain",
    title: "Medicinal Plant Exploration & Highland Botanical Expedition",
    category: "College Campus",
    imageUrl: "/images/pawan_mountain_trek.jpg",
    date: "September 2024",
    location: "Highland Forest Sanctuary & Botanical Reserve",
    caption: "Dr. Pawan Patle during an intensive botanical exploration trek, surveying indigenous medicinal flora and highland micro-habitats for Dravyaguna research."
  },
  {
    id: "gal-1",
    title: "Clinical Scribing in Kayachikitsa Outpatient Department",
    category: "Hospital Postings",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    date: "October 2024",
    location: "Kayachikitsa OPD, College Hospital",
    caption: "Participating in outpatient consultation scribing, recording detailed patient histories, Prakriti evaluations, and vital signs under supervising faculty."
  },
  {
    id: "gal-2",
    title: "Campus Dravyaguna Botanical Herbal Garden",
    category: "College Campus",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    date: "September 2024",
    location: "Department of Dravyaguna Herbal Garden",
    caption: "Field identification of medicinal flora, studying Rasa, Guna, Virya, and Vipaka characteristics with batchmates and botanical mentors."
  },
  {
    id: "gal-3",
    title: "Roga Nidana Laboratory Diagnostic Workshop",
    category: "Workshops",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    date: "September 2024",
    location: "Central Diagnostic Pathology Laboratory",
    caption: "Supervised hands-on preparation of peripheral blood smears, differential counts, and correlating modern parameters with Ayurvedic pathology."
  },
  {
    id: "gal-4",
    title: "Presenting Student Paper on National Ayurveda Day",
    category: "Seminars & CME",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    date: "August 2024",
    location: "State Medical Conference Auditorium",
    caption: "Presenting student observational research on integrative diagnostics before academic faculty, senior Vaidyas, and inter-collegiate medical peers."
  },
  {
    id: "gal-5",
    title: "Rural Community AYUSH Screening Drive",
    category: "Medical Events",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    date: "November 2024",
    location: "Sub-District Primary Healthcare Outpost",
    caption: "Managing the student triage station, blood pressure recording, and community preventive healthcare education for over 600 rural residents."
  },
  {
    id: "gal-6",
    title: "Emergency Basic Life Support (BLS) Clinical Simulation",
    category: "Workshops",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    date: "May 2024",
    location: "Clinical Skills Simulation Lab",
    caption: "Cardiopulmonary resuscitation (CPR) maneuvers, automated external defibrillator (AED) operation, and airway management protocols."
  },
  {
    id: "gal-7",
    title: "Medicinal Field Excursion & Coastal Botanical Survey",
    category: "Medical Events",
    imageUrl: "/images/pawan_beach.jpg",
    date: "December 2024",
    location: "Coastal Botanical Ecology Sanctuary",
    caption: "Dr. Pawan Patle during an ecological field survey, exploring regional coastal biodiversity and flora beyond didactic hospital hours."
  },
  {
    id: "gal-8",
    title: "Campus Reflections & Evening Study Walk",
    category: "College Campus",
    imageUrl: "/images/pawan_sunset.jpg",
    date: "November 2024",
    location: "Campus Herbal Trail",
    caption: "Reflections on the medical journey and holistic life balance during evening campus study walks."
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2023",
    title: "Commenced BAMS Academic Journey",
    status: "Completed",
    summary: "Admitted to Chhattisgarh Ayurved Medical College. Intensive immersion in 1st Professional disciplines: Rachana Sharir (Anatomy cadaver dissection), Kriya Sharir (Physiology), and Sanskrit fundamentals.",
    keyHighlights: [
      "Completed 180+ hours of human cadaveric anatomical dissection in Rachana Sharir",
      "Achieved First Class Distinction in 1st Professional University Examinations",
      "Elected Academic Secretary of Student Welfare Council"
    ]
  },
  {
    year: "2024",
    title: "Dravyaguna, Roga Nidana & Clinical Exposure",
    status: "Completed",
    summary: "Began 2nd Professional curriculum focusing on Dravyaguna Vijnana (Pharmacology), Roga Nidana (Pathology), Rasa Shastra, and Charaka Samhita. Commenced observational OPD rotations.",
    keyHighlights: [
      "Curated 75+ medicinal plant specimens in certified botanical herbarium",
      "Awarded 1st prize at National Ayurveda Day student paper presentation",
      "Coordinated rural AYUSH preventive healthcare outreach camp serving 600+ patients"
    ]
  },
  {
    year: "2025",
    title: "Advanced Clinical Scribing & Field Studies",
    status: "Current Focus",
    summary: "Currently focused on deepening clinical diagnostics in Kayachikitsa OPD, mastering Ashta-vidha Pariksha documentation, and studying Charaka Samhita Purvardha.",
    keyHighlights: [
      "Authoring review paper on standardized adaptogenic phytocompounds",
      "Participating in regular hospital outpatient case documentation",
      "Preparing for 2nd Professional University Board Examinations"
    ]
  },
  {
    year: "2026",
    title: "Clinical Bedside Sciences & Surgery Observation",
    status: "Upcoming Milestone",
    summary: "Transition to 3rd Professional year: Shalya Tantra (Surgical disciplines & Ksharasutra observation), Shalakya Tantra (ENT & Ophthalmology), and Prasuti & Stri Roga.",
    keyHighlights: [
      "Direct inpatient bedside case evaluations and diagnostic rounds",
      "Surgical theatre observation and aseptic surgical protocols",
      "Community health epidemiological fieldwork"
    ]
  },
  {
    year: "2027 – 2028+",
    title: "Final Professional Year & 1-Year Rotatory Internship",
    status: "Upcoming Milestone",
    summary: "Culmination of didactic training followed by intensive 365-day compulsory hospital rotatory internship across all departments.",
    keyHighlights: [
      "Continuous casualty, OPD, and rural primary care rotational postings",
      "Independent patient management under supervising senior medical specialists",
      "Preparation for post-graduate clinical entrance examinations (AIAPGET)"
    ]
  }
];

export const articlesList: Article[] = [];
export const projectsList: Project[] = [];
