// src/components/Footer/Footer.tsx
import { forwardRef, useEffect } from 'react';
import './Footer.scss'
import logotype from '../../assets/SVG/Logotype/Logotype_White.svg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LetsTalk from '../Button/LetsTalk/LetsTalk';
import ScheduleAMeeting from '../Button/ScheduleAMeeting/ScheduleAMeeting';

const Footer = forwardRef<HTMLDivElement>((_props, ref) => {


    useEffect(() => {
        console.log('Footer mounted');

        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.menu', {
            x: '-200%',
            duration: 0.15,
            ease: 'linear',

            scrollTrigger: {
                trigger: '.footer',
                start: '0%-=80px top',
                end: '0% top',
                // markers: true,
                toggleActions: 'play reverse play reverse',
            }
        });

    }, []);



    return (
        <div ref={ref} className="footer">
            <div className="top-section">


                <div className='info-section'>
                    
                        
                        {/* logotype */}
                        <div className='logotype'>
                            <img src={logotype} alt="logo" />
                        </div>
                        {/* action buttons */}
                        <div className='action-buttons'>
                            <LetsTalk />
                            <ScheduleAMeeting />
                        </div>
                        {/* social media */}
                        <div className='social-media'>
                            <a href="/linkedin">LinkedIn</a>
                            <a href="/twitter">Twitter</a>
                            <a href="/instagram">Instagram</a>
                        </div>
                        {/* contact (email, phone, address) */}
                        <div className='contact'>
                            <a href="mailto:info@example.com">info@example.com</a>
                            <a href="tel:+1234567890">+1234567890</a>
                            <a href="/address">123 Main St, Anytown, USA</a>
                        </div>
                        {/* copyright */}
                        {/* <div className='copyright'>
                            <p>© 2025 Your Company. All rights reserved.</p>
                        </div> */}


                    
                </div>

                <div className='products-section'>
                    <div className='nav-section core-technology'>
                        Core Technology
                        
                    </div>

                    <div className='nav-section plugins'>
                        Plugins
                        
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                
                    <a href="/legal">Legal</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/cookie-policy">Cookie Policy</a>
                    <a href="/about">About</a>
                
            </div>
        </div>
    )
});

Footer.displayName = 'Footer';

export default Footer;
