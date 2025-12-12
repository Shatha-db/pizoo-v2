'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
  style?: React.CSSProperties;
}

export default function AnimatedDiv({
  children,
  className,
  initial,
  animate,
  whileInView,
  transition,
  viewport,
  style,
}: AnimatedDivProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      style={style}
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
}
