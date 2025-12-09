import React from 'react';
import { motion } from 'framer-motion';

type AnimationWrapperProps = {
  children: React.ReactNode;
  delay?: number;
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay }}
    style={{ willChange: 'opacity, transform' }}
  >
    {children}
  </motion.div>
);

export default AnimationWrapper;