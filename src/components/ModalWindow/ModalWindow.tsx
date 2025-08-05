import './ModalWindow.scss';
import { useEffect } from "react";
import BackgroundSketch from "../Sketchs/BackgroundSketch/BackgroundSketch";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import ModalWindowContentManager from "./ModalWindowContentManager";
import gsap from "gsap";

export default function ModalWindow({modalWindowState, setModalWindowState, modalContent}: {modalWindowState: boolean, setModalWindowState: (state: boolean) => void, modalContent: string}) {

    useEffect(() => {
        const ModalWindowSlideAnimationTimeline = gsap.timeline({
            paused: true,
            onComplete: () => {
                console.log('ModalWindowSlideAnimationTimeline complete');
                setModalWindowState(true);
            }
        });
        ModalWindowSlideAnimationTimeline.to('.modal-window', {
            x: 0,
            duration: 1,
            ease: 'power2.inOut'
        });

        if (modalWindowState) {
            ModalWindowSlideAnimationTimeline.play();
        } else {
            ModalWindowSlideAnimationTimeline.reverse();
        }
    }, [modalWindowState]);

    return (
        <div className='modal-window'>
            {
            <ModalWindowContentManager currentContentName={modalContent} setModalWindowState={setModalWindowState} />
            }
            
            <div className="modal-window-background">
                <Canvas className="modal-window-background-canvas">
                    <BackgroundSketch specialUniforms={{
                        u_color: { value: new Color('#131bff') }
                    }}/>
                </Canvas>
            </div>
        </div>
    )
}