import {useState} from 'react';

import { ManagerInput } from './ManagerInput'
import { SubmitButton } from './SubmitButton'
import { ErrorMessage } from '../../ErrorMessage';

import {IData, IProduct} from '../../../interfaces/interfaces'

interface Iprops{
    data: IData;
    addProductToCart: (value: IProduct) => void

}
export function ProductInfo({data, addProductToCart}: Iprops) {
    const [amount, setAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = () => {
        if(amount <= 0) return setErrorMessage('insira ao menos um produto')
        addProductToCart({
            productName: data.productName,
            price: data.productPrice * (data.productDiscount / 100),
            amount: amount,
            id: data.id
        });
        setErrorMessage('')
    }
    return (
        <div className="product-info-container">
            {errorMessage && <ErrorMessage message={errorMessage}/>}
            <div className="product-info">
                <span>Sneaker Company</span>
                <h1>{data.productName}</h1>
                <p className='product-info-description'>{data.productDescription}</p>
                <div className="price-container">
                    <div className="discount-price-content">
                        <p className="discount-price">${data.productPrice * (data.productDiscount / 100)}.00</p>
                        <span>{data.productDiscount}%</span>
                    </div>
                    <p className="price">${data.productPrice}.00</p>
                </div>
                <div className="flux">
                    < ManagerInput amount={amount} setAmount={setAmount}/>
                    < SubmitButton onclick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}