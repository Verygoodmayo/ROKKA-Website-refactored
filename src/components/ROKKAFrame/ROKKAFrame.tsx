import Corner from './Corner/Corner'
import Filler from './Filler/Filler'
import './ROKKAFrame.scss'

export default function ROKKAFrame({content, contentWrapperClass}: {content: React.ReactNode, contentWrapperClass: string}) {
    return (
        <div className="rokka-frame">
            <div className='side side-left'>
                <Corner />
                <Filler />
            </div>

            <div className={`content-wrapper ${contentWrapperClass}`}>
                {content}
            </div>

            <div className='side side-right'>
                <Corner />
                <Filler />
            </div>
        </div>
    )
}