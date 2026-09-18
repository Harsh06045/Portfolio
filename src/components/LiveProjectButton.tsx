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
      className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-4 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm text-[#D7E2EA] font-medium uppercase tracking-wider cursor-pointer bg-transparent hover:bg-[#D7E2EA]/10 hover:border-white transition-all duration-200 whitespace-nowrap active:scale-95"
    >
      {label}
    </a>
  );
};

export default LiveProjectButton;
