// src/components/Footer/footer.tsx
import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer bg-slate-950 text-slate-500 text-xs py-6 text-center border-t border-slate-900'>
      Copyright © {new Date().getFullYear()} Sailesh Karki. All rights reserved.
    </footer>
  );
};

export default Footer;