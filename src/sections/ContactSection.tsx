import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('harsh.kumar60456@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] pt-24 pb-16 px-5 sm:px-8 md:px-12 border-t border-white/10 relative z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <FadeIn delay={0} y={30}>
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
              Available For Opportunities
            </span>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center mt-2"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
            >
              Get In Touch
            </h2>
            <p className="max-w-2xl mx-auto text-[#BBCCD7] text-sm sm:text-base font-light mt-4 leading-relaxed">
              Computer Science Engineering student proficient in full-stack web development and data structures.
              Actively seeking software engineering internship or placement roles.
            </p>
          </FadeIn>
        </div>

        {/* Experience & Education Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Work Experience */}
          <FadeIn delay={0.1} y={30} className="h-full">
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#BBCCD7] font-medium mb-3">
                  <Briefcase size={16} className="text-[#BBCCD7]" />
                  <span>Experience</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Freelance Web Developer</h3>
                <p className="text-xs text-[#BBCCD7]/70 mt-0.5">Self-Employed • 01/2024 – Present</p>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#BBCCD7] font-light leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B600A8] font-bold">•</span>
                    <span>Designed and developed 2 full-stack client projects using React.js and Node.js.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B600A8] font-bold">•</span>
                    <span>Delivered responsive, performant, and user-friendly web applications with clean code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B600A8] font-bold">•</span>
                    <span>Deployed production apps on cloud platforms including Vercel and Render.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#BBCCD7]/60">
                <span>Vercel • Render • Git</span>
                <span className="text-emerald-400 font-medium">Active Freelancer</span>
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.2} y={30} className="h-full">
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#BBCCD7] font-medium mb-3">
                  <GraduationCap size={16} className="text-[#BBCCD7]" />
                  <span>Education</span>
                </div>
                <h3 className="text-xl font-semibold text-white">BE in Computer Science</h3>
                <p className="text-xs text-[#BBCCD7]/70 mt-0.5">
                  Sathyabama Institute of Science &amp; Technology, Chennai
                </p>
                <div className="inline-block bg-white/10 text-white font-bold text-xs px-2.5 py-1 rounded-full mt-2">
                  CGPA: 8.40 / 10.00 (2023 – Present)
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-medium text-white">Higher Secondary Education (12th)</h4>
                  <p className="text-xs text-[#BBCCD7]/70 mt-0.5">Delhi Public School, Anand, Gujarat</p>
                  <p className="text-xs text-[#BBCCD7]/60 mt-1">02/2021 – 04/2023</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#BBCCD7]/60">
                <span>Anand, Gujarat • Chennai, Tamil Nadu</span>
              </div>
            </div>
          </FadeIn>

          {/* Achievements & Problem Solving */}
          <FadeIn delay={0.3} y={30} className="h-full">
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#BBCCD7] font-medium mb-3">
                  <Award size={16} className="text-[#BBCCD7]" />
                  <span>Honors &amp; DSA</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Competitive Problem Solver</h3>
                <p className="text-xs text-[#BBCCD7]/70 mt-0.5">300+ LeetCode • 100+ GeeksforGeeks</p>

                <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#BBCCD7] font-light">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-medium text-white block">🏆 Hackathon Winner</span>
                    <span className="text-xs text-[#BBCCD7]/80">
                      Innovator's Hackathon — Team of 5 building time-sensitive solutions.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-medium text-white block">🚀 Startup Fest 2025</span>
                    <span className="text-xs text-[#BBCCD7]/80">
                      Showcased BloodCare healthcare platform to industry leaders.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-medium text-white block">🎨 Design Team Leader</span>
                    <span className="text-xs text-[#BBCCD7]/80">
                      Mathematics Club, Sathyabama University (posters &amp; branding).
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#BBCCD7]/70">
                <Terminal size={14} />
                <span>Proficient: English &amp; Hindi</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Contact Links & Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email */}
          <div className="bg-[#181818] border border-white/15 rounded-2xl p-5 flex flex-col justify-between hover:border-white/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Mail size={20} />
              </div>
              <button
                onClick={copyEmail}
                className="text-xs flex items-center gap-1 text-[#BBCCD7] hover:text-white transition-colors cursor-pointer bg-white/5 px-2.5 py-1 rounded-md"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">Email</span>
              <a
                href="mailto:harsh.kumar60456@gmail.com"
                className="text-sm font-medium text-white hover:underline break-all mt-1 block"
              >
                harsh.kumar60456@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#181818] border border-white/15 rounded-2xl p-5 flex flex-col justify-between hover:border-white/40 transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
              <Phone size={20} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">Phone</span>
              <a
                href="tel:+917862816335"
                className="text-sm font-medium text-white hover:underline mt-1 block tracking-wide"
              >
                +91-7862816335
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-[#181818] border border-white/15 rounded-2xl p-5 flex flex-col justify-between hover:border-white/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#BBCCD7]">
                <LinkedinIcon size={20} />
              </div>
              <ExternalLink size={16} className="text-white/40" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/harsh-k-95327927a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:underline mt-1 block"
              >
                harsh-k-95327927a
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-[#181818] border border-white/15 rounded-2xl p-5 flex flex-col justify-between hover:border-white/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <GithubIcon size={20} />
              </div>
              <ExternalLink size={16} className="text-white/40" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">GitHub</span>
              <a
                href="https://github.com/Harsh06045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:underline mt-1 block"
              >
                github.com/Harsh06045
              </a>
            </div>
          </div>
        </div>

        {/* Location & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-[#BBCCD7]/60">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#BBCCD7]" />
            <span>Anand, Gujarat - 388001, India</span>
          </div>
          <div className="text-center sm:text-right">
            <span>Designed &amp; Built for Harsh Kumar • All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
