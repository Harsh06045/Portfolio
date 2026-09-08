import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

interface MarqueeCardItem {
  id: string;
  type: 'project' | 'credential';
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  tags: string[];
  image?: string;
  link?: string;
  highlightStat?: { value: string; label: string };
  accentGradient?: string;
  iconType?: 'edu' | 'award' | 'code' | 'ai' | 'db' | 'health';
}

const row1Items: MarqueeCardItem[] = [
  {
    id: 'r1-1',
    type: 'project',
    category: 'Full-Stack • MERN Platform',
    title: 'EduLearn Pro LMS',
    subtitle: 'Live on Vercel • Course Enrollment & Educator CMS',
    badge: 'Live App',
    tags: ['React (Vite)', 'Node.js', 'Vercel'],
    image: '/projects/edulearn/edulearn-hero-clean.png',
    link: 'https://lms-sand-one.vercel.app',
  },
  {
    id: 'r1-2',
    type: 'project',
    category: 'HealthTech • Startup Fest 2025',
    title: 'BloodCare Ecosystem',
    subtitle: 'Donate Blood Portal & Real-Time Donor Dispatch',
    badge: 'Startup Fest 2025',
    tags: ['React.js', 'Node.js', 'Blood Bank'],
    image: '/projects/bloodcare/bloodcare-hero-clean.jpg',
    link: 'https://github.com/Harsh06045',
  },
  {
    id: 'r1-3',
    type: 'project',
    category: 'AI Research • Healthcare',
    title: 'NeuroFusionAI Platform',
    subtitle: 'Deep Learning MRI Diagnosis with 94.2% Confidence',
    badge: 'Explainable AI',
    tags: ['Python ML', 'MERN Stack', 'MRI Vision'],
    image: '/projects/neurofusion/neurofusion-dashboard.jpg',
    link: 'https://github.com/Harsh06045',
  },
  {
    id: 'r1-4',
    type: 'project',
    category: 'Backend Architecture',
    title: 'Express.js REST APIs',
    subtitle: 'Modular MVC Controllers, Middleware & Role-Based Auth',
    badge: 'Node.js Backend',
    tags: ['Express.js', 'JWT Auth', 'REST APIs'],
    image: '/projects/edulearn/edulearn-vscode-clean.png',
  },
  {
    id: 'r1-5',
    type: 'project',
    category: 'Emergency Healthcare • SOS',
    title: 'Emergency SOS Dispatch',
    subtitle: 'Instant Critical Response, Ambulance & Poison Control',
    badge: 'Emergency SOS',
    tags: ['Real-Time Dispatch', 'Emergency Tech', 'HealthTech'],
    image: '/projects/bloodcare/bloodcare-sos-clean.jpg',
    link: 'https://github.com/Harsh06045',
  },
  {
    id: 'r1-6',
    type: 'credential',
    category: 'Academic Foundation',
    title: 'Sathyabama Institute (SIST)',
    subtitle: 'Bachelor of Engineering in Computer Science (2023 - 2027)',
    badge: 'Chennai, India',
    tags: ['B.E CSE', 'Data Structures', 'OOP', 'DBMS'],
    highlightStat: { value: '8.40', label: 'Cumulative CGPA' },
    accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    iconType: 'edu',
  },
];

const row2Items: MarqueeCardItem[] = [
  {
    id: 'r2-1',
    type: 'project',
    category: 'Competitive Programming',
    title: 'LeetCode 300+ Solved',
    subtitle: 'Java DSA • Binary Trees, Graphs, Dynamic Programming & Arrays',
    badge: 'Top 15% Rating',
    tags: ['Java', 'Algorithms', 'LeetCode', 'GFG'],
    image: '/projects/dsa/leetcode-clean.jpg',
    link: 'https://github.com/Harsh06045',
  },
  {
    id: 'r2-2',
    type: 'project',
    category: 'Frontend Engineering',
    title: 'Course Enrollment Hub',
    subtitle: 'Search, Dynamic Filtering & Responsive Video Curriculum',
    badge: 'Responsive UX',
    tags: ['React (Vite)', 'Tailwind CSS', 'Vite'],
    image: '/projects/edulearn/edulearn-courses-clean.png',
    link: 'https://lms-sand-one.vercel.app',
  },
  {
    id: 'r2-3',
    type: 'project',
    category: 'Deep Learning • Neural Vision',
    title: '3D MRI Neural Heatmaps',
    subtitle: 'Axial, Sagittal & Coronal Slices with Grad-CAM Attention',
    badge: 'Deep Learning',
    tags: ['PyTorch', 'Grad-CAM', 'Medical AI'],
    image: '/projects/neurofusion/neurofusion-mri.jpg',
    link: 'https://github.com/Harsh06045',
  },
  {
    id: 'r2-4',
    type: 'project',
    category: 'Cloud CI/CD & DevOps',
    title: 'Production Vercel Cloud',
    subtitle: 'Automated Edge Builds, Global CDN & Zero Downtime Deployment',
    badge: '100% Uptime',
    tags: ['Vercel', 'CI/CD', 'Git Pipeline'],
    image: '/projects/edulearn/edulearn-vercel-clean.png',
    link: 'https://lms-sand-one.vercel.app',
  },
  {
    id: 'r2-5',
    type: 'project',
    category: 'Database Architecture',
    title: 'MongoDB Atlas Clusters',
    subtitle: 'High-Availability NoSQL Database with Document Schemas',
    badge: 'Cloud Database',
    tags: ['MongoDB Atlas', 'Mongoose', 'NoSQL'],
    image: '/projects/edulearn/edulearn-mongodb-clean.png',
  },
  {
    id: 'r2-6',
    type: 'credential',
    category: 'Honors & Certifications',
    title: "Winner — Innovator's Hackathon",
    subtitle: 'Healthcare Innovation Award • AWS Certified Generative AI',
    badge: '1st Place Award',
    tags: ['AWS Certified', 'NPTEL DBMS', 'Startup Fest'],
    highlightStat: { value: 'Winner', label: "Innovator's Hackathon 2024" },
    accentGradient: 'from-amber-500/20 via-purple-500/10 to-transparent',
    iconType: 'award',
  },
];

