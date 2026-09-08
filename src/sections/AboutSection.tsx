import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const decorativeImages = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon icon',
    className: 'w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'w-[100px] sm:w-[140px] md:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group',
    className: 'w-[130px] sm:w-[170px] md:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
];

interface AboutSectionProps {
  onContactClick?: () => void;
}

const AboutSection = ({ onContactClick }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative bg-[#0C0C0C]"
    >
      {/* Decorative 3D images */}
      {decorativeImages.map((img, i) => (
        <FadeIn key={i} {...img.fadeProps} className={img.className}>
          <img src={img.src} alt={img.alt} className="w-full pointer-events-none select-none" />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          <AnimatedText
            text="Computer Science Engineering student at Sathyabama Institute with hands-on experience in full-stack web development and data structures & algorithms. Proficient in building scalable applications using React.js, Node.js, and MongoDB, with 300+ LeetCode problems solved. Actively seeking software engineering roles to craft impactful digital solutions!"
            className="text-[#D7E2EA] font-medium text-justify [text-align-last:center] leading-relaxed max-w-[680px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Quick highlight metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full px-2">
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/20 rounded-2xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-white">8.40</div>
              <div className="text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">CGPA • Sathyabama</div>
            </div>
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/20 rounded-2xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-white">300+</div>
              <div className="text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">LeetCode Problems</div>
            </div>
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/20 rounded-2xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-white">Winner</div>
              <div className="text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">Innovator's Hackathon</div>
            </div>
            <div className="bg-[#161616]/80 border border-[#D7E2EA]/20 rounded-2xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-white">Startup Fest</div>
              <div className="text-xs uppercase tracking-wider text-[#BBCCD7] mt-1 font-light">2025 Presenter</div>
            </div>
          </div>

          <ContactButton onClick={onContactClick} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
