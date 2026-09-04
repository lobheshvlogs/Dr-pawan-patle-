import React, { useState } from 'react';
import { Building2, Stethoscope, Microscope, Users, Activity, Eye, ShieldAlert, HeartHandshake, CheckCircle2, Leaf, FlaskConical } from 'lucide-react';

const departmentData = [
  {
    id: 'kayachikitsa',
    name: 'Kayachikitsa OPD (Internal Medicine)',
    icon: Stethoscope,
    badge: 'Chronic & Lifestyle Diseases',
    casesObserved: '120+ Cases',
    faculty: 'Prof. Dept. of Kayachikitsa',
    description: 'Outpatient clinical consultation where detailed Ayurvedic history taking, Prakriti assessment, Agni (digestive fire) evaluation, and symptom chronicity are systematically documented.',
    procedures: ['Ashta-vidha Pariksha Intake', 'Prakriti & Dosha Constitution Mapping', 'Dietary (Ahara-Vihara) Timeline Scribing', 'Agni & Koshtha Assessment'],
    keyTakeaway: 'Understanding that treating the root cause (Samprapti vighatana) through tailored dietary discipline and constitutional herbs is foundational to Ayurvedic cure.'
  },
  {
    id: 'dravyaguna',
    name: 'Dravyaguna Herbal Garden & Herbarium',
    icon: Leaf,
    badge: 'Pharmacognosy & Botany',
    casesObserved: '75+ Species Cataloged',
    faculty: 'Associate Prof. Dept. of Dravyaguna Vijnana',
    description: 'Field postings in the institutional botanical garden for live macroscopic identification of medicinal flora, studying Rasa (taste), Guna (attributes), Virya (potency), and Vipaka (post-digestive effect).',
    procedures: ['Medicinal Plant Morphology Verification', 'Herbarium Sheet Mounting & Indexing', 'Dry Raw Drug Authentication (Bark, Roots, Seeds)', 'Phytochemical Screening Corroboration'],
    keyTakeaway: 'Mastering accurate botanical differentiation between authentic medicinal herbs and adulterants using morphological and sensory markers.'
  },
  {
    id: 'panchakarma',
    name: 'Panchakarma Department & Therapy Unit',
    icon: HeartHandshake,
    badge: 'Purvakarma & Detoxification',
    casesObserved: '50+ Procedures Observed',
    faculty: 'Senior Vaidya, Panchakarma Unit',
    description: 'Observation of specialized bio-purification and palliative procedures including Snehana (internal/external oleation), Swedana (sudation), Shirodhara, and localized Basti therapies.',
    procedures: ['Janu & Kati Basti Protocol Scribing', 'Abhyanga & Swedana Patient Monitoring', 'Pre- and Post-Procedure Vital Signs Recording', 'Therapy Room Asepsis Verification'],
    keyTakeaway: 'Witnessing how classical Purvakarma protocols prepare the body tissues (Dhatus) for elimination of deep-seated morbid Doshas.'
  },
  {
    id: 'bhaishajya',
    name: 'Rasa Shastra & Bhaishajya Kalpana',
    icon: FlaskConical,
    badge: 'Pharmaceutical Formulations',
    casesObserved: '40+ Formulations Prepared',
    faculty: 'Assistant Prof. Dept. of Bhaishajya Kalpana',
    description: 'Practical training in Ayurvedic pharmacy, preparing Panchavidha Kashaya Kalpana (Swarasa, Kalka, Kwatha, Hima, Phanta) along with classical Vati, Asava-Arishta, and medicated oils.',
    procedures: ['Kwatha Decoction Boiling & Filtration', 'Churna Fine Sieving & Standardization', 'Sneha Paka (Medicated Taila/Ghrita) Stage Testing', 'Standard Operational Procedures (SOP) Compliance'],
    keyTakeaway: 'Learning the exact temperature endpoints (Paka Lakshana) essential for ensuring therapeutic potency and safety in Ayurvedic formulations.'
  },
  {
    id: 'roganidana',
    name: 'Roga Nidana Diagnostic & Pathology Lab',
    icon: Microscope,
    badge: 'Clinical Pathology & Corroboration',
    casesObserved: '85+ Diagnostic Profiles',
    faculty: 'Department of Roga Nidana & Vikriti Vijnana',
    description: 'Para-clinical laboratory rotations covering peripheral blood counts, urinalysis, lipid profiles, and correlating objective modern findings with Ayurvedic pathogenesis (Shat Kriya Kala).',
    procedures: ['Complete Blood Count (CBC) Review', 'Urine Microscopic & Dipstick Examination', 'Blood Glucose & Serum Uric Acid Corroboration', 'Srotas (Channel) Pathology Scribing'],
    keyTakeaway: 'Bridging modern lab parameters (inflammatory markers, lipid panels) with classical concepts of Ama and Dhatu-vaishamya.'
  }
];

