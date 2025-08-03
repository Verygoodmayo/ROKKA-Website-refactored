import { useMemo, useState, useEffect } from "react";
import { BufferGeometry, IcosahedronGeometry, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

interface ParticlesGeometryProps {
    GLBModel: string | null;
}

const defaultGeometry = new IcosahedronGeometry(100, 136);

export default function ParticlesGeometry({ GLBModel }: ParticlesGeometryProps) {
    const [geometry, setGeometry] = useState<BufferGeometry>(defaultGeometry);

    useEffect(() => {
        if (GLBModel) {
            const loader = new GLTFLoader();
            loader.load(
                GLBModel,
                (gltf) => {
                    const mesh = gltf.scene.children[0] as Mesh;
                    if (mesh && mesh.geometry) {
                        mesh.geometry.center();
                        setGeometry(mesh.geometry);
                    } else {
                        console.warn("GLB model loaded but no geometry found. Using default.");
                        setGeometry(defaultGeometry);
                    }
                },
                undefined,
                (error) => {
                    console.error('An error happened while loading the GLB model:', error);
                    setGeometry(defaultGeometry);
                }
            );
        } else {
            setGeometry(defaultGeometry);
        }
    }, [GLBModel]);

    const attributes = useMemo(() => {
        if (!geometry || !geometry.attributes.position) {
            return null;
        }

        const positionArray = geometry.attributes.position.array;
        const count = geometry.attributes.position.count;
        // console.log('positionArray', positionArray);
        // console.log('count', count);

        const positions = new Float32Array(count * 3);
        const reference = new Float32Array(count * 2);

        for (let i = 0; i < count; i++) {
            positions[i * 3 + 0] = GLBModel ? positionArray[i * 3 + 0] / 100 : positionArray[i * 3 + 0];
            positions[i * 3 + 1] = GLBModel ? positionArray[i * 3 + 1] / 100 : positionArray[i * 3 + 1];
            positions[i * 3 + 2] = GLBModel ? positionArray[i * 3 + 2] / 100 : positionArray[i * 3 + 2];

            reference[i * 2 + 0] = (i % count) / count;
            reference[i * 2 + 1] = Math.floor(i / count) / count;
        }
        return { positions, reference };
    }, [geometry]);

    if (!attributes) {
        return null;
    }

    return (
        <bufferGeometry key={GLBModel || 'default'}>
            <bufferAttribute
                attach="attributes-position"
                array={attributes.positions}
                count={attributes.positions.length / 3}
                itemSize={3}
                args={[attributes.positions, 3]}
            />
            <bufferAttribute
                attach="attributes-reference"
                array={attributes.reference}
                count={attributes.reference.length / 2}
                itemSize={2}
                args={[attributes.reference, 2]}
            />
        </bufferGeometry>
    );
}
