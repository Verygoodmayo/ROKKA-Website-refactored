import ParticlesGeometry from '../ParticlesGeomertry/ParticlesGeometry';
import vertexShader from '../../../assets/GLSL/vertex2.glsl?raw';
import fragmentShader from '../../../assets/GLSL/fragment2.glsl?raw';
import { Points, ShaderMaterial, Vector2 } from 'three';

import { useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useRef } from 'react';

interface ParticlesMeshProps {
    GLBModel: string | null;
    defaultUniforms: any;
    meshPosition: {x: number, y: number, z: number};
}

const ParticlesMesh = forwardRef<Points, ParticlesMeshProps>(({GLBModel, defaultUniforms, meshPosition}, ref) => {

    const materialRef = useRef<ShaderMaterial>(null);

    const { width, height } = useThree((state) => state.viewport);

    // Update the uniforms every frame
    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
            materialRef.current.uniforms.u_resolution.value = new Vector2(width, height);
        }
    });

    return (
        <points ref={ref} position={[meshPosition.x, meshPosition.y, meshPosition.z]} rotation={[0, Math.PI / 3, 0]}>

            <ParticlesGeometry GLBModel={GLBModel} />
    
            <shaderMaterial
                ref={materialRef}
                uniforms={
                    {
                        u_time: { value: 0 },
                        u_resolution: { value: new Vector2(width, height) },
                        u_mouse: { value: new Vector2(0, 0) },
                        ...defaultUniforms
                    }
                }
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </points>
    )
});

ParticlesMesh.displayName = 'ParticlesMesh';

export default ParticlesMesh;