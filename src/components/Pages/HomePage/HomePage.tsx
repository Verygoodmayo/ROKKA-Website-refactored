import DIagramSection from "./DiagramSection/DIagramSection";
import HeroSection from "./HeroSection/HeroSection";
import ROKKASection from "./ROKKASection/ROKKASection";
import ValuesSection from "./ValuesSection/ValuesSection";
import ParkSketch from "../../Sketchs/ParkSketch/ParkSketch";
import gsap from "gsap";
import { useLayoutEffect, useMemo, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Points } from "three";
import { Canvas } from "@react-three/fiber";
import './HomePage.scss';

export default function HomePage() {

    const [mesh, setMesh] = useState<Points | null>(null);
    
    const meshPosition = useMemo(() => ({
        x: 5,
        y: 0,
        z: -80
    }), []);

    useLayoutEffect(() => {
        if (!mesh) {
            return;
        }
        
        gsap.registerPlugin(ScrollTrigger);

        const masterTimeline = gsap.timeline();
        masterTimeline.to(mesh.position, {
            z: 80,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                markers: true,
            }
        })
        
    }, [mesh])


    return (
        <div className="home-page page">
            <Canvas className="home-page-canvas">
                <ParkSketch ref={setMesh} meshPosition={meshPosition} />
            </Canvas>
            <div className="home-page-content">
                <HeroSection />
                <ValuesSection />
                <ROKKASection />
                <DIagramSection />
            </div>
        </div>
    )
}
