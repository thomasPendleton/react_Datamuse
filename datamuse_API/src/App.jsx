import { useState, useEffect } from "react"
import "./App.css"
import WordContainer from "./WordContainer"

function App() {
  const [apiData, setApiData] = useState([])
  const [data, setData] = useState(null)
  const [input, setInput] = useState("")

  const fetchDatamuse = async (value) => {
    try {
      console.log(value)
      const response = await fetch(
        `https://api.datamuse.com/words?rel_rhy=${value}&max=20`
      )
      const data = await response.json()

      setApiData(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (data === null) return
    fetchDatamuse(data)
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()

    setData(input)
    // fetchDatamuse(data)
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  console.log(apiData)
  return (
    <div>
      <h1>Datamuse API</h1>

      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={input} onChange={(e) => handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
      {
        apiData.length > 0 ?  <WordContainer apiData={apiData} /> : null
      }
     
    </div>
  )
}

export default App
