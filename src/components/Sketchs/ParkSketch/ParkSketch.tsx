// src/components/Sketchs/ParkSketch/ParkSketch.tsx
import ParkModel from '../../../assets/GLB/ParkModel.glb?url'
import ParticlesSketch from '../ParticlesSketch/ParticlesSketch'
import './ParkSketch.scss'
import { forwardRef } from 'react'
import { Color, Points } from 'three';

interface ParkSketchProps {
    specialUniforms?: any;
    frustumCulled?: boolean;
}

const ParkSketch = forwardRef<Points, ParkSketchProps>(({ specialUniforms, frustumCulled }, ref) => {
    const baseUniforms = {
        u_color: { value: new Color('#131bff') },
        particleSize: { value: 100.1 },
    };
    
    return (
        <ParticlesSketch 
            ref={ref}
            GLBModel={ParkModel} 
            specialUniforms={{...baseUniforms, ...specialUniforms}} 
            frustumCulled={frustumCulled}
        />
    )
});

ParkSketch.displayName = 'ParkSketch';

export default ParkSketch;
