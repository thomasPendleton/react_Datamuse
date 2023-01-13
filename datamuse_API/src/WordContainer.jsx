import React from "react"

const WordContainer = ({ apiData, searchedWord }) => {
 
  if(apiData.length === 0 && searchedWord){
    return <h2>No words found.</h2>
  }


  // Make the words clickable to link to input state.
  return (
    <main>
      <h2>{searchedWord}</h2>
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
