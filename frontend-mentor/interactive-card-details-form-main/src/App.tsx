import { useState } from 'react'
import CardSection from "./containers/CardSection"
import FormSection from "./containers/FormSection"
import { FormData } from "./interfaces"

function App() {
  const [formData, setFormData] = useState<FormData>({
    cardName: '',
    cardNumber: '',
    expDate: {
        month: '',
        year: ''
    },
    cvc: '',
})
  return (
    <div className="app">
      <CardSection formData={formData}/>
      <FormSection setFormData={setFormData} formData={formData}/>
    </div>
  )
}

export default App
