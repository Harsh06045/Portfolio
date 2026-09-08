import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';

interface MagnetProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

const Magnet = ({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  style,
  ...rest
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const transitionRef = useRef(inactiveTransition);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    const activationDistance = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < activationDistance) {
      transitionRef.current = activeTransition;
      x.set(distX / strength);
      y.set(distY / strength);
    } else {
      transitionRef.current = inactiveTransition;
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    transitionRef.current = inactiveTransition;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        x: springX,
        y: springY,
        willChange: 'transform',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
