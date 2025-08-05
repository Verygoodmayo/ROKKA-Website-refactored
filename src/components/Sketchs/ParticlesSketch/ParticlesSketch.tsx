import ParticlesMesh from "../ParticlesMesh/ParticlesMesh";
import './ParticlesSketch.scss'
import { Points, Vector3 } from "three";
import { forwardRef } from "react";
import { useThree } from "@react-three/fiber";

interface ParticlesSketchProps {
    GLBModel: string | null;
    specialUniforms: any;
    position?: [number, number, number];
    rotation?: [number, number, number];
    frustumCulled?: boolean;
    cameraPosition: Vector3;
}

const ParticlesSketch = forwardRef<Points, ParticlesSketchProps>((props, ref) => {
    const { camera } = useThree();
    return (
        <ParticlesMesh 
            ref={ref}
            GLBModel={props.GLBModel}
            specialUniforms={props.specialUniforms}
            position={props.position}           
            rotation={props.rotation}
            cameraPosition={camera.position}
            frustumCulled={props.frustumCulled}
        />
    )
});

ParticlesSketch.displayName = 'ParticlesSketch';

export default ParticlesSketch;
