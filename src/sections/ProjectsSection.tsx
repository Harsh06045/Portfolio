import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}

const ProjectCard = ({ project, index, totalCards }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>(project.col2);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const gallery = (project as any).gallery as { label: string; src: string }[] | undefined;

  return (
    <div
      ref={cardRef}
      className="h-[82vh] sticky"
      style={{ top: `${index * 28 + 84}px` }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col origin-top overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-2 sm:mb-3">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none hero-heading"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-1 sm:pt-2">
              <span className="text-[#D7E2EA] text-xs sm:text-sm font-light uppercase tracking-wider opacity-60">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
              >
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#BBCCD7] max-w-xl line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/10 text-[#D7E2EA] border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <LiveProjectButton href={project.link} label="View Project" />
        </div>

        {/* Screenshot switcher for projects with rich galleries */}
        {gallery && (
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#BBCCD7]/60 font-light mr-1">
              Views:
            </span>
            {gallery.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setSelectedImage(item.src)}
                className={`text-[10px] sm:text-xs px-2.5 py-1 rounded-full border transition-all duration-200 cursor-pointer ${
                  selectedImage === item.src
                    ? 'bg-white text-black border-white font-medium shadow-md scale-105'
                    : 'bg-white/5 text-[#D7E2EA] border-white/10 hover:bg-white/15'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Image grid - Perfectly fitted into rounded boxes */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0 overflow-hidden pb-1">
          {/* Left column - 38% */}
          <div className="w-[38%] flex flex-col gap-3 sm:gap-4 h-full min-h-0">
            <div
              onClick={() => setSelectedImage(project.col1[0])}
              className="flex-1 min-h-0 w-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 bg-[#141414] group cursor-pointer"
            >
              <img
                src={project.col1[0]}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div
              onClick={() => setSelectedImage(project.col1[1])}
              className="flex-1 min-h-0 w-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 bg-[#141414] group cursor-pointer"
            >
              <img
                src={project.col1[1]}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Right column - 62% */}
          <div className="w-[62%] h-full min-h-0 rounded-[20px] sm:rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 bg-[#141414]">
            <img
              src={selectedImage}
              alt={`${project.name} main preview`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 pb-28">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
