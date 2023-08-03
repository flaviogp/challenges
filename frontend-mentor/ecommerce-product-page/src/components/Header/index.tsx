import {useState} from 'react'
import './header.scss'
import { Brand } from './Brand'
import { Menu } from './Menu'
import { User } from './User'
import ShoppingCart from '../ShoppingCart'
import { IProduct } from '../../interfaces/interfaces'

interface IProps{
    products: IProduct[]
    removeProductToCart: (value: IProduct) => void
}

export function Header({products, removeProductToCart}: IProps) {
    const [showCart, setShowCart] = useState(false)
    return (
        <header className="header">
            <>
                <Brand />
                <Menu />
            </>
            <User setShowCart={setShowCart} showCart={showCart} products={products}/>
            {showCart && <ShoppingCart products={products} removeProductToCart={removeProductToCart}/>}
        </header>
    )
}