import React, { useState } from 'react';
import {
  Activity,
  Heart,
  Brain,
  Layers,
  Search,
  CheckCircle2,
  Stethoscope,
  ChevronRight,
  Shield,
  Eye,
  ArrowLeft,
  Sparkles,
  RotateCw,
  Compass,
  FileText,
  Volume2,
  VolumeX,
  Zap,
  Info
} from 'lucide-react';
import { useViewMode } from '../../context/ViewModeContext';
import { InteractiveHumanAnatomy } from '../anatomy/InteractiveHumanAnatomy';

interface BodyOrganDetail {
  id: string;
  name: string;
  sanskritName: string;
  category: 'neuro' | 'cardiorespiratory' | 'digestive' | 'urogenital' | 'musculoskeletal';
  position: { top: string; left: string }; // coordinates on body silhouette
  latinTerm: string;
  grossAnatomy: string;
  cadavericDissection: string;
  kriyaSharir: string;
  doshaAffiliation: string;
  srotas: string;
  marmaPoint: string;
  clinicalSignificance: string;
  physicalExamManeuver: string;
  commonPathologies: string[];
  keyVitals: { label: string; value: string }[];
}

const bodyOrgansData: BodyOrganDetail[] = [
  {
    id: 'brain',
    name: 'Cranium, Cerebrum & Mastulunga',
    sanskritName: 'Shirah & Mastulunga (Uttamanga)',
    category: 'neuro',
    position: { top: '8%', left: '50%' },
    latinTerm: 'Encephalon & Telencephalon',
    grossAnatomy: 'Comprises frontal, parietal, temporal, and occipital lobes encased in the bony calvarium, cushioned by cerebrospinal fluid and 3 meningeal layers (dura, arachnoid, pia mater).',
    cadavericDissection: 'Dissected human cranial vault, exposed dura mater with superior sagittal sinus, reflective falx cerebri, and identified 12 pairs of cranial nerves emerging from brainstem.',
    kriyaSharir: 'Considered "Uttamanga" (supreme organ). Seat of Prana Vata, Tarpaka Kapha, Sadhaka Pitta, and the mental faculties of Buddhi (intellect) and Smriti (memory).',
    doshaAffiliation: 'Prana Vata • Tarpaka Kapha • Sadhaka Pitta',
    srotas: 'Manovaha & Majjavaha Srotas',
    marmaPoint: 'Shira / Adhipati Marma (Sadhyo-Pranahara — Immediate Fatal on Injury)',
    clinicalSignificance: 'Central to evaluating cognitive fatigue, tension cephalea, migraine (Ardhavabhedaka), sleep cycle disturbances, and neurological deficits.',
    physicalExamManeuver: 'Comprehensive cranial nerve testing (CN I-XII), pupil reactivity to light, Romberg sign, and temporal artery tenderness.',
    commonPathologies: ['Ardhavabhedaka (Migraine)', 'Anidra (Chronic Insomnia)', 'Shiro-Roga (Cephalea)', 'Smriti-Bhramsha'],
    keyVitals: [
      { label: 'Cranial Nerves', value: '12 Pairs' },
      { label: 'Cerebral Blood Flow', value: '750 mL/min' },
      { label: 'Primary Marma', value: 'Adhipati' }
    ]
  },
  {
    id: 'larynx',
    name: 'Larynx, Trachea & Thyroid Gland',
    sanskritName: 'Kantha, Shwasa-Nali & Galaganda Sthana',
    category: 'cardiorespiratory',
    position: { top: '16%', left: '50%' },
    latinTerm: 'Larynx, Trachea & Glandula Thyroidea',
    grossAnatomy: 'Cartilaginous airway conduit (thyroid, cricoid, arytenoid cartilages) anterior to the esophagus, wrapped by bilateral thyroid lobes connected by an isthmus.',
    cadavericDissection: 'Reflected platysma and strap muscles (sternohyoid, omohyoid), identified recurrent laryngeal nerve in tracheoesophageal groove, and mobilized thyroid gland.',
    kriyaSharir: 'Seat of Udana Vata, which governs phonation (speech), vocal resonance, effort, memory recall, and upper airway immune defense (Bodhaka Kapha).',
    doshaAffiliation: 'Udana Vata • Bodhaka Kapha',
    srotas: 'Pranavaha Srotas',
    marmaPoint: 'Nila & Manya Marma (Vaikalyakara)',
    clinicalSignificance: 'Diagnostic site for thyroid goiter (Galaganda), vocal cord hoarseness (Swarabheda), pharyngitis, and stridor in airway obstruction.',
    physicalExamManeuver: 'Posterior inspection & bimanual thyroid palpation on swallowing; carotid pulse palpation and tracheal alignment check.',
    commonPathologies: ['Galaganda (Goiter / Thyroid dysfunction)', 'Swarabheda (Laryngeal Hoarseness)', 'Kanthashaluka (Tonsillitis)'],
    keyVitals: [
      { label: 'Tracheal Length', value: '10–12 cm' },
      { label: 'Thyroid Isthmus', value: '2nd–4th Tracheal Ring' },
      { label: 'Voice Control', value: 'Udana Vata' }
    ]
  },
  {
    id: 'heart',
    name: 'Heart & Central Cardiopulmonary Axis',
    sanskritName: 'Hridaya (Chetana & Ojo Sthana)',
    category: 'cardiorespiratory',
    position: { top: '24%', left: '45%' },
    latinTerm: 'Cor / Myocardium',
    grossAnatomy: 'Four-chambered muscular pump located in the middle mediastinum within fibrous pericardium, oriented obliquely with apex pointing towards 5th left intercostal space.',
    cadavericDissection: 'Opened pericardial sac, identified coronary sinus, anterior descending artery, traced right and left atria and ventricles, and examined tricuspid/bicuspid valves.',
    kriyaSharir: 'Considered the supreme home of Ojas (vital essence), Sadhaka Pitta, and Vyana Vata, responsible for systemic circulation of Rasa and Rakta throughout the 7 Dhatus.',
    doshaAffiliation: 'Vyana Vata • Sadhaka Pitta • Avalambaka Kapha',
    srotas: 'Rasavaha & Raktavaha Srotas (Origin Seat: Hridaya)',
    marmaPoint: 'Hridaya Marma (Maha-Marma, Sadhyo-Pranahara)',
    clinicalSignificance: 'Origin of systemic hemodynamics, blood pressure modulation, radial pulse (Nadi) formation, and emotional psycho-somatic equilibrium.',
    physicalExamManeuver: 'Inspection of precordium, palpation of apex beat in 5th intercostal mid-clavicular line, auscultation of 4 heart valve sounds (S1, S2), and Nadi Pariksha.',
    commonPathologies: ['Hridroga (Angina / Ischemic disease)', 'Hrit-drava (Palpitations)', 'Hypertension', 'Ojo-Kshaya'],
    keyVitals: [
      { label: 'Resting Pulse', value: '72 BPM' },
      { label: 'Cardiac Output', value: '5.0 L/min' },
      { label: 'Primary Marma', value: 'Hridaya' }
    ]
  },
  {
    id: 'lungs',
    name: 'Lungs & Bronchopulmonary Tree',
    sanskritName: 'Phupphusa & Pranavaha Srotas',
    category: 'cardiorespiratory',
    position: { top: '22%', left: '55%' },
    latinTerm: 'Pulmones (Right: 3 lobes, Left: 2 lobes)',
    grossAnatomy: 'Spongy, paired cone-shaped organs occupying pleural cavities on either side of mediastinum. Right lung has 3 lobes (superior, middle, inferior); left lung has 2 lobes with cardiac notch.',
    cadavericDissection: 'Dissected thoracic wall, costal pleura, hilum of both lungs exposing pulmonary artery, superior/inferior pulmonary veins, and main bronchus bifurcations.',
    kriyaSharir: 'Origin of Pranavaha Srotas (along with Hridaya). Governs respiration, oxygenation of cellular tissues, and balance of Udana Vata and Avalambaka Kapha.',
    doshaAffiliation: 'Prana Vata • Udana Vata • Avalambaka Kapha',
    srotas: 'Pranavaha Srotas (Root: Hridaya & Mahasrotas)',
    marmaPoint: 'Stanamula & Apastambha Marma',
    clinicalSignificance: 'Primary focus in Tamaka Shwasa (Bronchial Asthma), allergic bronchitis, chronic cough (Kasa), and chronic respiratory airway obstruction.',
    physicalExamManeuver: 'Chest expansion tape measurement, percussion over lung fields for resonant notes, and stethoscope auscultation for vesicular sounds vs. rhonchi/wheeze.',
    commonPathologies: ['Tamaka Shwasa (Bronchial Asthma)', 'Kasa (Chronic Bronchitis)', 'Rajayakshma (Pulmonary Tuberculosis)', 'Pleural Effusion'],
    keyVitals: [
      { label: 'Respiratory Rate', value: '16–18 /min' },
      { label: 'Vital Capacity', value: '4.5 L' },
      { label: 'Lung Segments', value: '18 Segments' }
    ]
  },
  {
    id: 'stomach',
    name: 'Stomach & Gastric Antrum',
    sanskritName: 'Amashaya (Jatharagni Sthana)',
    category: 'digestive',
    position: { top: '34%', left: '46%' },
    latinTerm: 'Gaster / Ventriculus',
    grossAnatomy: 'J-shaped muscular organ in upper left abdomen consisting of cardia, fundus, body, and pyloric antrum, suspended by greater and lesser omenta.',
    cadavericDissection: 'Dissected celiac trunk branches (left gastric, splenic, common hepatic), mobilized greater curvature, opened stomach lumen to examine rugal mucosal folds and pyloric valve.',
    kriyaSharir: 'Upper seat of digestion housing Jatharagni (primary digestive fire), Pachaka Pitta, and Kledaka Kapha (protective mucosal moisture). Site where initial digestion of Ahara occurs.',
    doshaAffiliation: 'Pachaka Pitta • Kledaka Kapha • Samana Vata',
    srotas: 'Annavaha Srotas (Root: Amashaya & Vamaparshva)',
    marmaPoint: 'Nabhi Marma & Amashaya Parishad',
    clinicalSignificance: 'Direct seat of Amlapitta (Hyperacidity / Gastritis), Agnimandya (indigestion), gastric ulcers, and production of toxic metabolic residue (Ama).',
    physicalExamManeuver: 'Epigastric light and deep palpation for tenderness or guarding; succussion splash test; assessing dietary timings and sour eructation frequency.',
    commonPathologies: ['Amlapitta (Acid Peptic Disease)', 'Agnimandya (Hypochlorhydria)', 'Parinama Shula (Peptic Ulcer)', 'Chhardi (Vomiting)'],
    keyVitals: [
      { label: 'Gastric pH', value: '1.5 – 2.5' },
      { label: 'Emptying Time', value: '2 – 4 hours' },
      { label: 'Primary Agni', value: 'Jatharagni' }
    ]
  },
  {
    id: 'liver',
    name: 'Liver & Biliary System',
    sanskritName: 'Yakrit & Pittashaya',
    category: 'digestive',
    position: { top: '33%', left: '57%' },
    latinTerm: 'Hepar & Vesica Biliaris',
    grossAnatomy: 'Largest visceral organ situated in right hypochondrium and epigastrium, subdivided into right, left, caudate, and quadrate lobes; gallbladder resides on visceral surface.',
    cadavericDissection: 'Exposed porta hepatis displaying hepatic artery, portal vein, and common bile duct; traced falciform ligament and dissected gallbladder bed.',
    kriyaSharir: 'Prime seat of Ranjaka Pitta responsible for transforming Rasa Dhatu into Rakta Dhatu (hematopoiesis support) and synthesizing digestive bile (Pitta).',
    doshaAffiliation: 'Ranjaka Pitta • Pachaka Pitta',
    srotas: 'Raktavaha Srotas (Root: Yakrit & Pleeha)',
    marmaPoint: 'Yakrit Marma & Parshva Sandhi',
    clinicalSignificance: 'Evaluated in Kamala (Jaundice), Yakrit-Vriddhi (hepatomegaly), non-alcoholic fatty liver, and chronic inflammatory skin diseases (Kushta).',
    physicalExamManeuver: 'Right costal margin palpation on deep inspiration, Murphy’s sign testing for acute cholecystitis, and inspecting conjunctiva for icterus.',
    commonPathologies: ['Kamala (Jaundice / Hepatitis)', 'Yakrit-Vriddhi (Hepatomegaly)', 'Kushta (Metabolic Dermatitis)', 'Pittashmari (Gallstones)'],
    keyVitals: [
      { label: 'Standard Weight', value: '1.4–1.6 kg' },
      { label: 'Portal Flow', value: '1000 mL/min' },
      { label: 'Dhatu Root', value: 'Raktavaha' }
    ]
  },
  {
    id: 'kidneys',
    name: 'Kidneys & Adrenals',
    sanskritName: 'Vrikka & Mutravaha Srotas',
    category: 'urogenital',
    position: { top: '42%', left: '44%' },
    latinTerm: 'Renes (Right & Left Kidney)',
    grossAnatomy: 'Retroperitoneal bean-shaped organs extending from T12 to L3 vertebrae, encased in renal capsule, perinephric fat, and renal fascia.',
    cadavericDissection: 'Mobilized ascending and descending colon to reveal retroperitoneal space; traced renal arteries from aorta, renal veins to IVC, and pelvis into ureter.',
    kriyaSharir: 'Formed from the essence of Meda (adipose) and Rakta Dhatus. Origin of Mutravaha Srotas, responsible for filtration of metabolic waste (Kitta) and water electrolyte balance.',
    doshaAffiliation: 'Apana Vata • Avalambaka Kapha',
    srotas: 'Mutravaha Srotas (Root: Vrikka & Basti)',
    marmaPoint: 'Kati-Taruna & Vrikka Sthana',
    clinicalSignificance: 'Central to evaluating urinary calculi (Ashmari), painful micturition (Mutrakricchra), renal hypertension, and chronic kidney disease.',
    physicalExamManeuver: 'Bimanual renal ballottement technique; Murphy’s renal punch test for costovertebral angle tenderness; and urine physical inspection (Mutra Pariksha).',
    commonPathologies: ['Ashmari (Renal Calculi)', 'Mutrakricchra (Dysuria / UTI)', 'Mutraghata (Urinary Retention)', 'Prameha (Metabolic Renal Disease)'],
    keyVitals: [
      { label: 'GFR (Standard)', value: '120 mL/min' },
      { label: 'Blood Flow', value: '20% of Cardiac Output' },
      { label: 'Srotas Root', value: 'Mutravaha' }
    ]
  },
  {
    id: 'colon',
    name: 'Large Intestine & Pelvic Colon',
    sanskritName: 'Pakvashaya (Mukhya Vata Sthana)',
    category: 'digestive',
    position: { top: '48%', left: '50%' },
    latinTerm: 'Colon (Caecum, Ascending, Transverse, Descending, Sigmoid)',
    grossAnatomy: 'Inverted U-shaped tubular segment (~1.5 m) framing small intestine, featuring characteristic teniae coli, haustrations, and appendices epiploicae.',
    cadavericDissection: 'Identified ileocecal valve and appendix at McBurney’s point; mobilized transverse mesocolon; verified mesenteric blood supply from superior and inferior mesenteric arteries.',
    kriyaSharir: 'The paramount anatomical seat of Vata Dosha (Pakvashaya-stho Vatah). Final site of water reabsorption, solid stool (Purisha) formation, and systemic neural tone.',
    doshaAffiliation: 'Apana Vata (Master of Excretion & Downward Movement)',
    srotas: 'Purishavaha Srotas (Root: Pakvashaya & Guda)',
    marmaPoint: 'Nabhi, Vasti, and Guda Marmas (Sadhyo-Pranahara)',
    clinicalSignificance: 'Governs all Vata-Vyadhi (systemic neurological, degenerative, and joint disorders). Prime anatomical target for Basti (medicated enema therapy).',
    physicalExamManeuver: 'Abdominal 4-quadrant auscultation for normo-active bowel sounds (5–30/min); deep palpation of sigmoid colon; assessing Koshtha (bowel habit).',
    commonPathologies: ['Vibandha (Chronic Constipation)', 'Grahani (Irritable Bowel Syndrome)', 'Atisara (Diarrhea)', 'Pakvashaya-Gata Vata'],
    keyVitals: [
      { label: 'Total Length', value: '~1.5 meters' },
      { label: 'Transit Time', value: '24–48 hours' },
      { label: 'Primary Dosha', value: 'Mukhya Vata Sthana' }
    ]
  },
  {
    id: 'spine',
    name: 'Vertebral Column & Spinal Cord',
    sanskritName: 'Kaseruka, Prishtha-Vamsha & Sushumna',
    category: 'neuro',
    position: { top: '38%', left: '50%' },
    latinTerm: 'Columna Vertebralis (33 Vertebrae) & Medulla Spinalis',
    grossAnatomy: 'Curved osteo-ligamentous pillar composed of 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, and 4 coccygeal vertebrae protecting the spinal cord within the vertebral canal.',
    cadavericDissection: 'Laminectomy of lumbar and thoracic vertebrae; incised dura mater to expose spinal cord, conus medullaris at L1/L2, cauda equina, and dorsal/ventral spinal nerve roots.',
    kriyaSharir: 'The central energy axis (Meru-Danda) housing Sushumna Nadi and 31 pairs of spinal nerves, transmitting motor and sensory signals governed by Vyana and Prana Vata.',
    doshaAffiliation: 'Asthi Dhatu • Majja Dhatu • Vyana Vata',
    srotas: 'Majjavaha Srotas & Asthivaha Srotas',
    marmaPoint: 'Katikataruna, Kukundara, and Nitamba Marmas',
    clinicalSignificance: 'Critical in low back pain (Kati-shula), Sciatica (Gridhrasi), cervical spondylosis (Manya-stambha), and disc herniations.',
    physicalExamManeuver: 'Straight Leg Raise (SLR / Lasegue sign for Sciatica), spinal range of motion (flexion, extension, lateral bend), and paraspinal tenderness palpation.',
    commonPathologies: ['Gridhrasi (Sciatica)', 'Kati-Graha (Lumbago / Spondylosis)', 'Manya-Stambha (Cervical Spondylosis)', 'Intervertebral Disc Prolapse'],
    keyVitals: [
      { label: 'Total Vertebrae', value: '33 (26 Pre-Sacral)' },
      { label: 'Spinal Nerves', value: '31 Pairs' },
      { label: 'Spinal Cord End', value: 'L1–L2 Disc' }
    ]
  },
  {
    id: 'knee',
    name: 'Knee Joint & Synovial Articulation',
    sanskritName: 'Janu Sandhi (Kora Sandhi)',
    category: 'musculoskeletal',
    position: { top: '72%', left: '46%' },
    latinTerm: 'Articulatio Genus (Femoro-Tibial & Patello-Femoral)',
    grossAnatomy: 'Largest and most complex synovial hinge joint of the human body, formed between femoral condyles, tibial plateau, and patella, stabilized by cruciate and collateral ligaments.',
    cadavericDissection: 'Dissected suprapatellar bursa, reflected patellar ligament, opened synovial capsule, identified anterior and posterior cruciate ligaments, medial/lateral menisci.',
    kriyaSharir: 'Governed by Shleshaka Kapha, which resides within joint cavities providing lubrication, nourishment to articular cartilage, and mitigating the friction of Vata movement.',
    doshaAffiliation: 'Shleshaka Kapha (Synovial Fluid) • Vata (Mobility)',
    srotas: 'Asthivaha & Majjavaha Srotas',
    marmaPoint: 'Janu Marma (Vaikalyakara — Disabling on Severe Trauma)',
    clinicalSignificance: 'The classic presentation site for Sandhivata (Osteoarthritis of the knee) characterized by pain on weight bearing, joint crepitus, and morning stiffness.',
    physicalExamManeuver: 'Palpation for joint crepitus during active flexion/extension, patellar tap test for effusion, anterior drawer test for ACL integrity, and goniometric flexion range.',
    commonPathologies: ['Sandhivata (Osteoarthritis)', 'Amavata (Rheumatoid Arthritis)', 'Kroshtuka-Shirsha (Synovial Effusion)', 'Meniscal Injury'],
    keyVitals: [
      { label: 'Joint Type', value: 'Bicondylar Synovial' },
      { label: 'Flexion ROM', value: '0° to 135°' },
      { label: 'Clinical Protocol', value: 'Janu Basti Therapy' }
    ]
  },
  {
    id: 'uterus',
    name: 'Uterus, Ovaries & Fallopian Tubes (Female Anatomy)',
    sanskritName: 'Garbhashaya & Artavavaha Srotas',
    category: 'urogenital',
    position: { top: '54%', left: '50%' },
    latinTerm: 'Uterus, Beeja-Granthi (Ovaria) & Beejavaha Srotas',
    grossAnatomy: 'Hollow, pyriform muscular organ located in the true pelvic cavity between urinary bladder and rectum, measuring ~7.5 x 5 x 2.5 cm, flanked by bilateral fallopian tubes and ovaries supported by broad and round ligaments.',
    cadavericDissection: 'Dissected female pelvis, identified rectouterine pouch of Douglas, vesicouterine pouch, traced ovarian vessels in infundibulopelvic ligament, and uterine artery crossing ureter.',
    kriyaSharir: 'Root of Artavavaha Srotas (Root: Garbhashaya and Artavavahi Dhamanis). Governed by Apana Vata for ovulatory discharge and cyclical Rajah-pravritti (menstruation).',
    doshaAffiliation: 'Apana Vata • Pitta (Artava is Agneya) • Kapha (Endometrial growth)',
    srotas: 'Artavavaha & Stanyavaha Srotas',
    marmaPoint: 'Yoni & Basti Marma (Sadhyo-Pranahara / Sadyo-Maranakara)',
    clinicalSignificance: 'Fundamental to Prasuti Tantra & Stri Roga. Key focus in Kashtartava (Dysmenorrhea), Asrigdara (Menorrhagia), PCOD/PCOS, and Vandhyatva (Infertility).',
    physicalExamManeuver: 'Bimanual pelvic palpation, lower abdominal suprapubic tenderness check, menstrual cycle interval/flow charting, and hormonal ultrasound correlation.',
    commonPathologies: ['Kashtartava (Dysmenorrhea)', 'Asrigdara (Dysfunctional Uterine Bleeding)', 'Granthi (Ovarian Cysts / PCOD)', 'Garbhashaya-Gata Vata'],
    keyVitals: [
      { label: 'Uterine Dimension', value: '7.5 × 5 × 2.5 cm' },
      { label: 'Menstrual Cycle', value: '28 ± 3 Days' },
      { label: 'Srotas Root', value: 'Artavavaha' }
    ]
  },
  {
    id: 'testes',
    name: 'Testes, Epididymis & Prostate Gland (Male Anatomy)',
    sanskritName: 'Vrishana, Sukravaha Srotas & Ashtheela',
    category: 'urogenital',
    position: { top: '56%', left: '50%' },
    latinTerm: 'Testes, Epididymis & Glandula Prostatica',
    grossAnatomy: 'Paired ovoid reproductive gonads suspended in the scrotum by spermatic cords; epididymis caps posterior border, leading via vas deferens through inguinal canals to the retroperitoneal prostate gland.',
    cadavericDissection: 'Dissected inguinal canal (deep and superficial rings, spermatic cord coverings), traced pampiniform plexus, testicular artery, ductus deferens, and sectioned prostate around prostatic urethra.',
    kriyaSharir: 'Root of Sukravaha Srotas (Root: Stana and Vrishana). Governs production and maturation of Sukra Dhatu, responsible for physical vigor, masculine virility, and systemic Ojas nourishment.',
    doshaAffiliation: 'Apana Vata • Saumya Sukra (Kapha dominant)',
    srotas: 'Sukravaha Srotas',
    marmaPoint: 'Vrishana Marma (Snayu Marma, Sadhyo-Pranahara on severe crush)',
    clinicalSignificance: 'Critical in evaluation of Oligospermia (Kshina-Sukra), Benign Prostatic Hyperplasia (Ashtheela / Mutraghata), testicular torsion, and male infertility.',
    physicalExamManeuver: 'Scrotal palpation for testicular consistency and epididymal tenderness, digital rectal examination (DRE) for prostatic lobar enlargement and sulcus check.',
    commonPathologies: ['Kshina-Sukra (Oligospermia)', 'Mutraghata (BPH / Urinary retention)', 'Vriddhi-Roga (Hydrocele / Hernia)', 'Klaibya (Male Subfertility)'],
    keyVitals: [
      { label: 'Testicular Volume', value: '15 – 25 mL' },
      { label: 'Sperm Density (Normal)', value: '>15 M/mL' },
      { label: 'Srotas Root', value: 'Sukravaha' }
    ]
  }
];

