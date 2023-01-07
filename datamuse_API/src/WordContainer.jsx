import React from "react"

const WordContainer = ({ apiData }) => {
  console.log(apiData)
  return (
    <div>
      {apiData.map((word, idx) => {
        return <h1 key={idx}>{word.word}</h1>
      })}
    </div>
  )
}

export default WordContainer
