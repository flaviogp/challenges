import { ChangeEvent, useState, FormEvent } from "react";
import { FormProps } from "../../interfaces";


export default function Form ({ setFormData, formData }: FormProps) {
    const [ error, setError ] = useState('')

    const formatInputTextToNumber = (e:FormEvent<HTMLInputElement>) => {
        return  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')   

    }
    const handleChange = (key: string, e: ChangeEvent<HTMLInputElement>) => { 
        const value = e.target.value

        if(key === 'month' || key === 'year') return changeExpDate(key, value);

        return setFormData({...formData, [key]: value})

    }
    
    const changeExpDate = (key: string, value: string) => {
        return setFormData({...formData, expDate: {...formData.expDate, [key]: value}})
    }

    const handleClick = () => {
        const currentYear = new Date().getFullYear().toString().slice(2, 4)

        if(formData.cardName.length === 0){
            setError('Nome do cartão não pode estar vazio')
            return
        }
        if(formData.cardName.length < 3){
            setError('Nome do cartão deve ter pelo menos 3 caracteres')
            return
        }
        if(formData.cardNumber.length === 0){
            setError('Numero do cartão não pode estar vazio')
            return
        }
        if(formData.cardNumber.length !== 16){
            setError('Numero do cartão Inválido')
            return
        }
        if(formData.expDate.month.length === 0){
            setError('O campo mês não pode estar vazio')
            return
        }
        if(formData.expDate.month.length === 0){
            setError('O campo mês não pode estar vazio')
            return
        }
        if(Number(formData.expDate.month) >= 13 || Number(formData.expDate.month) <= 0){
            setError('Digite um mês válido')
            return
        }
        if(formData.expDate.year.length === 0) {
            setError('O campo ano não pode estar vazio')
            return
        }
        if(Number(formData.expDate.year) < Number(currentYear)) {
            setError('Digite um Ano válido')
            return
        }
        if(formData.cvc.length === 0) {
            setError('O campo cvc não pode estar vazio')
            return
        }
        if(formData.cvc.length < 3) {
            setError('Campo cvc inválido')
            return
        }
        
        setError('')
    }

    const preventSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(error) return;

        


        e.currentTarget.submit()
        console.log("enviado")
    }

    console.log(error, formData)
    return(
        <div className="form-container">
            {error && <p className="error"> { error } </p>}
            <form className="form" onSubmit={e => preventSubmitForm(e)}>
                <label htmlFor="name">
                    <p>CARDHOLDER NAME</p>
                    <input 
                        type="text" 
                        name="name"
                        id="cardhold-name" 
                        placeholder="e.g. Jane Appleseed"
                        onChange={(e) => handleChange('cardName', e)}
                        />
                </label>
                <label htmlFor="number">
                    <p>CARD NUMBER</p>
                    <input 
                        type="text" 
                        name="number" 
                        id="card-number" 
                        placeholder="e.g. 1234 5678 9123 0000"
                        maxLength={16}
                        onInput={e => formatInputTextToNumber(e)}
                        onChange={(e) => handleChange('cardNumber', e)}
                        
                        />
                </label>
                <label htmlFor="date">
                    <p>EXP. DATE (MM/YY)</p>
                    <div>
                        <input 
                            type="text" 
                            name="date" 
                            id="month"  
                            placeholder="MM"
                            maxLength={2}
                            onInput={e => formatInputTextToNumber(e)}    
                            onChange={(e) => handleChange('month', e)}
                            />
                        <input 
                            type="text" 
                            name="date" 
                            id="year" 
                            placeholder="YY"
                            maxLength={2}
                            onInput={e => formatInputTextToNumber(e)}    
                            onChange={(e) => handleChange('year', e)}                 
                            />
                    </div>
                </label>
                <label htmlFor="cvc">
                    <p>CVC</p>
                    <input 
                        type="text" 
                        name="cvc" 
                        id="cvc" 
                        placeholder="e.g. 123"
                        maxLength={3}
                        onInput={e => formatInputTextToNumber(e)}    
                        onChange={(e) => handleChange('cvc', e)}
                        
                    />
                </label>

                <button onClick={() => handleClick()}>
                    confirm
                </button>
            </form>
        </div>
    )
}

// const getErrors = (e: React.FocusEvent<HTMLInputElement>) => {
//     setErrors([])
//     const errorElemets = document.querySelectorAll('.error')
//     for(const error of errorElemets){
//         error.remove()
//     }
    
//     const el = e.target

//     if(el.id === 'cardhold-name'){
//         if(el.value.length < 3) {
//             const err = 'O nome precisa ter ao menos 3 caracteres!';
//             return setErrors([...errors, err])
//         }
//     }
//     if(el.id === 'card-number'){
//         if(el.value.length < 16){
//             const err = 'Número do cartão inválido';
//             return setErrors([...errors, err])
//         }
//     }
//     if(el.id === 'month'){
//         if(el.value.length === 0 ){
//             const err = 'Campo mês não pode estar vazio';
//             return setErrors([...errors, err])
//         }
//         if(Number(el.value) > 12 || el.value.length < 2 || el.value === '00'){
//             const err = 'Mês inválido';
//             return setErrors([...errors, err])
//         }
//     }
    
//     if(el.id === 'year'){
//         if(el.value.length === 0 ){
//             const err = 'Campo ano não pode estar vazio';
//             return setErrors([...errors, err])
//         }
//         const currentYear = new Date().getFullYear().toString().slice(2, 4)
//         if(Number(el.value) < Number(currentYear)){
//             const err = 'Ano inválido';
//             return setErrors([...errors, err])
//         }
//     }
    
//     if(el.id === 'cvc') {
//         if(el.value.length === 0 ){
//             const err = 'Campo cvc não pode estar vazio';
//             return setErrors([...errors, err])
//         }
        
//         if(el.value.length < 3){
//             const err = 'Cvc inválido';
//             return setErrors([...errors, err])
//         }
//     }

// }