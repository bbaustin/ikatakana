import React, { useEffect } from 'react'

const SecretWordFeedback = (props) => {
  return (
    <div className='secret-word'>
      {props.randomizedWord ? (
        <div>
          <h1>{props.randomizedWord.word[0].japanese}</h1>
          <h3>{props.randomizedWord.word[0].romaji}</h3>
          <h3>{props.randomizedWord.word[0].english_meaning}</h3>
          <p>{props.randomizedWord.info}</p>
          <div className='button' onClick={props.randomizeWord}>
            オーケー！
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default SecretWordFeedback
