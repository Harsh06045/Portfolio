import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Check, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('harsh.kumar60456@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#141414] border-2 border-[#D7E2EA]/30 rounded-[32px] p-6 sm:p-8 max-w-lg w-full text-[#D7E2EA] shadow-2xl relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
              Get In Touch
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
              Harsh Kumar
            </h3>
            <p className="text-xs sm:text-sm text-[#BBCCD7] mt-1 leading-relaxed">
              Full-Stack Developer • Java &amp; DSA • React &amp; Node.js
            </p>

            {/* Contact list */}
            <div className="mt-6 space-y-3">
              {/* Email */}
              <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B600A8]/20 flex items-center justify-center text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">Email</span>
                    <a
                      href="mailto:harsh.kumar60456@gmail.com"
                      className="text-xs sm:text-sm font-medium text-white hover:underline"
                    >
                      harsh.kumar60456@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <a
                href="tel:+917862816335"
                className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:border-white/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7621B0]/20 flex items-center justify-center text-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">Phone</span>
                    <span className="text-xs sm:text-sm font-medium text-white tracking-wider">+91-7862816335</span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-white/40" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harsh-k-95327927a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:border-white/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-medium text-white">linkedin.com/in/harsh-k-95327927a</span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-white/40" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Harsh06045"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:border-white/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#BBCCD7]/60 block font-medium">GitHub</span>
                    <span className="text-xs sm:text-sm font-medium text-white">github.com/Harsh06045</span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-white/40" />
              </a>
            </div>

            {/* Location footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#BBCCD7]/70">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>Anand, Gujarat - 388001</span>
              </div>
              <span className="text-emerald-400">Available immediately</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
