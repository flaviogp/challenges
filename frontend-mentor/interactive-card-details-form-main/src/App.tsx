import { useState } from 'react'
import CardSection from "./containers/CardSection"
import FormSection from "./containers/FormSection"
import { FormData } from "./interfaces"

function App() {
  const [formData, setFormData] = useState<FormData>({
    cardName: 'Jane Applesses',
    cardNumber: '0000000000000000',
    expDate: {
        month: '00',
        year: '00'
    },
    cvc: '000',
})
  return (
    <div className="app">
      <CardSection formData={formData}/>
      <FormSection setFormData={setFormData} formData={formData}/>
    </div>
  )
}

export default App
