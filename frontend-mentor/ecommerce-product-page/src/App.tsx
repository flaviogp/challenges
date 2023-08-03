import { useState } from 'react';

import { Header } from './components/Header'
import { Main } from './components/Main'
import './sass/main.scss'

// import data from './data/data.json'
import {Data} from './data/data.ts'
import {IProduct} from './interfaces/interfaces'

function App() {
const [products, setProducts] = useState([] as IProduct[]);

  const addProductToCart = (product: IProduct): void =>{
      setProducts([...products, product])
  }

  const removeProductToCart = (product: IProduct): void =>{
    const removeProductIndex = products.indexOf(product)
    const productsList = [...products];
    productsList.splice(removeProductIndex, 1);
    setProducts(productsList)
}


  return (
    <div className="app">
      <Header products={products} removeProductToCart={removeProductToCart}/> 
      <Main data={Data} addProductToCart={addProductToCart}/> {/* Sorry for hard coding, i just have one iten in array data */}
    </div>
  )
}

export default App
