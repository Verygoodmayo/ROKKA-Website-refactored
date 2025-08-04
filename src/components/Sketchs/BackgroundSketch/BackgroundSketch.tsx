import './BackgroundSketch.scss'
import ParticlesSketch from "../ParticlesSketch/ParticlesSketch";
import { forwardRef } from 'react';
import { Color, Points } from 'three';

const BackgroundSketch = forwardRef<Points>((_props, ref) => {
    const specialUniforms = {
        particleSize: { value: 50.12 },
        frequency: { value: 0.012 },
        amplitude: { value: 0.366 },
        maxDistance: { value: 0.243 },
        u_color: { value: new Color('#ffffff') },
    }

    return (
        <ParticlesSketch 
            ref={ref}
            GLBModel={null} 
            specialUniforms={specialUniforms} 
            position={[0, 0, 0]}
        />
    );
});

BackgroundSketch.displayName = 'BackgroundSketch';

export default BackgroundSketch;
