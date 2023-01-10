import { useState, useEffect } from "react"
import "./App.css"
import WordContainer from "./WordContainer"

function App() {
  const [loading, setLoading] = useState(false)

  const [apiData, setApiData] = useState([])
  const [data, setData] = useState(null)

  const [input, setInput] = useState("")

  const fetchDatamuse = async (value) => {
    setApiData([])
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.datamuse.com/words?rel_rhy=${value}&max=20`
      )
      const data = await response.json()
      setApiData(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (data === null) return
    fetchDatamuse(data)
  }, [data])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setData(input)
  }
  console.log(apiData)

  return (
    <div>
      <h1>Datamuse API</h1>
      {/* add buttons for different api calls. */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="word">Your word </label>
        <input
          id="word"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {loading ? <h3>Loading...</h3> : null}
      {apiData.length > 0 ? <WordContainer apiData={apiData} /> : null}
    </div>
  )
}

export default App
