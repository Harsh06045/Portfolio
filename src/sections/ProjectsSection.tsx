import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    number: '01',
    category: 'Full-Stack • MERN Platform',
    name: 'EduLearn Pro',
    subtitle: 'Online Course Management System',
    description:
      'Full-stack online learning platform featuring course enrollment, educator dashboard, secure payment gateway, and MongoDB user authentication, deployed on Vercel.',
    tags: ['React.js (Vite)', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Vercel'],
    link: 'https://lms-sand-one.vercel.app',
    col1: [
      '/projects/edulearn/edulearn-courses-clean.png',
      '/projects/edulearn/edulearn-vscode-clean.png',
    ],
    col2: '/projects/edulearn/edulearn-hero-clean.png',
    gallery: [
      { label: 'Live App', src: '/projects/edulearn/edulearn-hero-clean.png' },
      { label: 'Course Catalog', src: '/projects/edulearn/edulearn-courses-clean.png' },
      { label: 'Backend Architecture', src: '/projects/edulearn/edulearn-vscode-clean.png' },
      { label: 'Vercel Deployment', src: '/projects/edulearn/edulearn-vercel-clean.png' },
      { label: 'MongoDB Atlas', src: '/projects/edulearn/edulearn-mongodb-clean.png' },
    ],
  },
  {
    number: '02',
    category: 'HealthTech • Startup Fest 2025',
    name: 'BloodCare',
    subtitle: 'Centralized Healthcare Ecosystem',
    description:
      'End-to-end ecosystem covering blood donation management, AI-powered report & X-ray diagnostics, patient enrollment with biometric access, and home hemodialysis support.',
    tags: ['React.js', 'Node.js', 'ML Models', 'Cloud APIs', 'Biometrics'],
    link: 'https://github.com/Harsh06045',
    col1: [
      '/projects/bloodcare/bloodcare-action-clean.jpg',
      '/projects/bloodcare/bloodcare-sos-clean.jpg',
    ],
    col2: '/projects/bloodcare/bloodcare-hero-clean.jpg',
    gallery: [
      { label: 'Donate Blood Hub', src: '/projects/bloodcare/bloodcare-hero-clean.jpg' },
      { label: 'Emergency SOS', src: '/projects/bloodcare/bloodcare-sos-clean.jpg' },
      { label: 'Donor Matching', src: '/projects/bloodcare/bloodcare-action-clean.jpg' },
      { label: 'Emergency Contacts', src: '/projects/bloodcare/bloodcare-contacts-clean.jpg' },
    ],
  },
  {
    number: '03',
    category: 'AI Research • Healthcare Platform',
    name: 'NeuroFusionAI',
    subtitle: "Early Alzheimer's Disease Prediction",
    description:
      "Full-stack AI healthcare platform for early Alzheimer's disease prediction from MRI scans, with role-based dashboards for Admin, Doctor, and Patient modules and explainable AI inference.",
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python ML'],
    link: 'https://github.com/Harsh06045',
    col1: [
      '/projects/neurofusion/neurofusion-mri.jpg',
      '/projects/neurofusion/neurofusion-prediction.jpg',
    ],
    col2: '/projects/neurofusion/neurofusion-dashboard.jpg',
    gallery: [
      { label: 'Diagnosis Hub', src: '/projects/neurofusion/neurofusion-dashboard.jpg' },
      { label: '3D MRI Heatmaps', src: '/projects/neurofusion/neurofusion-mri.jpg' },
      { label: 'Clinical Metrics', src: '/projects/neurofusion/neurofusion-prediction.jpg' },
    ],
  },
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outIndex, setOutIndex] = useState<number | null>(null);
  const [selectedImages, setSelectedImages] = useState<Record<string, string>>({
    '01': projects[0].col2,
    '02': projects[1].col2,
    '03': projects[2].col2,
  });

  const rafRef = useRef<number | null>(null);

  const handleNext = () => {
    if (outIndex !== null) return;
    setOutIndex(activeIndex);
    const next = (activeIndex + 1) % projects.length;
    setActiveIndex(next);
    setTimeout(() => setOutIndex(null), 560);
  };

  const handlePrev = () => {
    if (outIndex !== null) return;
    const prev = (activeIndex - 1 + projects.length) % projects.length;
    setActiveIndex(prev);
  };

  const handleCardClick = (clickedIndex: number) => {
    if (outIndex !== null) return;
    if (clickedIndex === activeIndex) {
      handleNext();
    } else {
      setOutIndex(activeIndex);
      setActiveIndex(clickedIndex);
      setTimeout(() => setOutIndex(null), 560);
    }
  };

  const setSelectedImageForProject = (projectNumber: string, src: string) => {
    setSelectedImages((prev) => ({
      ...prev,
      [projectNumber]: src,
    }));
  };

  // Holographic 3D tilt calculation with requestAnimationFrame throttling
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (outIndex !== null) return;
    const card = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const hw = rect.width / 2;
      const hh = rect.height / 2;
      const ratioX = (clientX - (rect.x + hw)) / hw;
      const ratioY = (clientY - (rect.y + hh)) / hh;
      card.style.setProperty('--ratio-x', ratioX.toFixed(2));
      card.style.setProperty('--ratio-y', ratioY.toFixed(2));
    });
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const card = e.currentTarget;
    card.style.setProperty('--ratio-x', '0');
    card.style.setProperty('--ratio-y', '0');
  };

  const getCardClass = (index: number) => {
    if (index === outIndex) {
      return 'shuffle-card--out';
    }
    const offset = (index - activeIndex + projects.length) % projects.length;
    if (offset === 0) return 'shuffle-card--current';
    if (offset === 1) return 'shuffle-card--next';
    return 'shuffle-card--back';
  };

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 overflow-visible"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12"
      >
        <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 font-semibold block mb-2">
          Interactive Card Deck
        </span>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
        >
          Projects
        </h2>
        <p className="text-xs sm:text-sm text-[#BBCCD7]/70 mt-3 flex items-center justify-center gap-2">
          <Shuffle size={14} className="text-[#B600A8] animate-pulse" />
          <span>Click any card or shuffle button to fly &amp; cycle through the stack</span>
        </p>
      </motion.div>

      {/* Deck Controls Bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 mb-8 sm:mb-12 px-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-xs text-white/40">/ {String(projects.length).padStart(2, '0')}</span>
          <div className="flex items-center gap-1.5 ml-3">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleCardClick(i)}
                aria-label={`Jump to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-gradient-to-r from-[#B600A8] to-[#7621B0]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 bg-white/5 hover:bg-white/15 text-[#D7E2EA] flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Shuffle next project"
            className="px-5 h-10 rounded-full text-white font-medium text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer active:scale-95 hover:scale-105"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 12px rgba(181, 1, 167, 0.35)',
              outline: '1.5px solid rgba(255, 255, 255, 0.65)',
              outlineOffset: '-1px',
            }}
          >
            <span>Shuffle</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Cards Stack Stage */}
      <div className="max-w-6xl mx-auto relative min-h-[580px] xs:min-h-[620px] sm:min-h-[660px] md:min-h-[760px] lg:min-h-[800px] mb-12 sm:mb-16">
        {projects.map((project, index) => {
          const isCurrent = index === activeIndex;
          const cardClass = getCardClass(index);
          const currentImage = selectedImages[project.number] || project.col2;

          return (
            <div
              key={project.number}
              onClick={() => handleCardClick(index)}
              className={`shuffle-card ${cardClass} w-full cursor-pointer`}
            >
              <div
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className="holo-card rounded-[28px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA]/40 hover:border-[#D7E2EA]/80 bg-gradient-to-b from-[#141414] via-[#101010] to-[#0C0C0C] p-4 sm:p-6 md:p-8 min-h-[520px] xs:min-h-[560px] sm:min-h-[600px] md:h-[72vh] lg:h-[76vh] flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(182,0,168,0.15)] transition-all duration-300"
              >
                {/* Holographic 3D foil layers */}
                <div className="circles" />
                <div className="holo-bg" />
                <div className="holo-lines" />

                {/* Card Content */}
                <div className="relative z-20 flex flex-col h-full min-h-0">
                  {/* Top Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3">
                    <div className="flex items-start gap-3 sm:gap-6 md:gap-8">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="font-black text-[#D7E2EA] leading-none hero-heading flex-shrink-0 select-none"
                        style={{ fontSize: 'clamp(2rem, 6vw, 90px)' }}
                      >
                        {project.number}
                      </motion.span>
                      <div className="flex flex-col gap-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[#D7E2EA] text-[11px] sm:text-xs font-light uppercase tracking-wider opacity-60">
                            {project.category}
                          </span>
                          {isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#B600A8]/20 to-[#7621B0]/20 text-[#D7E2EA] text-[9px] uppercase font-bold tracking-wider border border-[#B600A8]/40 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] animate-pulse"></span>
                              Active
                            </span>
                          )}
                        </div>
                        <h3
                          className="text-[#D7E2EA] font-bold uppercase leading-tight group-hover:text-white transition-colors"
                          style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.85rem)' }}
                        >
                          {project.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#BBCCD7] max-w-xl line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] sm:text-xs px-2 py-0.5 rounded-full bg-white/10 text-[#D7E2EA] border border-white/10 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className="self-end sm:self-start flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LiveProjectButton href={project.link} label="View Project" />
                    </div>
                  </div>

                  {/* Screenshot switcher tabs */}
                  {project.gallery && (
                    <div
                      className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 overflow-x-auto no-scrollbar py-0.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#BBCCD7]/60 font-light mr-1 flex-shrink-0">
                        Views:
                      </span>
                      {project.gallery.map((item) => {
                        const isActive = currentImage === item.src;
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImageForProject(project.number, item.src);
                            }}
                            className={`text-[10px] sm:text-xs px-2.5 py-1 rounded-full border transition-all duration-200 cursor-pointer flex-shrink-0 backdrop-blur-sm ${
                              isActive
                                ? 'bg-white text-black border-white font-medium shadow-md scale-105'
                                : 'bg-white/5 text-[#D7E2EA] border-white/10 hover:bg-white/15'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Adaptive Image Grid with crossfade animation */}
                  {/* Mobile View (< md): Prominent main image + quick thumbnail picker */}
                  <div
                    className="flex md:hidden flex-col gap-2 flex-1 min-h-0 pb-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-full flex-1 min-h-[180px] rounded-2xl overflow-hidden border border-white/10 bg-[#141414] relative">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImage}
                          src={currentImage}
                          alt={`${project.name} main preview`}
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Quick thumbnails strip */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                      {[project.col2, ...project.col1].map((imgSrc, i) => {
                        const isSelected = currentImage === imgSrc;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImageForProject(project.number, imgSrc);
                            }}
                            className={`w-14 h-10 rounded-lg overflow-hidden border flex-shrink-0 transition-all duration-200 ${
                              isSelected
                                ? 'border-white ring-2 ring-white/60 scale-105 shadow-md'
                                : 'border-white/20 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={imgSrc} alt="thumbnail" className="w-full h-full object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desktop View (>= md): Dual-column split */}
                  <div
                    className="hidden md:flex gap-4 flex-1 min-h-0 overflow-hidden pb-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Left column - 38% */}
                    <div className="w-[38%] flex flex-col gap-4 h-full min-h-0">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageForProject(project.number, project.col1[0]);
                        }}
                        className={`flex-1 min-h-0 w-full rounded-[24px] lg:rounded-[32px] overflow-hidden border bg-[#141414] group/thumb cursor-pointer transition-all duration-300 relative ${
                          currentImage === project.col1[0]
                            ? 'border-white shadow-lg ring-1 ring-white/50'
                            : 'border-white/10 hover:border-white/40'
                        }`}
                      >
                        <img
                          src={project.col1[0]}
                          alt={`${project.name} preview 1`}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageForProject(project.number, project.col1[1]);
                        }}
                        className={`flex-1 min-h-0 w-full rounded-[24px] lg:rounded-[32px] overflow-hidden border bg-[#141414] group/thumb cursor-pointer transition-all duration-300 relative ${
                          currentImage === project.col1[1]
                            ? 'border-white shadow-lg ring-1 ring-white/50'
                            : 'border-white/10 hover:border-white/40'
                        }`}
                      >
                        <img
                          src={project.col1[1]}
                          alt={`${project.name} preview 2`}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </div>

                    {/* Right column - 62% with crossfade image transition */}
                    <div className="w-[62%] h-full min-h-0 rounded-[24px] lg:rounded-[32px] overflow-hidden border border-white/10 bg-[#141414] relative">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImage}
                          src={currentImage}
                          alt={`${project.name} main preview`}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
