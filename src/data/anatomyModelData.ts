export interface AnatomicalStructureInfo {
  id: string;
  name: string;
  system: 'organs' | 'skeleton' | 'muscles';
  gender: 'both' | 'male' | 'female';
  description: string;
  location: string;
  function: string;
  cameraTarget: { y: number; distance: number };
}

export const ANATOMY_STRUCTURES: Record<string, AnatomicalStructureInfo> = {
  // ==================== ORGANS ====================
  brain: {
    id: 'brain',
    name: 'Brain',
    system: 'organs',
    gender: 'both',
    description: 'Central organ of the human nervous system composed of billions of interconnected neurons and glial cells.',
    location: 'Cranial cavity within the skull',
    function: 'Controls motor functions, processes sensory information, regulates homeostasis, and coordinates cognitive thought.',
    cameraTarget: { y: 1.88, distance: 2.2 }
  },
  heart: {
    id: 'heart',
    name: 'Heart',
    system: 'organs',
    gender: 'both',
    description: 'Muscular organ responsible for pumping oxygenated and deoxygenated blood through the circulatory network.',
    location: 'Thoracic cavity within middle mediastinum, tilted leftward',
    function: 'Maintains systemic arterial perfusion and pulmonary gas exchange circulation.',
    cameraTarget: { y: 1.18, distance: 2.3 }
  },
  lungs: {
    id: 'lungs',
    name: 'Lungs',
    system: 'organs',
    gender: 'both',
    description: 'Paired cone-shaped respiratory organs divided into distinct anatomical lobes (right: 3, left: 2).',
    location: 'Thoracic cavity on both sides of the mediastinum',
    function: 'Facilitates alveolar gas exchange by absorbing oxygen into capillary blood and discharging carbon dioxide.',
    cameraTarget: { y: 1.2, distance: 2.5 }
  },
  liver: {
    id: 'liver',
    name: 'Liver',
    system: 'organs',
    gender: 'both',
    description: 'Largest internal solid visceral organ and primary metabolic processing center.',
    location: 'Right upper quadrant of abdominal cavity beneath the diaphragm',
    function: 'Synthesizes bile, metabolizes macronutrients, detoxifies biochemical compounds, and stores glycogen.',
    cameraTarget: { y: 0.88, distance: 2.2 }
  },
  stomach: {
    id: 'stomach',
    name: 'Stomach',
    system: 'organs',
    gender: 'both',
    description: 'J-shaped hollow muscular organ positioned between esophagus and duodenum.',
    location: 'Left upper quadrant and epigastric region of abdomen',
    function: 'Mechanically churns ingested food and initiates protein enzymatic breakdown via gastric acid and pepsin.',
    cameraTarget: { y: 0.82, distance: 2.2 }
  },
  kidneys: {
    id: 'kidneys',
    name: 'Kidneys',
    system: 'organs',
    gender: 'both',
    description: 'Paired retroperitoneal bean-shaped organs containing millions of functional filtration units called nephrons.',
    location: 'Posterior abdominal wall adjacent to vertebral column (T12–L3)',
    function: 'Filters metabolic nitrogenous waste from blood, regulates fluid-electrolyte balance, and modulates blood pressure.',
    cameraTarget: { y: 0.68, distance: 2.2 }
  },
  intestines: {
    id: 'intestines',
    name: 'Intestines',
    system: 'organs',
    gender: 'both',
    description: 'Extensive tubular digestive tract comprising small intestine (jejunum/ileum) and large intestine (colon).',
    location: 'Mid-to-lower abdominal cavity and pelvic cavity',
    function: 'Absorbs essential nutrients, reabsorbs water and electrolytes, and consolidates solid digestive residue for excretion.',
    cameraTarget: { y: 0.45, distance: 2.4 }
  },
  uterus: {
    id: 'uterus',
    name: 'Uterus & Reproductive Tract',
    system: 'organs',
    gender: 'female',
    description: 'Thick-walled hollow muscular pelvic organ flanked by bilateral fallopian tubes and ovaries.',
    location: 'Female true pelvis between urinary bladder and rectum',
    function: 'Houses and nourishes the developing embryo and fetus during gestation; sheds endometrial lining during menstruation.',
    cameraTarget: { y: 0.28, distance: 2.0 }
  },
  prostate: {
    id: 'prostate',
    name: 'Prostate & Male Reproductive Structures',
    system: 'organs',
    gender: 'male',
    description: 'Exocrine gland surrounding the proximal male urethra inferior to the bladder base.',
    location: 'Male pelvic cavity inferior to the urinary bladder',
    function: 'Secretes alkaline seminal fluid that nourishes and protects spermatozoa during reproductive transit.',
    cameraTarget: { y: 0.22, distance: 2.0 }
  },

  // ==================== SKELETON ====================
  skull: {
    id: 'skull',
    name: 'Skull',
    system: 'skeleton',
    gender: 'both',
    description: 'Rigid bony framework composed of neurocranium (8 bones) and viscerocranium facial skeleton (14 bones).',
    location: 'Superior apex of axial skeleton',
    function: 'Protects the brain and cranial nerves, houses sensory receptors (vision, hearing, olfaction), and supports facial muscles.',
    cameraTarget: { y: 1.88, distance: 2.2 }
  },
  spine: {
    id: 'spine',
    name: 'Spine (Vertebral Column)',
    system: 'skeleton',
    gender: 'both',
    description: 'Articulated osteo-cartilaginous pillar consisting of 33 vertebrae (cervical, thoracic, lumbar, sacral, coccygeal).',
    location: 'Posterior midline extending from base of skull to pelvis',
    function: 'Houses and shields the spinal cord, sustains axial body weight, and enables multi-planar trunk movement.',
    cameraTarget: { y: 1.0, distance: 3.0 }
  },
  ribcage: {
    id: 'ribcage',
    name: 'Rib Cage & Sternum',
    system: 'skeleton',
    gender: 'both',
    description: 'Semi-rigid bony-cartilaginous basket formed by 12 pairs of ribs, costal cartilages, and anterior sternum.',
    location: 'Thoracic region encasing thoracic cavity',
    function: 'Shields heart and lungs against mechanical trauma while expanding dynamically during respiratory inhalation.',
    cameraTarget: { y: 1.15, distance: 2.5 }
  },
  pelvis: {
    id: 'pelvis',
    name: 'Pelvic Girdle',
    system: 'skeleton',
    gender: 'both',
    description: 'Basin-shaped ring of bones connecting spine to lower limbs, comprising ilium, ischium, pubis, and sacrum.',
    location: 'Base of trunk between abdomen and thighs',
    function: 'Transmits upper-body weight to lower extremities and provides structural protection for pelvic visceral organs.',
    cameraTarget: { y: 0.32, distance: 2.2 }
  },
  clavicle: {
    id: 'clavicle',
    name: 'Clavicle & Shoulder Girdle',
    system: 'skeleton',
    gender: 'both',
    description: 'S-shaped long bone bridging the sternum to the scapula, anchoring the upper extremity to the axial skeleton.',
    location: 'Antero-superior root of neck and shoulder',
    function: 'Acts as a strut to hold the upper limb away from the thorax for maximal glenohumeral range of motion.',
    cameraTarget: { y: 1.45, distance: 2.0 }
  },
  femur: {
    id: 'femur',
    name: 'Femur (Thigh Bone)',
    system: 'skeleton',
    gender: 'both',
    description: 'Longest, heaviest, and strongest tubular bone in the human body.',
    location: 'Lower extremity extending from acetabulum of hip to knee joint',
    function: 'Supports total body mass during standing, walking, and running; anchors major locomotion muscle groups.',
    cameraTarget: { y: -0.3, distance: 2.5 }
  },
  knee: {
    id: 'knee',
    name: 'Knee Joint & Patella',
    system: 'skeleton',
    gender: 'both',
    description: 'Bicondylar synovial hinge joint formed by distal femur, proximal tibia, and the patella sesamoid bone.',
    location: 'Midway along lower limb articulation',
    function: 'Permits leg flexion and extension during ambulation; absorbs high-impact compressive weight forces.',
    cameraTarget: { y: -0.75, distance: 1.8 }
  },
  tibia: {
    id: 'tibia',
    name: 'Tibia & Fibula',
    system: 'skeleton',
    gender: 'both',
    description: 'Paired parallel bones forming the skeletal foundation of the lower leg.',
    location: 'Lower leg between knee joint and talus of the ankle',
    function: 'Tibia bears principal compressive weight; fibula provides essential lateral ankle stabilization and muscle anchors.',
    cameraTarget: { y: -1.3, distance: 2.2 }
  },

  // ==================== MUSCLES ====================
  pectoralis: {
    id: 'pectoralis',
    name: 'Pectoralis Major',
    system: 'muscles',
    gender: 'both',
    description: 'Thick, fan-shaped convergent skeletal muscle forming the bulk of the anterior chest wall.',
    location: 'Anterior thoracic wall beneath breast tissue',
    function: 'Flexes, adducts, and internally rotates the humerus at the shoulder joint.',
    cameraTarget: { y: 1.25, distance: 2.2 }
  },
  deltoid: {
    id: 'deltoid',
    name: 'Deltoid Muscle',
    system: 'muscles',
    gender: 'both',
    description: 'Triangular multipennate muscle capping the glenohumeral shoulder articulation.',
    location: 'Superior aspect of shoulder over humeral head',
    function: 'Primary abductor of the arm; assists in humeral flexion, extension, and stabilization during limb elevation.',
    cameraTarget: { y: 1.35, distance: 2.2 }
  },
  biceps: {
    id: 'biceps',
    name: 'Biceps Brachii',
    system: 'muscles',
    gender: 'both',
    description: 'Two-headed anterior arm muscle spanning across both shoulder and elbow joints.',
    location: 'Anterior compartment of upper arm',
    function: 'Powerful supinator of the forearm and flexor of the elbow joint.',
    cameraTarget: { y: 0.95, distance: 2.2 }
  },
  abdominals: {
    id: 'abdominals',
    name: 'Rectus Abdominis & Core Muscles',
    system: 'muscles',
    gender: 'both',
    description: 'Paired vertical strap muscle encased within the rectus sheath, divided by fibrous tendinous intersections.',
    location: 'Anterior abdominal wall spanning from pubic crest to xiphoid process',
    function: 'Flexes the lumbar spine, stabilizes trunk posture, and compresses intra-abdominal viscera during respiration.',
    cameraTarget: { y: 0.65, distance: 2.2 }
  },
  quadriceps: {
    id: 'quadriceps',
    name: 'Quadriceps Femoris',
    system: 'muscles',
    gender: 'both',
    description: 'Massive four-headed muscle group comprising rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius.',
    location: 'Anterior compartment of the thigh',
    function: 'Primary extensor of the knee joint; essential for standing upright, climbing stairs, jumping, and running.',
    cameraTarget: { y: -0.3, distance: 2.5 }
  },
  calves: {
    id: 'calves',
    name: 'Gastrocnemius & Soleus (Calf Muscles)',
    system: 'muscles',
    gender: 'both',
    description: 'Superficial two-headed muscle together with the deep soleus converging into the calcaneal (Achilles) tendon.',
    location: 'Posterior compartment of the lower leg',
    function: 'Plantarflexes the foot at the ankle joint; propels forward movement during walking, running, and athletic push-off.',
    cameraTarget: { y: -1.25, distance: 2.2 }
  }
};