export const FullBodyAnatomyView: React.FC = () => {
  const { setViewMode } = useViewMode();
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [selectedOrganId, setSelectedOrganId] = useState<string>('heart');
  const [activeTab, setActiveTab] = useState<'anatomy' | 'kriya' | 'clinical' | 'marma'>('anatomy');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleGenderChange = (newGender: 'male' | 'female') => {
    setGender(newGender);
    if (newGender === 'female' && selectedOrganId === 'testes') {
      setSelectedOrganId('uterus');
    } else if (newGender === 'male' && selectedOrganId === 'uterus') {
      setSelectedOrganId('testes');
    }
  };

  const selectedOrgan = bodyOrgansData.find(o => o.id === selectedOrganId) || bodyOrgansData[2];

  const filteredOrgans = bodyOrgansData.filter((organ) => {
    if (gender === 'male' && organ.id === 'uterus') return false;
    if (gender === 'female' && organ.id === 'testes') return false;
    const matchesCategory = activeCategory === 'all' || organ.category === activeCategory;
    const matchesSearch = organ.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          organ.sanskritName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          organ.latinTerm.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#060B18] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden selection:bg-[#38A4F6] selection:text-white">
      
      {/* Ambient background glow orbs */}
      <div className="fixed top-20 -left-40 w-[600px] h-[600px] bg-[#0E86D4]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 -right-40 w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Top Command Bar & Mode Switcher */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0C1530]/90 backdrop-blur-xl border border-[#38A4F6]/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setViewMode('portfolio')}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#080E21] hover:bg-[#101B3A] border border-[#38A4F6]/30 text-xs font-semibold text-[#7CC4FA] hover:text-white transition-all shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio View</span>
            </button>

            <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
                BAMS 2nd-Year Clinical Command Station
              </span>
              <h1 className="font-editorial text-lg sm:text-xl font-medium text-white leading-tight">
                Full-Body Human Anatomy & Rachana Sharir Explorer
              </h1>
            </div>
          </div>

          {/* Active Controls: Gender Switcher & Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            {/* Gender Switcher Button */}
            <div className="flex items-center p-1 rounded-xl bg-[#080E21] border border-[#38A4F6]/40 shadow-inner">
              <button
                onClick={() => handleGenderChange('male')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all flex items-center space-x-1 ${
                  gender === 'male'
                    ? 'bg-[#0E86D4] text-white shadow-[0_0_12px_rgba(14,134,212,0.6)] border border-[#38A4F6]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>♂ Male Body</span>
              </button>
              <button
                onClick={() => handleGenderChange('female')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all flex items-center space-x-1 ${
                  gender === 'female'
                    ? 'bg-rose-500 text-white shadow-[0_0_12px_rgba(244,63,94,0.6)] border border-rose-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>♀ Female Body</span>
              </button>
            </div>

            {/* Active Mode Pill Switcher */}
            <div className="flex items-center space-x-2 p-1 rounded-xl bg-[#080E21] border border-[#38A4F6]/30">
              <button
                onClick={() => setViewMode('portfolio')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Portfolio Mode
              </button>
              <button
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0E86D4] text-white shadow-[0_0_15px_rgba(14,134,212,0.5)] border border-[#38A4F6]"
              >
                🫀 Full Body Mode
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Command Workspace */}
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Interactive 3D Human Anatomy Experience (Male & Female) */}
        <InteractiveHumanAnatomy
          gender={gender}
          onGenderChange={handleGenderChange}
        />

        {/* Section divider */}
        <div className="pt-6 border-t border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold mb-1">
            Clinical Examination & Organ Information Dossiers
          </span>
          <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white">
            Comprehensive Anatomy & Physiology Archive
          </h3>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
            {[
              { id: 'all', label: 'All Systems (12 Regions)' },
              { id: 'cardiorespiratory', label: 'Heart & Lungs' },
              { id: 'digestive', label: 'Gastrointestinal & Liver' },
              { id: 'neuro', label: 'Cranium & Spine' },
              { id: 'musculoskeletal', label: 'Joints & Skeleton' },
              { id: 'urogenital', label: 'Kidneys & Excretion' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#0E86D4] text-white border-[#38A4F6] shadow-md'
                    : 'bg-[#0C1530] text-slate-300 border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#7CC4FA] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search organ, Srotas, or bone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-[#0C1530] border border-[#38A4F6]/30 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#38A4F6]"
            />
          </div>
        </div>

        {/* 2-Column Split: Organ Index & Deep Medical Dossiers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Quick Organ Index Column */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="p-5 rounded-3xl bg-[#0C1530]/80 border border-[#38A4F6]/30 shadow-xl space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
                Selectable Anatomical Regions
              </span>
              <p className="text-xs text-slate-300">
                Click any anatomical region to display its cadaveric dissection observations, physiological functions, and clinical examination guidelines.
              </p>
            </div>

            {/* Quick Organ Selector Grid */}
            <div className="w-full grid grid-cols-3 gap-2">
              {filteredOrgans.map((organ) => {
                const isSelected = selectedOrganId === organ.id;
                return (
                  <button
                    key={organ.id}
                    onClick={() => setSelectedOrganId(organ.id)}
                    className={`p-2 rounded-xl text-left text-xs font-mono transition-all border ${
                      isSelected
                        ? 'bg-[#0E86D4] text-white border-[#38A4F6] shadow-md'
                        : 'bg-[#0C1530] text-slate-300 border-white/5 hover:bg-white/10'
                    }`}
                  >
                    <span className="block truncate font-semibold">{organ.name.split(' ')[0]}</span>
                    <span className="block truncate text-[9px] text-slate-300 opacity-80">{organ.sanskritName.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Comprehensive Clinical, Anatomical & Ayurvedic Dossier */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Active Organ Hero Header */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0D1B3E] via-[#0A142E] to-[#080E21] border-2 border-[#38A4F6]/40 shadow-2xl space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0E86D4]/20 border border-[#38A4F6]/40 text-xs font-mono font-semibold text-[#7CC4FA] uppercase tracking-wider">
                  Rachana & Kriya Sharir File
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Ref: {selectedOrgan.latinTerm}
                </span>
              </div>

              <div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-white">
                  {selectedOrgan.name}
                </h2>
                <p className="text-base font-editorial italic text-[#BAE0FD] mt-1">
                  Classical Sanskrit: {selectedOrgan.sanskritName}
                </p>
              </div>

              {/* Metrics Quick Strip */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-[#060B18]/70 border border-white/10 text-xs font-mono">
                {selectedOrgan.keyVitals.map((v, i) => (
                  <div key={i} className="text-left">
                    <span className="text-[10px] text-slate-400 block">{v.label}</span>
                    <span className="text-white font-semibold text-xs sm:text-sm">{v.value}</span>
                  </div>
                ))}
              </div>

              {/* Dossier Tabs Navigation */}
              <div className="flex items-center space-x-2 pt-2 border-t border-white/10 overflow-x-auto scrollbar-thin">
                {[
                  { id: 'anatomy', label: '1. Gross Anatomy & Cadaver Dissection' },
                  { id: 'kriya', label: '2. Ayurvedic Physiology (Kriya Sharir)' },
                  { id: 'clinical', label: '3. Clinical Pathology & OPD Exam' },
                  { id: 'marma', label: '4. Marma Points & Vital Trauma' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                      activeTab === tab.id
                        ? 'bg-[#0E86D4] text-white border-[#38A4F6] shadow-md'
                        : 'bg-[#080E21] text-slate-400 border-white/5 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Content */}
              <div className="pt-3 space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed min-h-[220px]">
                
                {activeTab === 'anatomy' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
                        Gross Morphological Architecture:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedOrgan.grossAnatomy}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#080E21] border border-emerald-500/20 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 block font-bold flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Cadaveric Dissection Observation (1st Year BAMS Distinction):</span>
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedOrgan.cadavericDissection}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'kriya' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
                        Physiological Function & Dhatu Homeostasis:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedOrgan.kriyaSharir}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#080E21] border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] font-bold block">
                          Tridosha Alignment
                        </span>
                        <p className="text-xs text-white font-medium">
                          {selectedOrgan.doshaAffiliation}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#080E21] border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] font-bold block">
                          Srotas (Micro-Circulatory Channels)
                        </span>
                        <p className="text-xs text-white font-medium">
                          {selectedOrgan.srotas}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'clinical' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-bold">
                        Hospital OPD Physical Examination Maneuver:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedOrgan.physicalExamManeuver}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                        Clinical & Disease Correlation (Roga Nidana):
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedOrgan.clinicalSignificance}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[10px] font-mono text-slate-400 self-center">Typical Pathologies:</span>
                      {selectedOrgan.commonPathologies.map((path, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[11px] text-[#BAE0FD] font-mono">
                          {path}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'marma' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-2xl bg-[#080E21] border border-red-500/20 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400 block font-bold flex items-center space-x-1.5">
                        <Shield className="w-4 h-4 text-rose-400" />
                        <span>Marma Classification & Vital Vulnerability:</span>
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        {selectedOrgan.marmaPoint}
                      </p>
                      <p className="text-[11px] text-slate-400 italic">
                        Classically detailed in Sushruta Samhita Sharira Sthana as an anatomical confluence of Mamsa (muscle), Sira (vessel), Snayu (ligament), Asthi (bone), and Sandhi (joint).
                      </p>
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Bottom Floating Return Button Banner */}
            <div className="p-5 rounded-2xl bg-[#0C1530] border border-[#38A4F6]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-editorial text-lg font-medium text-white">
                  Ready to return to the main portfolio?
                </h4>
                <p className="text-xs text-slate-300">
                  Switch back to explore Pawan's academic journey, clinical logs, certifications, and research.
                </p>
              </div>

              <button
                onClick={() => setViewMode('portfolio')}
                className="px-5 py-2.5 rounded-xl bg-[#0E86D4] hover:bg-[#0A6EB0] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(14,134,212,0.4)] whitespace-nowrap"
              >
                Switch to Portfolio Mode
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
