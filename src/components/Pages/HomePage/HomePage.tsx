// src/components/Pages/HomePage/HomePage.tsx
import { memo, useRef, useEffect, useMemo } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Points } from 'three';

import DIagramSection from './DiagramSection/DIagramSection';
import HeroSection from './HeroSection/HeroSection';
import ROKKASection from './ROKKASection/ROKKASection';
import ValuesSection from './ValuesSection/ValuesSection';
import Footer from '../../Footer/Footer';
import ParkSketch from '../../Sketchs/ParkSketch/ParkSketch';
import BackgroundSketch from '../../Sketchs/BackgroundSketch/BackgroundSketch';
import './HomePage.scss';

// The self-contained scene for the park sketch with YOUR restored animation
export const ParkScene = () => {
    const meshRef = useRef<Points>(null);
    const cameraRef = useRef<any>(null);

    const uniforms = useMemo(() => ({
        frequency: { value: 0.022 },
        amplitude: { value: 1.566 },
        maxDistance: { value: 0.243 },
    }), []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (cameraRef.current && meshRef.current) {
            const camera = cameraRef.current;
            
            gsap.set(camera.position, { z: 200 });
            gsap.set(uniforms.frequency, { value: 0.022 });
            gsap.set(uniforms.amplitude, { value: 1.566 });
            gsap.set(uniforms.maxDistance, { value: 0.243 });

            const masterTimeline = gsap.timeline();
            const cameraTransitionDuration = 10;
            const particleTransitionDuration = 4.5;

            const cameraTransitionTimeline = gsap.timeline()
                .to(camera.position, {
                    z: -200,
                    duration: cameraTransitionDuration,
                    ease: 'power2.inOut'
                }, 0)
                .to(camera.rotation, {
                    y: Math.PI * 1,
                    duration: 2,
                    ease: 'power2.inOut'
                }, '>-5.5');

            const particleTransitionToOrderTimeline = gsap.timeline()
                .to(uniforms.frequency, { value: 0.022, duration: particleTransitionDuration, ease: 'power2.inOut' })
                .to(uniforms.amplitude, { value: 1.952, duration: particleTransitionDuration, ease: 'power2.inOut' }, '<')
                .to(uniforms.maxDistance, { value: 2.504, duration: particleTransitionDuration, ease: 'power2.inOut' }, '<');
            const particleTransitionToChaosTimeline = gsap.timeline()
                .to(uniforms.frequency, { value: 0.011, duration: particleTransitionDuration, ease: 'power2.inOut' })
                .to(uniforms.amplitude, { value: 1.566, duration: particleTransitionDuration, ease: 'power2.inOut' }, '<')
                .to(uniforms.maxDistance, { value: 0.243, duration: particleTransitionDuration, ease: 'power2.inOut' }, '<');
            
            masterTimeline
                .add(cameraTransitionTimeline, 0)
                .add(particleTransitionToOrderTimeline, 0)
                .add(particleTransitionToChaosTimeline, ">-1");

            ScrollTrigger.create({
                trigger: '.page-content',
                start: 'top top',
                end: '+=50% bottom',
                scrub: 0.5,
                markers: true,
                animation: masterTimeline,
            });
        }
    }, [uniforms]);

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />
            <ParkSketch ref={meshRef} specialUniforms={uniforms} frustumCulled={false}/>
        </>
    );
};

// The self-contained scene for the footer background
export const FooterScene = () => {
    return (
        <>
            <color attach="background" args={['#131bff']} />
            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />
            <BackgroundSketch />
        </>
    );
};

interface HomePageProps {
    parkViewRef: React.RefObject<HTMLDivElement>;
    footerViewRef: React.RefObject<HTMLDivElement>;
}

const HomePage = memo(({ parkViewRef, footerViewRef }: HomePageProps) => {
    return (
        <div className="home-page-container">
            <div ref={parkViewRef} className="park-fixed-viewport" />
            <div className="page-content">
                <HeroSection />
                <ROKKASection />
                <ValuesSection />
                <DIagramSection />
                <Footer ref={footerViewRef} />
            </div>
        </div>
    );
});

HomePage.displayName = 'HomePage';

export default HomePage;
