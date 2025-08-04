// src/App.tsx
import { memo, useRef, type RefObject, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { View } from '@react-three/drei';
import gsap from 'gsap';

import UI from './UI';
import { ViewContext } from './components/ViewContext';
import { ParkScene, FooterScene } from './components/Pages/HomePage/HomePage';

// This component connects GSAP to the R3F render loop
const RenderManager = () => {
    const { invalidate } = useThree();

    useEffect(() => {
        const onResize = () => invalidate();
        window.addEventListener('resize', onResize);

        gsap.ticker.lagSmoothing(false);
        gsap.ticker.add(invalidate);

        return () => {
            window.removeEventListener('resize', onResize);
            gsap.ticker.remove(invalidate);
        };
    }, [invalidate]);

    return null;
};

const App = memo(() => {
    const parkViewRef = useRef<HTMLDivElement>(null!);
    const footerViewRef = useRef<HTMLDivElement>(null!);

    return (
        <ViewContext.Provider value={{ parkViewRef, footerViewRef }}>
            <div className="app-container">
                <UI />
                <Canvas
                    frameloop="demand"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                    }}
                    eventSource={document.getElementById('root')!}
                    className="main-canvas"
                >
                    <RenderManager />
                    <View track={parkViewRef as RefObject<HTMLElement>}>
                        <ParkScene />
                    </View>
                    <View track={footerViewRef as RefObject<HTMLElement>}>
                        <FooterScene />
                    </View>
                </Canvas>
            </div>
        </ViewContext.Provider>
    );
});

App.displayName = 'App';

export default App;
