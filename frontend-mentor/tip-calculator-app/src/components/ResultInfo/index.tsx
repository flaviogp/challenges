
import './style.css';

import {Data} from '../../interfaces/index'


interface Props {
    title: string
    data: Data
}

export default function ResultInfo(props: Props) {
    
const tipAmount = (data: Data): string => {
    if(data.bill === 0 || data.tip === 0 ||  data.numberOfPeople === 0 ) return '0'
    const tipPercent = data.tip / 100;
    const result = (data.bill * tipPercent) / data.numberOfPeople
    return result.toFixed(2)
}

const total = (data: Data): string  => {
    if(data.bill === 0 ||  data.numberOfPeople === 0 ) return '0'
    const tip = tipAmount(data);
    const result = (data.bill / data.numberOfPeople) + Number(tip)
    return result.toFixed(2)
}

    return (
        <div className="result-info">
            <div className="info">
                <h3>{props.title}</h3>
                <p>/ person</p>
            </div>
            <div className="calculate">
                <p>
                    {
                        props.title === "Tip Amount" ?
                        `$${tipAmount(props.data)}` :
                        `$${total(props.data)}`
                    }
                </p>
            </div>
        </div>
    )
}

