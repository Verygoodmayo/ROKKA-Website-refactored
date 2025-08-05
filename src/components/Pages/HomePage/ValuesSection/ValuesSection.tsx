import { useState } from 'react';
import './ValuesSection.scss'
import { Values, ValuesHeader, ValuesParagraph } from './Content/ValueSectionContent';
import { ArrowLeftIcon } from '../../../Design/Icons/ArrowLeftIcon/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../Design/Icons/ArrowRightIcon/ArrowRightIcon';


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
                        <ArrowLeftIcon />
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
                        <ArrowRightIcon />
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
