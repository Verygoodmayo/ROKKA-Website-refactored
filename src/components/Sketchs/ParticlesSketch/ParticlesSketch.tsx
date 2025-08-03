import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import ParticlesMesh from "../ParticlesMesh/ParticlesMesh";
import './ParticlesSketch.scss'
import { Color, Points, Vector3 } from "three";
import { memo, forwardRef } from "react";

interface ParticlesSketchProps {
    className: string;
    GLBModel: string | null;
    specialUniforms: any;
    meshPosition: {x: number, y: number, z: number};
}

const defaultUniforms = {
    frequency: { value: 10. },
    amplitude: { value: 20. },
    maxDistance: { value: 25. },

    particleSize: { value: 200.1 },
    u_color: { value: new Color('#3705ff') },
    colorIntensity: { value: 0.01 },

    noiseOffset: { value: new Vector3(0, 0, 0) },
    noiseSeed: { value: Math.random() },
}

const ParticlesSketch = memo(forwardRef<Points, ParticlesSketchProps>((props, ref) => {
    return (
        <div className={`particles-sketch ${props.className}`}>
            <Canvas>
                {/* <OrbitControls /> */}
                <ParticlesMesh 
                    ref={ref}
                    GLBModel={props.GLBModel}
                    defaultUniforms={props.specialUniforms || defaultUniforms}
                    meshPosition={props.meshPosition}
                />
            </Canvas>
        </div>
    )
}));

ParticlesSketch.displayName = 'ParticlesSketch';

export default ParticlesSketch;