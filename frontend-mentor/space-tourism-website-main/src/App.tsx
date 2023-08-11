import { Crew } from './components/pages/Crew';
import { Destination } from './components/pages/Destination';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { Technology } from './components/pages/Technology';
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