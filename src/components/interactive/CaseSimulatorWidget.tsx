import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, ChevronRight, FileText, Activity, Sparkles, BookOpen } from 'lucide-react';

const mockCases = [
  {
    id: 1,
    department: 'Kayachikitsa OPD (Internal Medicine)',
    patient: 'Case #OPD-2401',
    ageGender: '34 / Male',
    chiefComplaint: 'Amlapitta: Burning sensation in chest & throat (Urodaha), sour eructations (Amlodgara), and nausea (14 months duration)',
    modalities: 'Aggravated by spicy, oily foods (Vidahi Ahara) and night shifts (Ratri Jagarana); Ameliorated by cold milk & cooling decoctions.',
    labFindings: 'Pitta-Kapha vitiation. Jihwa Pariksha: Yellowish moist coating. Modern upper GI endoscopy: Mild non-erosive antral gastritis.',
    studentObservation: 'Observed the clinical efficacy of Pathya-Apathya (dietary discipline) and classical Pitta-shamaka herbs (Yashtimadhu, Shatavari) under faculty supervision.',
    facultySignOff: 'Prof. Dept. of Kayachikitsa (Supervised Intake)'
  },
  {
    id: 2,
    department: 'Panchakarma & Vata-Vyadhi Unit',
    patient: 'Case #PK-1842',
    ageGender: '52 / Female',
    chiefComplaint: 'Sandhivata (Osteoarthritis): Bilateral knee joint pain (Sandhiruk), joint crepitus (Sandhisphutana), and morning stiffness',
    modalities: 'Aggravated in cold damp seasons (Sheeta-Vata) and prolonged weight bearing; Ameliorated by warm local fomentation (Swedana).',
    labFindings: 'Vata Dosha vitiation with Dhatukshaya. Modern digital radiograph: Mild medial joint space narrowing. Serum Uric Acid normal (4.8 mg/dL).',
    studentObservation: 'Learned the procedure of Janu Basti (localized warm medicated oil pooling) and witnessed observable improvement in joint flexibility and pain score.',
    facultySignOff: 'Senior Vaidya, Panchakarma Department'
  },
  {
    id: 3,
    department: 'Pranavaha Srotas (Respiratory) Clinic',
    patient: 'Case #RESP-0931',
    ageGender: '28 / Male',
    chiefComplaint: 'Tamaka Shwasa (Bronchial Asthma): Nocturnal paroxysmal dyspnea with audible wheezing (Ghurghuruka) and spasmodic dry cough',
    modalities: 'Aggravated lying supine (Shayane shwasa vriddhi) and cloudy humid weather; Ameliorated in upright seated posture with warm water.',
    labFindings: 'Kapha-Vata obstruction in Pranavaha Srotas. Chest auscultation: Bilateral expiratory rhonchi. Pulse: Vata-Kapha dominant. SpO2 97%.',
    studentObservation: 'Understood the therapeutic principle of Vatanulomana and Kapha-hara formulations (Kantakari Avaleha, Vasa Swarasa) in opening respiratory airways.',
    facultySignOff: 'Consultant Vaidya, Kayachikitsa OPD'
  }
];

export const CaseSimulatorWidget: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = mockCases[activeCaseIndex];

  return (
    <div className="w-full rounded-3xl bg-[#0C1530] border border-[#38A4F6]/30 shadow-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-2xl">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#0E86D4]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-[#7CC4FA] text-xs font-semibold uppercase tracking-widest mb-1">
            <Stethoscope className="w-4 h-4 text-[#38A4F6]" />
            <span>BAMS Clinical Learning Station</span>
          </div>
          <h3 className="font-editorial text-2xl font-normal text-white">
            Ayurvedic Clinical Case Observation Simulator
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Sample real-world anonymized cases logged during 2nd-year BAMS hospital OPD postings.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-[#080E21] border border-[#38A4F6]/25">
          {mockCases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCaseIndex === idx
                  ? 'bg-[#0E86D4] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Case {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Active Case Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Patient Intake Data */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-[#0E86D4]/20 border border-[#38A4F6]/30 text-[#BAE0FD] text-xs font-mono font-semibold">
              {activeCase.department}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {activeCase.patient} • Age/Sex: {activeCase.ageGender}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7CC4FA] block font-semibold">
              1. Chief Complaint & Classical Diagnosis (Roga)
            </span>
            <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
              {activeCase.chiefComplaint}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7CC4FA] block font-semibold">
              2. Nidana & Modalities (Aggravation / Amelioration)
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeCase.modalities}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7CC4FA] block font-semibold">
              3. Ashta-vidha Pariksha & Diagnostic Corroboration
            </span>
            <p className="text-xs font-mono text-[#BAE0FD] leading-relaxed">
              {activeCase.labFindings}
            </p>
          </div>
        </div>

        {/* Right: Student Learning Takeaway & Faculty Verification */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0D1B3E] to-[#0A122A] border border-[#38A4F6]/30 shadow-lg space-y-3">
            <div className="flex items-center space-x-2 text-[#7CC4FA]">
              <Sparkles className="w-4 h-4 text-[#38A4F6]" />
              <span className="text-xs uppercase tracking-wider font-semibold">
                Student Learning Takeaway
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "{activeCase.studentObservation}"
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Supervising Vaidya:</span>
              <span className="text-emerald-400 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Signed</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-400">
              {activeCase.facultySignOff}
            </p>
          </div>

          {/* Interactive action note */}
          <div className="p-3.5 rounded-xl bg-[#080E21]/60 border border-white/5 text-[11px] text-slate-400 flex items-center space-x-2.5">
            <BookOpen className="w-4 h-4 text-[#38A4F6] shrink-0" />
            <span>
              All case notes conform strictly to BAMS observational clinical syllabus & ethical standards.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
