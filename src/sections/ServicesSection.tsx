import FadeIn from '../components/FadeIn';

const services = [
  {
    number: '01',
    name: 'Full-Stack Web Development',
    description:
      'Designing and developing modern, responsive, and high-performance web applications using React.js, Vite, and Node.js with clean code and intuitive UX.',
  },
  {
    number: '02',
    name: 'Backend & REST API Architecture',
    description:
      'Engineering robust backend APIs with Express.js and Node.js, secure role-based JWT authentication, and structured database management using MongoDB and MySQL.',
  },
  {
    number: '03',
    name: 'AI & Healthcare Systems Integration',
    description:
      'Developing AI-integrated web platforms combining machine learning inference with REST APIs, MRI diagnostic pipelines, and data-driven healthcare dashboards.',
  },
  {
    number: '04',
    name: 'Data Structures & Algorithms (Java)',
    description:
      'Optimizing complex algorithmic logic with 300+ solved LeetCode and 100+ GeeksforGeeks problems across trees, graphs, dynamic programming, and recursion.',
  },
  {
    number: '05',
    name: 'Cloud Deployment & Web Reliability',
    description:
      'Deploying production-grade applications on Vercel and Render, implementing version control with Git/GitHub, and ensuring high availability and uptime.',
  },
];

const skillCategories = [
  { category: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript'] },
  { category: 'Frontend', items: ['React.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend & DB', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'] },
  { category: 'Core CS & Tools', items: ['DSA', 'OOP', 'DBMS', 'Git', 'GitHub', 'Vercel', 'Render', 'AWS GenAI'] },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        {/* Technical Skills & Certifications Matrix */}
        <div id="skills" className="mt-16 sm:mt-20 pt-10 border-t border-[#0C0C0C]/10">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/50 font-bold">Comprehensive Stack</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0C0C0C] mt-2">
              Skills &amp; Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {skillCategories.map((group) => (
              <div key={group.category} className="bg-[#F4F6F8] rounded-2xl p-5 border border-[#0C0C0C]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0C0C0C]/60 mb-3">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-[#0C0C0C] border border-[#0C0C0C]/10 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Banner */}
          <div className="bg-[#0C0C0C] text-[#D7E2EA] rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7]">
                Validated Competencies
              </span>
              <span className="text-xs text-white/50">NPTEL • AWS • Imarticus • MongoDB</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                'DBMS — NPTEL',
                'OOP — NPTEL',
                'Information Retrieval — NPTEL',
                'Generative AI — AWS',
                'Machine Learning — Imarticus',
                'MongoDB Certified',
                'Cisco Packet Tracer — Internship 2025',
              ].map((cert) => (
                <span
                  key={cert}
                  className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90"
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
