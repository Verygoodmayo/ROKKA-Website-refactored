import { useState } from 'react';
import './ValuesSection.scss'
import { Values, ValuesHeader, ValuesParagraph } from './Content/ValueSectionContent';


export default function ValuesSection() {

    const [currentValueIndex, setCurrentValueIndex] = useState(0);

    const handleNavLeft = () => {
        if (currentValueIndex > 0) {
            setCurrentValueIndex(currentValueIndex - 1);
        }
        if (currentValueIndex === 0) {
            setCurrentValueIndex(Values.length - 1);
        }
    }

    const handleNavRight = () => {
        if (currentValueIndex < Values.length - 1) {
            setCurrentValueIndex(currentValueIndex + 1);
        } 
        if (currentValueIndex === Values.length - 1) {
            setCurrentValueIndex(0);
        }
    }

    return (
        <div className="values-section section">
            
            <div className="values-section-content">

                <div className='values-header'>
                    {ValuesHeader}
                </div>

                <div className='values-content-wrapper'>
                    <div className='values-info section value-section'>
                        <div className='values-meta-info'>{ValuesParagraph}</div>
                        <div className='value-index'>{currentValueIndex + 1}</div>
                    </div>
                    <div className='nav-left nav-button' onClick={handleNavLeft}>
                        <div className='nav-left-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="M19 12H5"></path><path d="M12 19L5 12"></path><path d="M12 5l7 7"></path></svg>
                        </div>
                    </div>


                    <div className='values-content section value-section'>
                        <div className='values-content-title'>
                            {Values[currentValueIndex].title}
                        </div>
                        <div className='values-content-description'>
                            {Values[currentValueIndex].description}
                        </div>
                    </div>


                    <div className='nav-right nav-button' onClick={handleNavRight}>
                        <div className='nav-right-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="M12 5l7 7"></path><path d="M12 19L5 12"></path></svg>
                        </div>
                    </div>

                    <div className='values-image-wrapper'>
                        <div className='values-image-container'>
                            <img src={Values[currentValueIndex].image} alt="Values" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
