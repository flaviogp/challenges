
interface IProps {
    src: string;
    alt: string;
    id: number
    setClassActive: (e: HTMLDivElement, id: number) => void
}

export function ProductImage(props: IProps) {
    return (
        <div className="product-image" id={String(props.id)} onClick={ e => props.setClassActive(e.currentTarget, props.id)}>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}