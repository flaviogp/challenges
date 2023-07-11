
import { useEffect } from 'react'
import './style.css'

import {InputData, Data} from '../../../interfaces/index'

interface Props {
    name: string,
    tip: number,
    setterData: (data: InputData) => void,
    data: Data
}
export default function Tip(props: Props): JSX.Element {

    const removeActiveClass = () => {
        const elements = document.querySelectorAll('.tip') as NodeListOf<HTMLElement>

        for(const element of elements){
            if(element.classList.contains('active')) element.classList.remove('active')
        }


    }
    const handleChange = (el: HTMLInputElement) => {
        removeActiveClass();
        const parentElement = el.parentElement;
        parentElement?.classList.add('active')
        const tipData = {inputName: 'tip' , inputValue: el.id}
        props.setterData(tipData)
        
    }

    
    useEffect(()=>{
        props.data.tip === 0 && removeActiveClass();
        const inputs = document.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>
        for (const input of inputs){
            input.checked = false
        }

    }, [props.data])
    

    return (
        <div className='tip'>
            <label htmlFor={props.name}>{props.tip}%</label>
            <input type="radio" name="check-percent" id={props.name} onChange={e => handleChange(e.target)}/>
        </div>
    )
}