import { useState } from "react"
import WordContainer from "./WordContainer"

function App() {
  const [loading, setLoading] = useState(false)

  const [apiData, setApiData] = useState([])
  const [input, setInput] = useState("")
  const [searchedWord, setSearchedWord] = useState("")

  const fetchDatamuse = async (value) => {
    setApiData([])
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.datamuse.com/words?rel_rhy=${value}&max=20`
      )
      const data = await response.json()
      setApiData(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setApiData([])

    setSearchedWord(input)
    fetchDatamuse(input)
  }

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
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {loading ? <h3>Loading...</h3> : null}

      <WordContainer apiData={apiData} searchedWord={searchedWord} />
    </div>
  )
}

export default App
