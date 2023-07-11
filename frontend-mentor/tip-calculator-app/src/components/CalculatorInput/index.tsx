
import './style.css'
import {FaDollarSign} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'

import {InputData} from '../../interfaces/index'

interface Props {
    fieldName: string;
    icon: string;
    inputName: string;
    setterData: (data: InputData) => void;
}

export function CalculatorInput(props: Props): JSX.Element {

    const handleChange = (el: HTMLInputElement): void => {
        const inputData = {inputName: el.name, inputValue: el.value}
        return props.setterData(inputData)
    }

    return(
        <div className="input-container">
            <p>{props.fieldName}</p>
            <label htmlFor={props.inputName}>
                {
                    props.icon === 'dollar' ?
                        <FaDollarSign className="dollar-icon" />
                    :
                        <FaUserAlt className="dollar-icon" />
                }
                <input type="number" 
                    name={props.inputName} 
                    id={props.inputName} 
                    placeholder="0" 
                    onChange={e => handleChange(e.target)}/>
            </label>
        </div>
    )
}