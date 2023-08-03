
interface IProps {
    message: string
}

export function ErrorMessage({message}: IProps) {
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    )
}