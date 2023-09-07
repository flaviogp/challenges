import './sass/main.scss'
import Main from './components/Main';

import {data} from './data/data'

function App() {

  return (
    <>
      <Main data={data}/>
    </>
  )
}

export default App
