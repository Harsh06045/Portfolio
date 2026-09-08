import { motion } from 'framer-motion';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const navLinks = ['About', 'Skills', 'Services', 'Projects', 'Contact'];

interface HeroSectionProps {
  onContactClick?: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="h-screen flex flex-col relative w-full overflow-hidden">
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-30 w-full"
      >
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                if (link === 'Contact' && onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Hero Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full relative z-20 flex justify-center mt-2 sm:mt-4 md:mt-5 select-none"
      >
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center text-[9.5vw] sm:text-[10vw] md:text-[10.5vw] lg:text-[11vw] px-4"
        >
          HI,&nbsp; I<span className="inline-block mx-[0.1em]">'</span>M&nbsp; HARSH
        </h1>
      </motion.div>

      {/* Hero Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-10"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative pointer-events-auto">
            <img
              src="/harsh-3d-cutout.png"
              alt="Harsh Kumar - Software Engineer & Web Developer 3D Portrait"
              className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] max-h-[64vh] sm:max-h-[68vh] md:max-h-[72vh] object-contain object-bottom pointer-events-none select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </Magnet>
      </motion.div>

      {/* Bottom Bar */}
      <div className="mt-auto relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
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
    </section>
  );
};

export default HeroSection;
