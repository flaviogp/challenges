
interface TextContentProps {
    finished?: boolean
    title: string;
    text: string;
}

const TextContent = ({finished = false, title, text}: TextContentProps) => {
    return(
        <div className={finished ? 'text-content thanks-text': 'text-content'}>
            <h2> {title} </h2>
            <p> {text} </p>
        </div>
    )
}

export default TextContent