export const DepartmentExplorer: React.FC = () => {
  const [activeDeptId, setActiveDeptId] = useState('kayachikitsa');
  const activeDept = departmentData.find(d => d.id === activeDeptId) || departmentData[0];

  return (
    <div className="w-full rounded-3xl bg-[#0C1530] border border-[#38A4F6]/30 shadow-2xl p-6 sm:p-8 backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#7CC4FA] block font-semibold mb-1">
            BAMS Clinical Rotations Hub
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
            Ayurvedic Hospital Ward & Department Explorer
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Select an Ayurvedic department to inspect 2nd-year student observational logs and learning takeaways.
          </p>
        </div>

        {/* Live Active Status */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#080E21] border border-[#38A4F6]/30 text-xs font-mono text-[#BAE0FD] self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>BAMS 2nd Year Rotations</span>
        </div>
      </div>

      {/* Department Selector Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {departmentData.map((dept) => {
          const Icon = dept.icon;
          const isActive = activeDept.id === dept.id;
          return (
            <button
              key={dept.id}
              onClick={() => setActiveDeptId(dept.id)}
              className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-[#0E86D4] text-white shadow-[0_0_20px_rgba(14,134,212,0.4)] border border-[#38A4F6]/60'
                  : 'bg-[#080E21] text-slate-400 hover:text-white hover:bg-[#101B3A] border border-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#38A4F6]'}`} />
              <span>{dept.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Department Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Scope & Procedures */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-[#080E21] border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] font-bold">
                Ayurvedic Clinical Focus & Scope
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[10px] font-mono text-[#BAE0FD]">
                {activeDept.casesObserved}
              </span>
            </div>
            <h4 className="font-editorial text-2xl font-bold text-white">
              {activeDept.name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeDept.description}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#080E21] border border-white/5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] font-bold block">
              Core Observational Procedures & Learning Exposure
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeDept.procedures.map((proc, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#060B18] border border-white/5 flex items-start space-x-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#38A4F6] shrink-0 mt-0.5" />
                  <span>{proc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Key Takeaway Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0E1D45] to-[#0A122A] border border-[#38A4F6]/40 shadow-xl space-y-4">
            <div className="flex items-center space-x-2 text-[#7CC4FA]">
              <Eye className="w-5 h-5 text-[#38A4F6]" />
              <span className="text-xs uppercase tracking-wider font-semibold font-mono">
                Student Learning Takeaway
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "{activeDept.keyTakeaway}"
            </p>
            <div className="pt-3 border-t border-white/10 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                Supervising Faculty / Senior Vaidya
              </span>
              <p className="text-xs font-semibold text-white">
                {activeDept.faculty}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#080E21] border border-white/5 text-[11px] text-slate-400">
            Postings are conducted under supervised hospital rotatory schedules strictly within BAMS undergraduate educational boundaries.
          </div>
        </div>

      </div>
    </div>
  );
};
