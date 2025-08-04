// src/UI.tsx
import { memo, useContext, useState } from 'react';
import HomePage from './components/Pages/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import { ViewContext } from './components/ViewContext';

const UI = memo(() => {
    // The state for the menu now lives here, isolated from the Canvas
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { parkViewRef, footerViewRef } = useContext(ViewContext);

    return (
        <div className="ui-container">
            <Menu state={isMenuOpen} changeState={setIsMenuOpen} />
            <HomePage parkViewRef={parkViewRef} footerViewRef={footerViewRef} />
        </div>
    );
});

UI.displayName = 'UI';

export default UI;
