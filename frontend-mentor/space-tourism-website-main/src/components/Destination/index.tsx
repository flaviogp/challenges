import { useEffect, useState } from "react";
import {IDestination} from "../../interfaces/interfaces"

interface Iprops {
    data: IDestination[];
}

export const Destination = ({data}: Iprops) =>{
    const [destination, setDestination] = useState('Moon');
    const [destinationData, setDestinationData] = useState({} as IDestination)

    useEffect(()=>{
        const obj = data.find(obj => obj.name === destination);
        if(!obj) return;
        setDestinationData({...obj});
    }, [destination, data])

    return(
        <div className="destination" id="destination">
            <div className="destination-container">
                <div className="destination-image">
                    <p>pick your destination</p>
                    <img src={destinationData.image} alt="" />
                </div>
                <div className="destination-descripition-container">
                    <nav className="destination-nav-bar">
                        <ul>
                            <li>
                                <span onClick={() => setDestination('Moon')}>Moon</span>
                            </li>
                            <li>
                                <span onClick={() => setDestination('Mars')}>Mars</span>
                            </li>
                            <li>
                                <span onClick={() => setDestination('Europa')}>Europa</span>
                            </li>
                            <li>
                                <span onClick={() => setDestination('Titan')}>Titan</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="destination-descripition">
                        <h1>{destinationData.name}</h1>
                        <p>{destinationData.description}</p>
                    </div>
                    <div className="info-navigation">
                        <div>
                            <span>avg. distance</span>
                            <p>{destinationData.distance}</p>
                        </div>
                        <div>
                            <span>est. travel time</span>
                            <p>{destinationData.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}