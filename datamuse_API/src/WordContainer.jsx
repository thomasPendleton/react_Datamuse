import React from "react"

const WordContainer = ({ apiData, input }) => {
  console.log(apiData, input)
  return (
    <main>
      <h2>{input}</h2>
      <div className="word-container">
        {apiData.map((word, idx) => {
          return (
            <h4 className="word" key={idx}>
              {word.word}
            </h4>
          )
        })}
      </div>
    </main>
  )
}

export default WordContainer
