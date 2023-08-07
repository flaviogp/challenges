
import { Home } from './components/Home'
import { Header } from './components/Header'
import { Destination } from './components/Destination'
import { Technology } from './components/Technology'
import { Crew } from './components/Crew'

import data from './data/data'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Destination data={data.destinations}/>
      <Crew />
      <Technology/>
    </>
  )
}

export default App
