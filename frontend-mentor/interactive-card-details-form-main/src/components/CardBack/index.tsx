import { CardProps } from "../../interfaces";

export default function CardBack ({ formData }: CardProps) {
    return (
        <div className="card-back">
            <p className="cvc">{formData.cvc}</p>
        </div>
    )
}