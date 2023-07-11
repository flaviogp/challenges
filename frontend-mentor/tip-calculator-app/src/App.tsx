
import './App.css'

import {CalculatorInput} from './components/CalculatorInput'
import SelectTip from './components/SelectTip'
import ResultInfo from './components/ResultInfo'
import Logo from './assets/images/logo.svg'
import { useState } from 'react'

import {InputData, Data} from './interfaces/index'


function App(): JSX.Element {
  const [data, setData] = useState<Data>({bill: 0, tip: 0, numberOfPeople: 0});

  const setterData = (inputData: InputData) => {
    const {inputName, inputValue} = inputData;

    if(inputName === 'bill'){
      setData({...data, bill: Number(inputValue)})
    }
    if(inputName === 'tip'){
      setData({...data, tip: Number(inputValue)})
    }
    if(inputName === 'numberOfPeople'){
      setData({...data, numberOfPeople: Number(inputValue)})
    }
    return;
  }

  return (
    <div className="app">
      <img className="logo" src={Logo} alt="Logo" />
      <form action="#" className="main">
        <div className="calculator">
          <CalculatorInput fieldName="Bill" inputName="bill" icon="dollar" setterData={setterData}/>
          <SelectTip setterData={setterData} data={data}/>
          <CalculatorInput fieldName="Number of People" inputName="numberOfPeople" icon="people" setterData={setterData}/>
        </div>
        <div className="results">
          <div className="info">
            <ResultInfo title="Tip Amount" data={data}/>
            <ResultInfo title="Total" data={data}/>
          </div>
          <div className="reset">
            <button type="reset" onClick={() => setData({bill: 0, tip: 0, numberOfPeople: 0})}> RESET </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App

