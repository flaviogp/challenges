import {useState} from 'react'
import { ImagesContainer } from './ImagesContainer'
import { ProductInfo } from './ProductInfo'

import {IData, IProduct} from '../../interfaces/interfaces'
import { LightBoxImage } from '../LightBoxImage';

interface Iprops{
    data: IData;
    addProductToCart: (value: IProduct) => void
}

export function Main({data, addProductToCart}: Iprops) {
    const [lightBox, setLightBox] = useState(false);

    return (
        <main>
            <ImagesContainer data={data} setLightBox={setLightBox}/>
            <ProductInfo data={data} addProductToCart={addProductToCart}/>
            {lightBox && <LightBoxImage setLightBox={setLightBox} data={data}/>}
        </main>
    )
}