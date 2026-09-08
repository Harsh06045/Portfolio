interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
}

const LiveProjectButton = ({
  href = 'https://github.com/Harsh06045',
  label = 'Live Project',
  onClick,
}: LiveProjectButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest cursor-pointer bg-transparent hover:bg-[#D7E2EA]/10 hover:border-white transition-all duration-200"
    >
      {label}
    </a>
  );
};

export default LiveProjectButton;
