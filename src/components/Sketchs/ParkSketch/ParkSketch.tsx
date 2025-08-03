import { Color, Points, Vector3 } from 'three'
import ParkModel from '../../../assets/GLB/ParkModel.glb?url'
import ParticlesSketch from '../ParticlesSketch/ParticlesSketch'
import './ParkSketch.scss'
import { memo, forwardRef, useMemo } from 'react'

interface ParkSketchProps {
    meshPosition: {x: number, y: number, z: number};
}

const ParkSketch = memo(forwardRef<Points, ParkSketchProps>((props, ref) => {

    const specialUniforms = useMemo(() => ({
        frequency: { value: 100. },
        amplitude: { value: 20. },
        maxDistance: { value: 25. },

        particleSize: { value: 100.1 },
        u_color: { value: new Color('#ff0000') },
        colorIntensity: { value: 0.01 },

        noiseOffset: { value: new Vector3(0, 0, 0) },
        noiseSeed: { value: Math.random() },
    }), []);

    return (
        <div className="park-sketch">
            <ParticlesSketch 
                ref={ref}
                className="park-sketch" 
                GLBModel={ParkModel} 
                specialUniforms={specialUniforms} 
                meshPosition={props.meshPosition}
            />
        </div>
    )
}));

ParkSketch.displayName = 'ParkSketch';

export default ParkSketch;