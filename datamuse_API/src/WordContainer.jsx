import React from "react"

const WordContainer = ({ apiData }) => {
  console.log(apiData)
  return (
    <div className="word-container">
      {apiData.map((word, idx) => {
        return <h4 className="word" key={idx}>{word.word}</h4>
      })}
    </div>
  )
}

export default WordContainer
