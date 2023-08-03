import { useState } from 'react'
import './App.css'

import UserInfo from './components/UserInfo'
import UserStatistics from './components/UserStatistics'


function App() {
  const [period, setPeriod] = useState<string>('monthly')

  const setterPeriod = (value: string) => {
    return setPeriod(value)
  }

  return (
    <main className="main">
      <UserInfo setterPeriod={setterPeriod}/>
      <UserStatistics period={period}/>
    </main>
  )
}

export default App
