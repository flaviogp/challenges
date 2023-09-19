import Balance from "./components/Balance"
import Content from "./components/Content"
import Total from "./components/Content/Total"
import data from './data/data.json'

function App() {

  return (
    <main role="main" className="app">
      <Balance balance={921.48}/>
      <Content data={data}/>
      <Total />
    </main>
  )
}

export default App
