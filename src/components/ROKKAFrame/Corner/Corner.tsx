import './Corner.scss'

const CornerSVG = () => {
    return (
    <svg className="cornerSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.71 30.71">
        <polygon className="fillLayer" points="30.35 30.35 30.35 .35 .35 30.35 30.35 30.35"/>
        <line className="lineLayer" x1=".35" y1="30.35" x2="30.35" y2=".35"/>
    </svg>
    )
}

export default function Corner() {
    return (
        <div className="corner">
            <CornerSVG />
        </div>
    )
}