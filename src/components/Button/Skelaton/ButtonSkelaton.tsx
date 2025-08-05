import './ButtonSkelaton.scss'

export default function ButtonSkelaton({text}: {text: string}) {
    return (
        <div className="button-skelaton">
            <span className="label">{text}</span>
        </div>
    )
}