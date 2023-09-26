import { CardProps } from "../../interfaces";

export default function CardFront ({ formData }: CardProps) {
    return (
        <div className="card-front">
            <div className="card-brand">
                <div></div>
                <div></div>
            </div>

            <div className="card-info">
                <p className="card-number">{formData.cardNumber}</p>
                <p className="card-name">{formData.cardName}</p>
                <p className="card-date">{formData.expDate.month} / {formData.expDate.year}</p>
            </div>
        </div>
    )
}