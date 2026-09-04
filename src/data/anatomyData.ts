export type AnatomicalSystem =
  | 'ALL'
  | 'SKELETAL'
  | 'MUSCULAR'
  | 'NERVOUS'
  | 'ARTERIAL'
  | 'VENOUS'
  | 'RESPIRATORY'
  | 'DIGESTIVE'
  | 'ENDOCRINE'
  | 'URINARY'
  | 'REPRODUCTIVE'
  | 'INTEGUMENTARY';

export type CutawayMode = 'Surface' | 'Muscular' | 'Internal' | 'Skeleton';

export type LayerVisibility = 'Skin' | 'Muscles' | 'Organs' | 'Skeleton' | 'Vessels' | 'Nerves' | 'All';

export interface AnatomicalStructure {
  id: string;
  name: string;
  system: AnatomicalSystem;
  layer: 'Skin' | 'Muscles' | 'Organs' | 'Skeleton' | 'Vessels' | 'Nerves';
  gender: 'both' | 'male' | 'female';
  description: string;
  location: string;
  function: string;
  modelNodeNames: string[];
  cameraTarget: { y: number; distance: number };
}

export const ANATOMY_CONFIG = {
  male: {
    id: 'male',
    label: 'MALE',
    assetPath: '/anatomy/male/body.glb',
    description: 'Complete Male Anatomical Model'
  },
  female: {
    id: 'female',
    label: 'FEMALE',
    assetPath: '/anatomy/female/body.glb',
    description: 'Complete Female Anatomical Model'
  }
};

export const ANATOMY_SYSTEMS_LIST: { id: AnatomicalSystem; label: string; available: boolean }[] = [
  { id: 'ALL', label: 'ALL', available: true },
  { id: 'SKELETAL', label: 'SKELETAL', available: true },
  { id: 'MUSCULAR', label: 'MUSCULAR', available: true },
  { id: 'NERVOUS', label: 'NERVOUS', available: true },
  { id: 'ARTERIAL', label: 'ARTERIAL', available: true },
  { id: 'VENOUS', label: 'VENOUS', available: true },
  { id: 'RESPIRATORY', label: 'RESPIRATORY', available: true },
  { id: 'DIGESTIVE', label: 'DIGESTIVE', available: true },
  { id: 'ENDOCRINE', label: 'ENDOCRINE', available: true },
  { id: 'URINARY', label: 'URINARY', available: true },
  { id: 'REPRODUCTIVE', label: 'REPRODUCTIVE', available: true },
  { id: 'INTEGUMENTARY', label: 'INTEGUMENTARY', available: true }
];

