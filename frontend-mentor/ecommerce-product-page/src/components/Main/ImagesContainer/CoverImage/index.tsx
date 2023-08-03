import { ToggleImage } from "../ToggleImage"
import {IData} from '../../../../interfaces/interfaces'
// interface IProps {
//     getCoverImage: (id: number) => string | undefined
//     id: number
// }

interface Iprops{
    data: IData;
    id: number;
    setId: (id: number) => void;
    setLightBox?: (val: boolean) => void;
}

export function CoverImage ({data, id, setId, setLightBox}: Iprops) {

    const getCoverImage = (id: number): string | undefined =>{
        const needle = data.productImages.find(obj => obj.id === id)
        if(needle){
            return needle.imageUrl.toString()
        }
    }

    const toggleImage = (step: string) =>{
        if(step === "previous"){
            setId(id-1);
        } else if(step === "next"){
            setId(id+1);
        }
    }

    return(
        <div className="main-image">
            {id > 1 && <ToggleImage step="previous" toggleImage={toggleImage}/>} 
            <img src={getCoverImage(id)} alt="Product-thumb" onClick={() => setLightBox && setLightBox(true)}/>
            {id < data.productImages.length && <ToggleImage step="next" toggleImage={toggleImage}/>}
        </div>
    )
}