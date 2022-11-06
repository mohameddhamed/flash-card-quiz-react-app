import React,{useState,useRef,useEffect} from 'react'
import './App.css'
import uuid from 'react-uuid'

export default function Flashcard({flashCard}) {
  
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontRef = useRef()
  const backRef = useRef()

  useEffect(setMaxHeight, [flashCard.question,flashCard.options,flashCard.answer])

  useEffect(() => {
    document.addEventListener('resize',setMaxHeight)
  
    return () => {
      document.removeEventListener('resize',setMaxHeight)
    }
  }, [])
  
  

  function setMaxHeight(){
    const frontHeight = frontRef.current.getBoundingClientRect().height;
    const backHeight = backRef.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight,backHeight,100))    
  }

  return (
    
      <div 
      className={`card${flip?" flip":""}`}
      onClick={()=>{setFlip(!flip)}}
      style={{height:height}}
      >
        <div className='front' ref={frontRef}>
            {flashCard.question}
            <div className='flashcard-options'>
                {flashCard.options.map(e=>{
                    return (<div className='flashcard-option' key={uuid()}>{e}</div>)
                })}
            </div>
        </div>
        <div className='back' ref={backRef}>
            {flashCard.answer}
        </div>
        
    </div>
    )
}
