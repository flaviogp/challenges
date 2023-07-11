
import React, {useState, useEffect} from 'react';

import './style.css'
import Tip from './Tip'

import {InputData, Data} from '../../interfaces/index'

interface Percents {
    name: string;
    tip: number;
}

interface Props {
    setterData: (data: InputData) => void;
    data: Data
}

export default function SelectTipe(props: Props): React.JSX.Element {
    const [percents, setPercents] = useState<Percents[]>([]);

    useEffect(() =>{
        setPercents([
            {name: '5', tip: 5},
            {name: '10', tip: 10},
            {name: '15', tip: 15},
            {name: '20', tip: 20},
            {name: '25', tip: 25},
        ])
    }, [setPercents])


    const handleFocus = (el: HTMLInputElement): void => {
        el.value = ''
        const elements = document.querySelectorAll('.tip') as NodeListOf<HTMLElement>
        const inputs = document.querySelectorAll('input[type=radio]') as NodeListOf<HTMLInputElement>

        for(const element of elements){
            if(element.classList.contains('active')) element.classList.remove('active')
        }
        for(const input of inputs){
            if(input.checked) input.checked = false
        }

    }
    return(
        <div className="select-tip">
            <p>Select Tip %</p>
            <div className="input-content">
                {percents.map(item => <Tip name={item.name} tip={item.tip} key={item.tip} setterData={props.setterData} data={props.data}/> )}
                <input type="number" placeholder='Custom' onFocus={(e) => handleFocus(e.target)} onChange={e => props.setterData({inputName:'tip', inputValue: e.target.value})}/>
            </div>
        </div>
    )
}
