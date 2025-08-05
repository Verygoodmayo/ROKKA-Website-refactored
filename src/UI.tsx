// src/UI.tsx
import { memo, useContext, useState } from 'react';
import HomePage from './components/Pages/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import { ViewContext } from './components/ViewContext';
import ModalWindow from './components/ModalWindow/ModalWindow';

const UI = memo(() => {
    // The state for the menu now lives here, isolated from the Canvas
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { parkViewRef, footerViewRef } = useContext(ViewContext);
    const [modalWindowState, setModalWindowState] = useState(false);
    const [modalContent] = useState<string>('about');

    return (
        <div className="ui-container">
            <Menu state={isMenuOpen} changeState={setIsMenuOpen} modalWindowState={modalWindowState} setModalWindowState={setModalWindowState} />
            <HomePage parkViewRef={parkViewRef} footerViewRef={footerViewRef} />
            <ModalWindow modalWindowState={modalWindowState} setModalWindowState={setModalWindowState} modalContent={modalContent} />
        </div>
    );
});

UI.displayName = 'UI';

export default UI;
