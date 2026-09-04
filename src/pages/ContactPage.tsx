import React, { useState } from 'react';
import { portfolioProfile } from '../data/portfolioData';
import { SEO } from '../components/common/SEO';
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Instagram
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Academic Collaboration',
    message: '',
    academicConsent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Contact & Academic Inquiries"
        description="Connect with Dr. Pawan Patle for student research collaborations, medical study circles, or community health camp planning."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Communication & Outreach</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Academic Inquiries & Dialogue
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            Open to collaborative student research projects, peer study groups, and community healthcare initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contacts & Institutional Office */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-charcoal-200 shadow-subtle space-y-6">
              <h2 className="font-editorial text-2xl font-medium text-charcoal-900">
                Direct Channels
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-full bg-clinical-50 text-clinical-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400 block">
                      Academic Email
                    </span>
                    <a
                      href={`mailto:${portfolioProfile.email}`}
                      className="font-medium text-charcoal-900 hover:text-clinical-700 transition-colors"
                    >
                      {portfolioProfile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-full bg-clinical-50 text-clinical-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400 block">
                      Professional Network
                    </span>
                    <a
                      href={portfolioProfile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-charcoal-900 hover:text-clinical-700 transition-colors inline-flex items-center space-x-1"
                    >
                      <span>linkedin.com/in/pawankumar-med</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {portfolioProfile.instagram && (
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-full bg-clinical-50 text-clinical-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400 block">
                        Instagram (Academic & Study)
                      </span>
                      <a
                        href={portfolioProfile.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-charcoal-900 hover:text-clinical-700 transition-colors inline-flex items-center space-x-1"
                      >
                        <span>@pawanpatle04</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-full bg-clinical-50 text-clinical-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-400 block">
                      Campus & Hospital Base
                    </span>
                    <p className="font-medium text-charcoal-900">
                      {portfolioProfile.institution}
                    </p>
                    <p className="text-xs text-charcoal-500">
                      {portfolioProfile.university}, {portfolioProfile.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-100 text-xs text-charcoal-500 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-clinical-600 shrink-0" />
                <span>Typical response window: within 24–48 hours between lectures.</span>
              </div>
            </div>

            {/* Note on Medical Ethics */}
            <div className="p-6 rounded-2xl bg-cream-100 border border-charcoal-200/80 space-y-2 text-xs text-charcoal-600 leading-relaxed">
              <div className="flex items-center space-x-1.5 font-semibold text-charcoal-800">
                <ShieldCheck className="w-4 h-4 text-clinical-700" />
                <span>Ethical Boundary Notice</span>
              </div>
              <p>
                As a medical student, I do not diagnose conditions, prescribe remedies, or provide individual medical advice online. If you are experiencing medical distress, please consult a licensed medical practitioner or your nearest primary health center.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-charcoal-200 shadow-card">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal-900">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-charcoal-800">{formData.name}</span>. Your message regarding <span className="font-semibold text-clinical-700">{formData.purpose}</span> has been noted. I will review it during my academic review hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        purpose: 'Academic Collaboration',
                        message: '',
                        academicConsent: false
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-charcoal-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-800 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-editorial text-2xl font-medium text-charcoal-900">
                      Send a Message
                    </h2>
                    <p className="text-xs text-charcoal-500 mt-1">
                      Please specify the nature of your inquiry for organized academic review.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Prof. / Colleague"
                        className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border border-charcoal-200 text-xs sm:text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-clinical-600 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="colleague@institution.edu"
                        className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border border-charcoal-200 text-xs sm:text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-clinical-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="purpose" className="text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                      Nature of Inquiry
                    </label>
                    <select
                      id="purpose"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border border-charcoal-200 text-xs sm:text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-clinical-600 focus:bg-white transition-all"
                    >
                      <option value="Academic Collaboration">Academic & Student Research Collaboration</option>
                      <option value="Community Health Camp">Community Health Camp Volunteer Drive</option>
                      <option value="Peer Study Circle">Peer Study Circle / Case Discussion</option>
                      <option value="Mentorship & Guidance">Faculty Mentorship / Guidance</option>
                      <option value="General Professional Inquiry">General Professional Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the topic, context, or collaboration proposal..."
                      className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border border-charcoal-200 text-xs sm:text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-clinical-600 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-2 text-xs text-charcoal-600">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      checked={formData.academicConsent}
                      onChange={(e) => setFormData({ ...formData, academicConsent: e.target.checked })}
                      className="mt-0.5 rounded border-charcoal-300 text-clinical-600 focus:ring-clinical-500"
                    />
                    <label htmlFor="consent">
                      I understand this communication is for academic and professional dialogue, and not for personal medical diagnosis.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-clinical-800 hover:bg-clinical-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md inline-flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
