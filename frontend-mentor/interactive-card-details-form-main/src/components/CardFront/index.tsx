import { CardProps } from "../../interfaces";

export default function CardFront ({ formData }: CardProps) {
    const formattedNumber = `${formData.cardNumber.slice(0, 4)}  ${formData.cardNumber.slice(4, 8)}  ${formData.cardNumber.slice(8, 12)}  ${formData.cardNumber.slice(12, 16)}`
    const fomattedMonth = formData.expDate.month.length > 2 ? formData.expDate.month.slice(0, -1) : formData.expDate.month;
    const fomattedYear = formData.expDate.year.length > 2 ? formData.expDate.year.slice(0, -1) : formData.expDate.year;
    return (
        <div className="card-front">
            <div className="card-brand">
                <div></div>
                <div></div>
            </div>

            <div className="card-info">
                {/* <p className="card-number">{formData.cardNumber}</p> */}
                <p className="card-number">{formattedNumber}</p>
                <p className="card-name">{formData.cardName}</p>
                {/* <p className="card-date">{formData.expDate.month} / {formData.expDate.year}</p> */}
                <p className="card-date">{fomattedMonth} / {fomattedYear}</p>
            </div>
        </div>
    )
}