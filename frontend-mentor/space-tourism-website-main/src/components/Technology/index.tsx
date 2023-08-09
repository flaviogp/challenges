import{useState, useEffect} from 'react'
import { ITechnology } from "../../interfaces/interfaces"

interface TechnologyProps{
    data: ITechnology[]
}

export const Technology = ({data}: TechnologyProps) =>{
    const [active, setActive] = useState(0);
    const [techData, setTechData] = useState({
        name: data[0].name,
        description: data[0].description,
        image: data[0].image,
    })

    useEffect(() => {
        let index = 0;
        setInterval(() =>{
            if(index > 2) index = 0;
            setTechData({
                name: data[index].name,
                description: data[index].description,
                image: data[index].image,
            })
            console.log(index)
            setActive(index)
            index++
        }, 10000)

    }, [data])
    return(
        <div className="technology" id="technology">
            <div className="technology-container">
                <div className="technology-description">

                    <span>Space Launch 101</span>
                    <div className="technology-info">
                        <div className="info-content">
                            <h2 className='technology-name'>{techData.name}</h2>
                            <p className='technology-info-description'>{techData.description}</p>
                        </div>
                        <ul className="carousel">
                            <li id="1" className={active === 0 ? 'active-carousel' : ''}></li>
                            <li id="2" className={active === 1 ? 'active-carousel' : ''}></li>
                            <li id="3" className={active === 2 ? 'active-carousel' : ''}></li>
                        </ul>
                    </div>
                </div>
                <div className="technology-image-container">
                    <img src={techData.image} alt="crew-image" />
                </div>
            </div>
        </div>
    )
}