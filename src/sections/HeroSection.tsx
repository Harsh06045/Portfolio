import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

interface HeroSectionProps {
  onContactClick?: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (linkName: string, href: string) => {
    setMobileMenuOpen(false);
    if (linkName === 'Contact' && onContactClick) {
      onContactClick();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-[100dvh] min-h-[100dvh] flex flex-col relative w-full overflow-hidden bg-[#0C0C0C]">
      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-40 w-full"
      >
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center px-8 lg:px-12 pt-6 lg:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.name, link.href);
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base lg:text-[1.3rem] hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Top Bar */}
        <div className="flex md:hidden justify-between items-center px-5 pt-4 pb-2">
          <a
            href="#"
            className="text-white font-black text-xl tracking-tight flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>HARSH<span className="text-[#BBCCD7] font-light text-xs ml-1">.DEV</span></span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[60px] z-50 bg-[#0C0C0C]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 border-t border-white/10"
          >
            <div className="flex flex-col gap-5 pt-4">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 font-semibold">
                Menu Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(link.name, link.href)}
                  className="flex items-center justify-between text-left text-2xl font-bold uppercase tracking-wide text-[#D7E2EA] hover:text-white py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} className="text-[#BBCCD7]/50" />
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <ContactButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onContactClick) onContactClick();
                }}
                className="w-full text-center py-3.5"
                label="Let's Connect"
              />
              <div className="flex items-center justify-center gap-6 text-white/70 pt-2">
                <a
                  href="https://github.com/Harsh06045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-k-95327927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="mailto:harsh.kumar60456@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full relative z-20 flex flex-col items-center mt-1 sm:mt-2 md:mt-4 lg:mt-6 px-4 select-none flex-shrink-0"
      >
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center text-[10.5vw] xs:text-[10vw] sm:text-[8.5vw] md:text-[8vw] lg:text-[7.5vw] xl:text-[6.8vw] 2xl:text-[120px]"
        >
          HI,&nbsp; I<span className="inline-block mx-[0.08em]">'</span>M&nbsp; HARSH
        </h1>

        {/* Mobile-only Subtitle Pill (strictly hidden on tablet and desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="md:hidden mt-2 sm:mt-2.5 flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
          <span className="text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-wider text-[#D7E2EA] font-medium">
            Full-Stack Developer • DSA Problem Solver
          </span>
        </motion.div>
      </motion.div>

      {/* Mobile Center Stage: Clean, Prominent 3D Avatar */}
      <div className="md:hidden relative z-10 flex-1 min-h-0 w-full flex items-center justify-center px-4 my-auto">
        {/* Subtle Ambient Backdrop Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[260px] h-[260px] xs:w-[320px] xs:h-[320px] rounded-full bg-gradient-to-tr from-[#B600A8]/20 via-[#7621B0]/15 to-transparent blur-[65px]"
          />
        </div>

        {/* 3D Avatar Centered & Proportioned */}
        <div className="relative flex items-center justify-center w-full h-full max-h-[54vh] xs:max-h-[58vh] sm:max-h-[62vh]">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            src="/harsh-3d-cutout.png"
            alt="Harsh Kumar - Software Engineer & Web Developer 3D Portrait"
            className="h-full w-auto max-w-[90vw] object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] z-10"
          />
        </div>
      </div>

      {/* Desktop Hero Portrait with Magnetic Physics */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 z-10 pointer-events-none items-end justify-center">
        <Magnet
          padding={120}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative pointer-events-auto flex items-end justify-center">
            {/* Desktop ambient glow */}
            <div className="absolute bottom-1/4 w-[380px] lg:w-[460px] h-[300px] rounded-full bg-gradient-to-tr from-[#B600A8]/20 via-[#7621B0]/15 to-transparent blur-[70px] pointer-events-none" />
            <img
              src="/harsh-3d-cutout.png"
              alt="Harsh Kumar - Software Engineer & Web Developer 3D Portrait"
              className="w-auto h-[50vh] min-h-[360px] max-h-[56vh] lg:max-h-[58vh] max-w-[420px] object-contain object-bottom pointer-events-none select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] relative z-10"
            />
          </div>
        </Magnet>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 w-full pb-4 xs:pb-5 sm:pb-8 md:pb-10 px-6 sm:px-8 md:px-12 lg:px-16 mt-auto flex-shrink-0">
        {/* Mobile Bottom: Clean centered CTA button */}
        <div className="flex md:hidden flex-col items-center justify-center gap-1.5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <ContactButton onClick={onContactClick} label="Contact Me" />
          </motion.div>
          <span className="text-[10px] uppercase tracking-widest text-white/40 pt-0.5">
            Scroll to explore ↓
          </span>
        </div>

        {/* Desktop Bottom: Split left subtitle and right CTA */}
        <div className="hidden md:flex justify-between items-end w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[240px] lg:max-w-[280px]"
              style={{ fontSize: 'clamp(0.8rem, 1.05vw, 1.15rem)' }}
            >
              full-stack web developer &amp; dsa problem solver crafting scalable applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ContactButton onClick={onContactClick} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
