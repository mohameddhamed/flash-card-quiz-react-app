import React from 'react'
import Flashcard from './Flashcard'
import './App.css'
import uuid from 'react-uuid'

export default function FlashcardList({flashCards}) {
  return (
    <div className='card-grid'>
      {flashCards.map(e=>{
        return (<Flashcard flashCard={e} key={uuid()}/>)
      })}
    </div>  
  )
}
