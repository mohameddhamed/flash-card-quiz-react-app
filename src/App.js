import React, {useState,useRef, useEffect} from "react";
import FlashcardList from "./FlashcardList";
import './App.css';
import axios from 'axios'
import uuid from "react-uuid";

function App() {
  const categoryRef = useRef()
  const amountRef = useRef()

  const [categories, setCategories] = useState([])


  useEffect(() => {
    axios
    .get('https://opentdb.com/api_category.php')
    .then(res=>{
      setCategories(
        res.data.trivia_categories.map((e)=>{
          return {
            id: e.id,
            name: e.name
          }
        })
      )
    })

  }, [])


  ///very important
  function decodeString(str){
    const text = document.createElement('textarea')
    text.innerHTML = str
    return text.value
  }

  const [flashCards, setFlashCards] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios
    .get('https://opentdb.com/api.php',{
      params : {
        amount: amountRef.current.value,
        category: categoryRef.current.value
      }
    })
    .then(res=>{
      setFlashCards(
        res.data.results.map((e,index)=>{

          const the_options = [...e.incorrect_answers,e.correct_answer]
          return {
            id: uuid(),
            answer: decodeString(e.correct_answer),
            question: decodeString(e.question),
            options: the_options.sort(()=>Math.random()-.5)
          }

        })
      )
    })
  } 

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryRef}>
            {categories.map(e=>{
              return (<option value={e.id} key={uuid()}>{e.name}</option>)
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">number of questions</label>
          <input type="number" id="amount" min="1" step='1' defaultValue={10} ref={amountRef}/>
        </div>

        <div className="form-group">
          <button className="btn">generate</button>
        </div>

      </form>
    
      <div className="container">
        
        <FlashcardList flashCards={flashCards}/>

      </div>
    </>
  );
}


export default App;
