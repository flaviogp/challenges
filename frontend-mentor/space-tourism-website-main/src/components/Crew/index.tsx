import {useState, useEffect} from 'react'

import {ICrew} from '../../interfaces/interfaces'

interface CrewProps{
    data: ICrew[]
}
export const Crew = ({data}: CrewProps) =>{
    const [active, setActive] = useState(0)
    const [crewData, setCrewData] = useState({
        role: data[0].role,
        name: data[0].name,
        bio: data[0].bio,
        image: data[0].image,
    })

    useEffect(() => {
        let index = 0;
        setInterval(() =>{
            if(index > 3) index = 0;
            setCrewData({
                role: data[index].role,
                name: data[index].name,
                bio: data[index].bio,
                image: data[index].image,
            })
            console.log(index)
            setActive(index)
            index++
        }, 10000)

    }, [data])

    return(
        <div className="crew" id="crew">
            <div className="crew-container">
                <div className="crew-description">
                    <span>Meet Your Crew</span>

                    <div className="crew-info">
                        <p className="crew-role">{crewData.role}</p>
                        <h2 className='crew-name'>{crewData.name}</h2>
                        <p className='crew-bio'>{crewData.bio}</p>
                    </div>
                    <ul className="carousel">
                        <li className={active === 0 ? 'active-carousel' : ''}></li>
                        <li className={active === 1 ? 'active-carousel' : ''}></li>
                        <li className={active === 2 ? 'active-carousel' : ''}></li>
                        <li className={active === 3 ? 'active-carousel' : ''}></li>
                    </ul>
                </div>
                <div className="crew-image-container">
                    <img src={crewData.image} alt="crew-image" />
                </div>
            </div>
        </div>
    )
}