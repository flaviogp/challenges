import {useState} from 'react'
import { ProductImage } from "./ProductImage";

import {IData} from '../../../interfaces/interfaces'
import { CoverImage } from './CoverImage';

interface Iprops{
    data: IData;
    setLightBox?: (value: boolean) => void;
}

export function ImagesContainer({data,setLightBox}: Iprops) {
    const [id, setId] = useState(1);
    
    const setClassActive = (e: HTMLElement, id: number) => {
        const ElActive = document.querySelectorAll('.active') ;

        for(const el of ElActive){
            el.classList.remove('active');
        }

        e.classList.add('active')
        setId(id)
    }

    return (
        <div className="product-images-container">
            <CoverImage data={data} id={id} setId={setId} setLightBox={setLightBox}/>
            <div className="images-thumb-container">
                { data.productImages.map(img => <ProductImage setClassActive={setClassActive} src={img.imageThumbnailUrl} alt={`product image ${img.id}`} id={img.id} key={img.id}/>)}
            </div>
        </div>
    )
}