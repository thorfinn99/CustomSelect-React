import { useState } from 'react'
import './App.css'
import Select from 'react-select'

function App() {
  const [value, setValue] = useState(null)

  const options = [
    {value: "CHOCOLATE" , label: "Chocolate" },
    {value: "CANDY" , label: "Candy" },
    {value: "ICE CREAM" , label: "Ice  Cream" },
    {value: "BURGER" , label: "Burger" },
  ]

  return (
    <div className='w-60 m-20'>
    <Select defaultValue={value} isMulti isSearchable onChange={setValue} placeholder="Select Your snack" options={options} />
    </div>
  )
}

export default App
