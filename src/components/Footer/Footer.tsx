// src/components/Footer/Footer.tsx
import { forwardRef } from 'react';
import './Footer.scss'

const Footer = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <div ref={ref} className="footer">
            {/* Footer HTML content can go here */}
        </div>
    )
});

Footer.displayName = 'Footer';

export default Footer;