export const ANATOMICAL_STRUCTURES_DATA: Record<string, AnatomicalStructure> = {
  heart: {
    id: 'heart',
    name: 'HEART',
    system: 'ARTERIAL',
    layer: 'Organs',
    gender: 'both',
    description: 'A muscular organ that pumps blood throughout the body.',
    location: 'Thoracic cavity',
    function: 'Circulation of blood',
    modelNodeNames: ['Heart_Mesh', 'heart', 'Myocardium', 'Ventride_Left', 'Ventride_Right'],
    cameraTarget: { y: 1.18, distance: 2.2 }
  },
  brain: {
    id: 'brain',
    name: 'BRAIN',
    system: 'NERVOUS',
    layer: 'Organs',
    gender: 'both',
    description: 'The central organ of the human nervous system that coordinates sensory perception and motor action.',
    location: 'Cranial cavity within the skull',
    function: 'Regulation of physiological homeostasis, cognition, sensory integration, and neural command',
    modelNodeNames: ['Brain_Mesh', 'brain', 'Cerebrum', 'Cerebellum', 'Brainstem'],
    cameraTarget: { y: 1.9, distance: 2.1 }
  },
  lungs: {
    id: 'lungs',
    name: 'LUNGS',
    system: 'RESPIRATORY',
    layer: 'Organs',
    gender: 'both',
    description: 'Paired spongy respiratory organs separated into distinct anatomical lobes.',
    location: 'Thoracic cavity flanking the middle mediastinum',
    function: 'Gas exchange through alveolar capillary diffusion, absorbing oxygen and releasing carbon dioxide',
    modelNodeNames: ['Lungs_Mesh', 'lungs', 'Pulmones', 'Lung_Left', 'Lung_Right'],
    cameraTarget: { y: 1.2, distance: 2.4 }
  },
  liver: {
    id: 'liver',
    name: 'LIVER',
    system: 'DIGESTIVE',
    layer: 'Organs',
    gender: 'both',
    description: 'The largest solid internal visceral organ, consisting of right and left major lobes.',
    location: 'Right upper quadrant of the abdominal cavity beneath the diaphragm',
    function: 'Synthesis of bile, metabolic detoxification, nutrient processing, and biochemical storage',
    modelNodeNames: ['Liver_Mesh', 'liver', 'Hepar', 'Gallbladder'],
    cameraTarget: { y: 0.88, distance: 2.1 }
  },
  stomach: {
    id: 'stomach',
    name: 'STOMACH',
    system: 'DIGESTIVE',
    layer: 'Organs',
    gender: 'both',
    description: 'J-shaped hollow muscular organ positioned along the digestive tract.',
    location: 'Left upper quadrant and epigastric region of the abdomen',
    function: 'Mechanical churning of ingested food and chemical digestion via hydrochloric acid and pepsin',
    modelNodeNames: ['Stomach_Mesh', 'stomach', 'Gaster', 'Ventriculus'],
    cameraTarget: { y: 0.82, distance: 2.1 }
  },
  kidneys: {
    id: 'kidneys',
    name: 'KIDNEYS',
    system: 'URINARY',
    layer: 'Organs',
    gender: 'both',
    description: 'Paired bean-shaped retroperitoneal organs packed with functional filtration nephrons.',
    location: 'Posterior abdominal wall adjacent to vertebral column (T12 to L3)',
    function: 'Filtration of metabolic waste products, fluid-electrolyte balance, and systemic blood pressure regulation',
    modelNodeNames: ['Kidneys_Mesh', 'kidneys', 'Renes', 'Kidney_Left', 'Kidney_Right'],
    cameraTarget: { y: 0.68, distance: 2.1 }
  },
  small_intestine: {
    id: 'small_intestine',
    name: 'SMALL INTESTINE',
    system: 'DIGESTIVE',
    layer: 'Organs',
    gender: 'both',
    description: 'Coiled tubular digestive segment comprising duodenum, jejunum, and ileum.',
    location: 'Central and lower abdominal cavity',
    function: 'Primary enzymatic digestion and absorption of nutrients, vitamins, and minerals into mesenteric circulation',
    modelNodeNames: ['Small_Intestine_Mesh', 'small_intestine', 'Jejunum', 'Ileum'],
    cameraTarget: { y: 0.52, distance: 2.2 }
  },
  large_intestine: {
    id: 'large_intestine',
    name: 'LARGE INTESTINE',
    system: 'DIGESTIVE',
    layer: 'Organs',
    gender: 'both',
    description: 'Tubular inverted U-shaped colon surrounding the small intestine.',
    location: 'Periphery of the abdominal cavity extending into the pelvis',
    function: 'Absorption of water, electrolytes, microbial fermentation, and formation of solid waste',
    modelNodeNames: ['Large_Intestine_Mesh', 'large_intestine', 'Colon', 'Caecum', 'Rectum'],
    cameraTarget: { y: 0.42, distance: 2.3 }
  },
  spleen: {
    id: 'spleen',
    name: 'SPLEEN',
    system: 'ENDOCRINE',
    layer: 'Organs',
    gender: 'both',
    description: 'Soft, purplish secondary lymphoid and hematological organ.',
    location: 'Left hypochondriac region of the abdomen posterior to stomach',
    function: 'Filtration of blood, removal of senescent erythrocytes, and immune defense against encapsulated pathogens',
    modelNodeNames: ['Spleen_Mesh', 'spleen', 'Lien'],
    cameraTarget: { y: 0.85, distance: 2.0 }
  },
  pancreas: {
    id: 'pancreas',
    name: 'PANCREAS',
    system: 'ENDOCRINE',
    layer: 'Organs',
    gender: 'both',
    description: 'Elongated retroperitoneal gland with exocrine and endocrine functional tissue.',
    location: 'Epigastrium and left hypochondrium posterior to the stomach stomach bed',
    function: 'Secretion of digestive pancreatic enzymes and endocrine regulation of glucose via insulin and glucagon',
    modelNodeNames: ['Pancreas_Mesh', 'pancreas'],
    cameraTarget: { y: 0.78, distance: 2.0 }
  },
  spinal_cord: {
    id: 'spinal_cord',
    name: 'SPINAL CORD',
    system: 'NERVOUS',
    layer: 'Nerves',
    gender: 'both',
    description: 'Cylindrical bundle of nerve fibers and associated tissue enclosed within the vertebral column.',
    location: 'Vertebral canal extending from foramen magnum to L1-L2 vertebra',
    function: 'Transmission of neural signals between brain and peripheral body; reflex arc coordination',
    modelNodeNames: ['Spinal_Cord_Mesh', 'spinal_cord', 'Medulla_Spinalis'],
    cameraTarget: { y: 1.05, distance: 2.6 }
  },
  skull: {
    id: 'skull',
    name: 'SKULL',
    system: 'SKELETAL',
    layer: 'Skeleton',
    gender: 'both',
    description: 'Rigid bony structure composed of neurocranium and facial viscerocranium bones.',
    location: 'Superior apex of axial skeleton',
    function: 'Protects the brain and cranial nerve roots; supports facial musculature and sensory organs',
    modelNodeNames: ['Skull_Mesh', 'skull', 'Cranium', 'Mandible'],
    cameraTarget: { y: 1.88, distance: 2.0 }
  },
  rib_cage: {
    id: 'rib_cage',
    name: 'RIB CAGE',
    system: 'SKELETAL',
    layer: 'Skeleton',
    gender: 'both',
    description: 'Osteo-cartilaginous framework comprising 12 pairs of ribs, costal cartilages, and the sternum.',
    location: 'Thoracic region surrounding the chest cavity',
    function: 'Shields heart and lungs from mechanical trauma while facilitating respiratory bellows expansion',
    modelNodeNames: ['Rib_Cage_Mesh', 'rib_cage', 'Ribs', 'Sternum', 'Costae'],
    cameraTarget: { y: 1.15, distance: 2.4 }
  },
  pelvis: {
    id: 'pelvis',
    name: 'PELVIS',
    system: 'SKELETAL',
    layer: 'Skeleton',
    gender: 'both',
    description: 'Basin-shaped bony ring connecting the axial vertebral column to the lower limbs.',
    location: 'Base of trunk between abdomen and thighs',
    function: 'Transfers upper body weight to legs and shelters pelvic viscera (urinary and reproductive organs)',
    modelNodeNames: ['Pelvis_Mesh', 'pelvis', 'Ilium', 'Ischium', 'Pubis', 'Sacrum'],
    cameraTarget: { y: 0.32, distance: 2.2 }
  },
  major_arteries: {
    id: 'major_arteries',
    name: 'MAJOR ARTERIES',
    system: 'ARTERIAL',
    layer: 'Vessels',
    gender: 'both',
    description: 'High-pressure vascular conduits including the aorta, carotid, subclavian, and femoral arteries.',
    location: 'Systemic distribution branching from the left ventricle',
    function: 'Delivers oxygen-rich and nutrient-rich arterial blood under pressure to peripheral tissues',
    modelNodeNames: ['Arteries_Mesh', 'arteries', 'Aorta', 'Carotid', 'Femoral_Artery'],
    cameraTarget: { y: 1.05, distance: 2.5 }
  },
  major_veins: {
    id: 'major_veins',
    name: 'MAJOR VEINS',
    system: 'VENOUS',
    layer: 'Vessels',
    gender: 'both',
    description: 'Capacitance vascular network including superior/inferior vena cava, jugular, and femoral veins.',
    location: 'Systemic distribution returning to right atrium',
    function: 'Returns deoxygenated blood and metabolic metabolites from peripheral tissues back to the cardiopulmonary circulation',
    modelNodeNames: ['Veins_Mesh', 'veins', 'Vena_Cava', 'Jugular', 'Femoral_Vein'],
    cameraTarget: { y: 1.05, distance: 2.5 }
  },
  muscles: {
    id: 'muscles',
    name: 'MAJOR MUSCLES',
    system: 'MUSCULAR',
    layer: 'Muscles',
    gender: 'both',
    description: 'Superficial and deep skeletal muscle groups including pectoralis, deltoids, biceps, core, and quadriceps.',
    location: 'Axial and appendicular musculoskeletal compartments',
    function: 'Produces coordinated voluntary kinetic locomotion, maintains postural stability, and generates metabolic body heat',
    modelNodeNames: ['Muscles_Mesh', 'muscles', 'Pectoralis', 'Quadriceps', 'Biceps', 'Deltoids'],
    cameraTarget: { y: 0.8, distance: 3.2 }
  }
};
