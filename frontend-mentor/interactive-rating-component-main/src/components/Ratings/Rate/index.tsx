import { ChangeEvent } from "react"

interface RateProps {
    num: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}


const Rate = ({num, handleChange}: RateProps) => {

    return (
            <label htmlFor={num}>
                <input type="radio" name={`rate`} id={num} className="rate" onChange={e => handleChange(e)}/>
            </label>

    )
}

export default Rate