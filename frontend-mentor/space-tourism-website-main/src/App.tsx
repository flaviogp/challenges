import { Crew } from './components/Crew';
import { Destination } from './components/Destination';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Technology } from './components/Technology';
import data from './data/data';

export function App() {
    return(
        <>
        <Header />
        <Home />
        <Destination data={data.destinations}/>
        <Crew data={data.crew}/>
        <Technology data={data.technology}/>
        </>
    )
}