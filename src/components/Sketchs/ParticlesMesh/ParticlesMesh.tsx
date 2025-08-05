import ParticlesGeometry from '../ParticlesGeomertry/ParticlesGeometry';
import vertexShader from '../../../assets/GLSL/vertex2.glsl?raw';
import fragmentShader from '../../../assets/GLSL/fragment2.glsl?raw';
import { Color, Points, ShaderMaterial, Vector2, Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useMemo, useRef } from 'react';

interface ParticlesMeshProps {
    GLBModel: string | null;
    specialUniforms: any;
    position?: [number, number, number];
    rotation?: [number, number, number];
    frustumCulled?: boolean;
    cameraPosition: Vector3;
}

const ParticlesMesh = forwardRef<Points, ParticlesMeshProps>(({ GLBModel, specialUniforms, position, rotation, frustumCulled }, ref) => {
    const materialRef = useRef<ShaderMaterial>(null);
    const { viewport, camera } = useThree();

    const uniforms = useMemo(() => {
        const defaultUniforms = {
            frequency: { value: 0.022 },
            amplitude: { value: 1.346 },
            maxDistance: { value: 0.133 },
            particleSize: { value: 200.1 },
            u_color: { value: new Color('#3705ff') },
            colorIntensity: { value: 0.01 },
            noiseOffset: { value: new Vector3(0, 0, 0) },
            noiseSeed: { value: Math.random() },
            u_cameraPosition: { value: new Vector3(0, 0, 0) },
            u_near: { value: 150.5 },
            u_far: { value: 200.0 }
        };

        return {
            u_time: { value: 0 },
            u_resolution: { value: new Vector2(viewport.width, viewport.height) },
            u_mouse: { value: new Vector2(0, 0) },
            ...defaultUniforms,
            ...specialUniforms,
        }
    }, [specialUniforms, viewport.width, viewport.height]);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
            materialRef.current.uniforms.u_cameraPosition.value = camera.position;
        }
    });

    return (
        <points ref={ref} position={position} rotation={rotation} frustumCulled={frustumCulled}>
            <ParticlesGeometry GLBModel={GLBModel} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </points>
    );
});

ParticlesMesh.displayName = 'ParticlesMesh';

export default ParticlesMesh;
