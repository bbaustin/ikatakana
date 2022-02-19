import React, { useState, useEffect } from 'react'
import SecretWord from './components/SecretWord'
import SecretWordFeedback from './components/SecretWordFeedback'
import TextBar from './components/TextBar'
import word_list from './assets/word_list.json'
import { DISPLAY_OPTIONS } from './assets/constants.js'

function App() {
  const [value, setValue] = useState()
  const [randomizedWord, setRandomizedWord] = useState()
  const [points, setPoints] = useState(0)
  const [displayed, setDisplayed] = useState(DISPLAY_OPTIONS[0])

  const randomizeWord = () => {
    let randomNumber = Math.floor(Math.random() * word_list.length)
    setRandomizedWord(word_list[randomNumber])
    setDisplayed(DISPLAY_OPTIONS[0])
  }

  const increasePoints = () => {
    setPoints(points + 1)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // TODO
    }
  }

  const skip = (event) => {
    setPoints(0)
    randomizeWord()
  }

  useEffect(() => {
    randomizeWord()
  }, [])

  const compareText = (inputText, randomWord) => {
    if (inputText === randomWord) {
      increasePoints()
      setValue('')
      setDisplayed(DISPLAY_OPTIONS[1])
    }
  }

  useEffect(() => {
    if (randomizedWord) {
      compareText(value, randomizedWord.word[0].romaji)
    }
  })

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className='App' onKeyDown={handleKeyDown}>
      {randomizedWord && displayed === 'RANDOM_WORD' ? (
        <>
          <SecretWord randomizedWord={randomizedWord.word[0].japanese} />
          <TextBar value={value} handleChange={handleChange} />
          <div className="button" onClick={skip}>
            Skip
          </div>
        </>
      ) : (
        <></>
      )}
      {randomizedWord && displayed === 'FEEDBACK' ? (
        <SecretWordFeedback
          randomizedWord={randomizedWord}
          randomizeWord={randomizeWord}
        />
      ) : (
        <></>
      )}
      <h3>Points: {points}</h3>

    </div>
  )
}

export default App
