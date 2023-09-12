import { useState } from "react"
import RatingContainer from "./components/RatingContainer"
import ThanksContainer from "./components/ThanksContainer"

function App() {
  const [rate, setRate] = useState(0)
  const [submitRate, setSubmitRate] = useState(false)

  return (
    <main role="main">
      {
        !submitRate ?
          <RatingContainer rate={rate} setRate={setRate} setSubmitRate={setSubmitRate}/> : 
          <ThanksContainer rate={rate}/>
      }
    </main>
  )
}

export default App
