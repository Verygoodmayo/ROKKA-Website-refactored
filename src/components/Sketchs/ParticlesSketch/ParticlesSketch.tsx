import ParticlesMesh from "../ParticlesMesh/ParticlesMesh";
import './ParticlesSketch.scss'
import { Points } from "three";
import { forwardRef } from "react";

interface ParticlesSketchProps {
    GLBModel: string | null;
    specialUniforms: any;
    position?: [number, number, number];
    frustumCulled?: boolean;
}

const ParticlesSketch = forwardRef<Points, ParticlesSketchProps>((props, ref) => {
    return (
        <ParticlesMesh 
            ref={ref}
            GLBModel={props.GLBModel}
            specialUniforms={props.specialUniforms}
            position={props.position}
            frustumCulled={props.frustumCulled}
        />
    )
});

ParticlesSketch.displayName = 'ParticlesSketch';

export default ParticlesSketch;
