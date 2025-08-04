import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';

type Subscriber = (time: number) => void;

interface RenderContextType {
    subscribe: (callback: Subscriber) => () => void;
}

const RenderContext = createContext<RenderContextType | undefined>(undefined);

export const useRender = () => {
    const context = useContext(RenderContext);
    if (!context) {
        throw new Error('useRender must be used within a RenderProvider');
    }
    return context.subscribe;
};

export const RenderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const subscribers = useRef(new Set<Subscriber>());
    const frameId = useRef<number | null>(null);

    const subscribe = useCallback((callback: Subscriber) => {
        subscribers.current.add(callback);
        return () => {
            subscribers.current.delete(callback);
        };
    }, []);

    const animate = useCallback((time: number) => {
        subscribers.current.forEach(callback => callback(time));
        frameId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        frameId.current = requestAnimationFrame(animate);
        return () => {
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, [animate]);

    return (
        <RenderContext.Provider value={{ subscribe }}>
            {children}
        </RenderContext.Provider>
    );
};
