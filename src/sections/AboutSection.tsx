import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const decorativeImages = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon icon',
    className: 'hidden md:block w-[140px] lg:w-[200px] absolute top-[4%] left-[2%] lg:left-[4%] pointer-events-none select-none opacity-80',
    fadeProps: { delay: 0.1, x: -60, y: 0, duration: 0.8 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'hidden md:block w-[120px] lg:w-[170px] absolute bottom-[8%] left-[4%] lg:left-[8%] pointer-events-none select-none opacity-80',
    fadeProps: { delay: 0.25, x: -60, y: 0, duration: 0.8 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'hidden md:block w-[140px] lg:w-[200px] absolute top-[4%] right-[2%] lg:right-[4%] pointer-events-none select-none opacity-80',
    fadeProps: { delay: 0.15, x: 60, y: 0, duration: 0.8 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group',
    className: 'hidden md:block w-[140px] lg:w-[210px] absolute bottom-[8%] right-[4%] lg:right-[8%] pointer-events-none select-none opacity-80',
    fadeProps: { delay: 0.3, x: 60, y: 0, duration: 0.8 },
  },
];

interface AboutSectionProps {
  onContactClick?: () => void;
}

const AboutSection = ({ onContactClick }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28 relative bg-[#0C0C0C] overflow-hidden"
    >
      {/* Decorative 3D images (hidden on mobile to prevent blocking content) */}
      {decorativeImages.map((img, i) => (
        <FadeIn key={i} {...img.fadeProps} className={img.className}>
          <img src={img.src} alt={img.alt} className="w-full pointer-events-none select-none" />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 z-10 max-w-5xl w-full mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 font-semibold block mb-2">
              Background &amp; Profile
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
            >
              About me
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 w-full">
          <AnimatedText
            text="Computer Science Engineering student at Sathyabama Institute with hands-on experience in full-stack web development and data structures & algorithms. Proficient in building scalable applications using React.js, Node.js, and MongoDB, with 300+ LeetCode problems solved. Actively seeking software engineering roles to craft impactful digital solutions!"
            className="text-[#D7E2EA] font-medium text-center sm:text-justify sm:[text-align-last:center] leading-relaxed max-w-[680px] px-2"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)' }}
          />

          {/* Quick highlight metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl w-full px-1">
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/15 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-sm">
              <div className="text-xl sm:text-3xl font-black text-white">8.40</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">
                CGPA • Sathyabama
              </div>
            </div>
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/15 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-sm">
              <div className="text-xl sm:text-3xl font-black text-white">300+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">
                LeetCode Solved
              </div>
            </div>
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/15 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-sm">
              <div className="text-xl sm:text-3xl font-black text-white">Winner</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">
                Innovator's Hackathon
              </div>
            </div>
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/15 rounded-2xl p-3.5 sm:p-4 text-center backdrop-blur-sm">
              <div className="text-xl sm:text-3xl font-black text-white">Startup Fest</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">
                2025 Presenter
              </div>
            </div>
          </div>

          <ContactButton onClick={onContactClick} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
