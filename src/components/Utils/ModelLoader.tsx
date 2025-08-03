import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useEffect } from "react";
import { BufferGeometry, Mesh } from "three";

export default function ModelLoader({GLBModelURL, setModel}: {GLBModelURL: string, setModel: (model: BufferGeometry) => void}) {

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(GLBModelURL, (gltf) => {
            const mesh = gltf.scene.children[0] as Mesh;
            if (mesh && mesh.geometry) {
                mesh.geometry.center();
                setModel(mesh.geometry);
            }
        });
    }, [GLBModelURL, setModel]);
    
}