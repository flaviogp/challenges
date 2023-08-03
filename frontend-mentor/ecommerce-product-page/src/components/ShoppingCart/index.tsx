import { IProduct } from "../../interfaces/interfaces";
import CartProduct from "./CartProduct";

interface IProps{
    products: IProduct[];
    removeProductToCart: (value: IProduct) => void;
}

export default function ShoppingCart({products, removeProductToCart}: IProps){

    return (
        <div className="shopping-cart">
            <div className="title">
                <p>Cart</p> 
                {products.length >= 1 && <p>Total: {products.reduce((sum, product) => sum += product.price, 0)},00</p>}
            </div>
            <div className="cart-container">
                {products.length >= 1 ? products.map((product, index) => <CartProduct key={`${product.id}${index}`} product={product} removeProductToCart={removeProductToCart}/> ): <p>You cart is empty</p>}
            </div>
            {products.length >= 1 && <button type="submit">Checkout</button>}
        </div>
    );
}