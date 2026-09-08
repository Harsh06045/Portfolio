import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText = ({ text, className = '', style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');
  let charCounter = 0;
  const wordData = words.map((word) => {
    const chars = word.split('').map((char) => ({
      char,
      index: charCounter++,
    }));
    charCounter++; // Account for the space between words
    return { word, chars };
  });
  const totalChars = Math.max(1, charCounter);

  return (
    <p ref={ref} className={`relative ${className}`} style={style}>
      {wordData.map((w, wIdx) => (
        <span key={wIdx}>
          <span className="inline-block">
            {w.chars.map(({ char, index }) => (
              <AnimatedChar
                key={index}
                char={char}
                index={index}
                total={totalChars}
                progress={scrollYProgress}
              />
            ))}
          </span>
          {wIdx < wordData.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  );
};

interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  progress: any;
}

const AnimatedChar = ({ char, index, total, progress }: AnimatedCharProps) => {
  const start = index / total;
  const end = Math.min(1, start + 1 / total);
  const opacity = useTransform(progress, [start, end], [0.45, 1]);

  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
};

export default AnimatedText;

