import './BackgroundSketch.scss'
import ParticlesSketch from "../ParticlesSketch/ParticlesSketch";
import { forwardRef } from 'react';
import { Color, Points } from 'three';

interface BackgroundSketchProps {
    specialUniforms?: {
        [key: string]: { value: any };
    };
}

const BackgroundSketch = forwardRef<Points, BackgroundSketchProps>(({ specialUniforms }, ref) => {
    let uniforms = {
        frequency: { value: 0.012 },
        amplitude: { value: 0.366 },
        maxDistance: { value: 0.243 },
        particleSize: { value: 100.12 },
        u_color: { value: new Color('#ffffff') },
    }
    if (specialUniforms) {
        uniforms = { ...uniforms, ...specialUniforms }
    }

    return (
        <ParticlesSketch 
            ref={ref}
            GLBModel={null} 
            specialUniforms={uniforms} 
            position={[0, 0, 0]}
        />
    );
});

BackgroundSketch.displayName = 'BackgroundSketch';

export default BackgroundSketch;
