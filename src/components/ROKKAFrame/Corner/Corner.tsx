import './Corner.scss'

const CornerSVG = () => {
    return (
    <svg className="cornerSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.71 30.71">
        <polygon className="fillLayer" points="31 31 31 1 .1 31 31 31"/>
        <line className="lineLayer" x1="1" y1="31" x2="31" y2=".1"/>
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