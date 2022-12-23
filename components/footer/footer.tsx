import React, { memo } from 'react';
import FooterLevel_1 from './footer-level-1';
import FooterLevel_2 from './footer-level-2';

const Footer = memo(() => {
  return (
    <footer className="mt-10">
      <FooterLevel_1 />
      <FooterLevel_2 />
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
