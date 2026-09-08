interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

const ContactButton = ({ onClick, className = '', label = 'Contact Me' }: ContactButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'mailto:harsh.kumar60456@gmail.com';
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest cursor-pointer transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  );
};

export default ContactButton;