// Tripled for endless smooth scroll
const row1Tripled = [...row1Items, ...row1Items, ...row1Items];
const row2Tripled = [...row2Items, ...row2Items, ...row2Items];

const MarqueeCard = ({ item }: { item: MarqueeCardItem }) => {
  const CardContent = (
    <div
      className={`w-[360px] sm:w-[420px] md:w-[460px] h-[240px] sm:h-[265px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 bg-[#141414] flex-shrink-0 relative group transition-all duration-300 shadow-xl select-none ${
        item.link ? 'cursor-pointer' : ''
      }`}
    >
      {item.type === 'project' && item.image ? (
        <>
          {/* Background Project Image */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Top Badge Overlay */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10 pointer-events-none">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {item.badge}
            </span>

            {item.link && (
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ExternalLink size={13} />
              </span>
            )}
          </div>

          {/* Bottom Gradient Overlay & Meta Info */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/85 to-transparent pt-12 pb-3.5 sm:pb-4 px-4 sm:px-5 flex flex-col justify-end z-10 pointer-events-none">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#BBCCD7]/70 font-semibold mb-0.5">
              {item.category}
            </span>
            <h4 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide group-hover:text-[#00E5FF] transition-colors leading-snug">
              {item.title}
            </h4>
            <p className="text-[#BBCCD7]/80 text-xs sm:text-[13px] font-light line-clamp-1 mt-0.5">
              {item.subtitle}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Rich Credential Card (Education / Hackathon / Certifications) */
        <div
          className={`w-full h-full p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${
            item.accentGradient || 'from-white/5 to-transparent'
          }`}
        >
          {/* Subtle geometric grid background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#D7E2EA 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top header row */}
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#00E5FF]">
                {item.iconType === 'edu' ? <GraduationCap size={20} /> : <Award size={20} />}
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#BBCCD7]/70 block">
                  {item.category}
                </span>
                <span className="text-xs text-white/90 font-medium">{item.badge}</span>
              </div>
            </div>

            {item.highlightStat && (
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-black text-white leading-none">
                  {item.highlightStat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#BBCCD7]/70 mt-0.5">
                  {item.highlightStat.label}
                </div>
              </div>
            )}
          </div>

          {/* Content middle/bottom */}
          <div className="relative z-10 pt-2">
            <h4 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide group-hover:text-[#00E5FF] transition-colors leading-snug">
              {item.title}
            </h4>
            <p className="text-[#BBCCD7]/80 text-xs sm:text-[13px] font-light mt-1 leading-relaxed">
              {item.subtitle}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/85 border border-white/15 flex items-center gap-1"
                >
                  <CheckCircle2 size={10} className="text-emerald-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block flex-shrink-0"
      >
        {CardContent}
      </a>
    );
  }

  return <div className="flex-shrink-0">{CardContent}</div>;
};

const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Row 1 moves right as you scroll down
  const x1 = useTransform(scrollYProgress, [0, 1], [-600, 100]);
  // Row 2 moves left as you scroll down
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -600]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Section Header Hint */}
      <div className="text-center px-4 mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#BBCCD7]/60 block mb-1">
          Resume Portfolio Highlights
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-white/90 tracking-wider">
          Featured Engineering &amp; Projects
        </h3>
      </div>

      {/* Row 1 - Moves RIGHT with scroll */}
      <motion.div
        className="flex gap-4 sm:gap-5 mb-4 sm:mb-5"
        style={{ x: x1 }}
      >
        {row1Tripled.map((item, i) => (
          <MarqueeCard key={`r1-${item.id}-${i}`} item={item} />
        ))}
      </motion.div>

      {/* Row 2 - Moves LEFT with scroll */}
      <motion.div
        className="flex gap-4 sm:gap-5"
        style={{ x: x2 }}
      >
        {row2Tripled.map((item, i) => (
          <MarqueeCard key={`r2-${item.id}-${i}`} item={item} />
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
