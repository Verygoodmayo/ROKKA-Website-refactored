import ParticlesSketch from "../ParticlesSketch/ParticlesSketch";

export default function BackgroundSketch() {
    return (
        <div className="background-sketch">
           <ParticlesSketch className="background-sketch-particles" GLBModel={null} />
        </div>
    )
}