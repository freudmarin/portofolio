import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
   return (
      <motion.footer
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, ease: 'easeOut' }}
         style={{ textAlign: 'center', padding: '2rem 0', fontSize: '1.25rem', color: '#888' }}
      >
         &copy; {new Date().getFullYear()} Marin Dulja &mdash; Portfolio
      </motion.footer>
   );
};

export default Footer;