import { ChangeEvent, useState } from "react";
import { FormProps } from "../../interfaces";


export default function Form ({ setFormData, formData }: FormProps) {
    const [ errors, setErrors ] = useState<Array<string>>([])


    const changeFormData = (key: string, e: ChangeEvent<HTMLInputElement>) => { 
        const value = e.target.value

        formatInputsValueSize(e.target.id, e)

        if(key === 'month' || key === 'year') return changeExpDate(key, value);

        return setFormData({...formData, [key]: value})

    }
    
    const changeExpDate = (key: string, value: string) => {
        return setFormData({...formData, expDate: {...formData.expDate, [key]: value}})
    }

    const formatInputsValueSize = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        const elementTarget= e.target
        if(id === 'month' || id === 'year'){
            if(elementTarget.value.length > 2) return elementTarget.value = elementTarget.value.slice(0, -1)
        }
        if(id === 'cvc') {
            if(elementTarget.value.length > 3) return elementTarget.value = elementTarget.value.slice(0, -1)
        }
        if(id === 'card-number') {
            if(elementTarget.value.length > 16) return elementTarget.value = elementTarget.value.slice(0, -1)
        }

    }

    const getErrors = (e: React.FocusEvent<HTMLInputElement>) => {
        setErrors([])
        const errorElemets = document.querySelectorAll('.error')
        for(const error of errorElemets){
            error.remove()
        }
        
        const el = e.target

        if(el.id === 'cardhold-name'){
            if(el.value.length < 3) {
                const err = 'O nome precisa ter ao menos 3 caracteres!';
                return setErrors([...errors, err])
            }
        }
        if(el.id === 'card-number'){
            if(el.value.length < 16){
                const err = 'Número do cartão inválido';
                return setErrors([...errors, err])
            }
        }
        if(el.id === 'month'){
            if(el.value.length === 0 ){
                const err = 'Campo mês não pode estar vazio';
                return setErrors([...errors, err])
            }
            if(Number(el.value) > 12 || el.value.length < 2 || el.value === '00'){
                const err = 'Mês inválido';
                return setErrors([...errors, err])
            }
        }
        
        if(el.id === 'year'){
            if(el.value.length === 0 ){
                const err = 'Campo ano não pode estar vazio';
                return setErrors([...errors, err])
            }
            const currentYear = new Date().getFullYear().toString().slice(2, 4)
            if(Number(el.value) < Number(currentYear)){
                const err = 'Ano inválido';
                return setErrors([...errors, err])
            }
        }
        
        if(el.id === 'cvc') {
            if(el.value.length === 0 ){
                const err = 'Campo cvc não pode estar vazio';
                return setErrors([...errors, err])
            }
            
            if(el.value.length < 3){
                const err = 'Cvc inválido';
                return setErrors([...errors, err])
            }
        }

    }

    console.log(errors)
    return(
        <div className="form-container">
            {errors.length >= 1 && errors.map(err => <p className="error" key={err}>{err}</p>)}
            <form action="#" className="form">
                <label htmlFor="name">
                    <p>CARDHOLDER NAME</p>
                    <input 
                        type="text" 
                        name="name"
                        id="cardhold-name" 
                        placeholder="e.g. Jane Appleseed"
                        onChange={(e) => changeFormData('cardName', e)}
                        onBlur={e => getErrors(e)}
                        />
                </label>
                <label htmlFor="number">
                    <p>CARD NUMBER</p>
                    <input 
                        type="number" 
                        name="number" 
                        id="card-number" 
                        placeholder="e.g. 1234 5678 9123 0000"
                        onChange={(e) => changeFormData('cardNumber', e)}
                        onBlur={e => getErrors(e)}
                        />
                </label>
                <label htmlFor="date">
                    <p>EXP. DATE (MM/YY)</p>
                    <div>
                        <input 
                            type="number" 
                            name="date" 
                            id="month"  
                            placeholder="MM"
                            onChange={(e) => changeFormData('month', e)}
                            onBlur={e => getErrors(e)}
                            />
                        <input 
                            type="number" 
                            name="date" 
                            id="year" 
                            placeholder="YY"
                            onChange={(e) => changeFormData('year', e)}
                            onBlur={e => getErrors(e)}
                            
                            />
                    </div>
                </label>
                <label htmlFor="cvc">
                    <p>CVC</p>
                    <input 
                        type="number" 
                        name="cvc" 
                        id="cvc" 
                        placeholder="e.g. 123"
                        onChange={(e) => changeFormData('cvc', e)}
                        onBlur={e => getErrors(e)}
                        
                    />
                </label>

                <button type="submit">
                    confirm
                </button>
            </form>
        </div>
    )
}