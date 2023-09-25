import { useState } from "react";

export interface FormData{
    cardName: string;
    cardNumber: string;
    expDate: {
        month: string;
        year: string;
    }
    cvc: string
}

export default function Form () {
    const [formData, setFormData] = useState()
    return(
        <form action="#" className="form">
            <label htmlFor="name">
                <p>CARDHOLDER NAME</p>
                <input type="text" name="name" id="cardhold-name" placeholder="e.g. Jane Appleseed" />
            </label>
            <label htmlFor="number">
                <p>CARD NUMBER</p>
                <input type="number" name="number" id="card-number" placeholder="e.g. 1234 5678 9123 0000" />
            </label>
            <label htmlFor="date">
                <p>EXP. DATE (MM/YY)</p>
                <div>
                    <input type="number" name="date" id="month"  placeholder="MM"/>
                    <input type="number" name="date" id="year" placeholder="YY"/>
                </div>
            </label>
            <label htmlFor="cvc">
                <p>CVC</p>
                <input type="number" name="cvc" id="cvc" placeholder="e.g. 123"/>
            </label>

            <button type="submit">
                confirm
            </button>
        </form>
    )
}