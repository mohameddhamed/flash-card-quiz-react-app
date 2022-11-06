//create a flashcard and flashcardlist components

//create an array of objects called sample flashcards with which each object has an id, question, answer, options
//which in itself is an array

//create a state for your flashcards with the sample as a default value
//within the app.js return flashcardlist and pass it flashcards as a prop

//in flashcardlist create a div with classname card-grid and map over your flashcards
//by returning a flashcard component and passing the element as prop and set the key to flashcard.id

//in flashcard create an onclick prop that changes the state of flip 
//also give it class of card flip if flip is true otherwise just card
//create a div class for front with class front with a question
//under question a div class flashcard-options
//and map over the flashcardoptions returning the option within a class flashcard-option
//then outside of front create a div with classname back with the answer

//install axios npm i axios and import it
//with the useEffect hook make setFlashcard state everytime it renders
//make the state become an array (by mapping over the results) and returning in each elet
//an id which is index-Date.now()
//an answer which is the correct answer 
//a question
//options which is the the sorted array of the incorrect answers and the answer with .sort(()=>Math.random()-.5)


//put flashcardlist in a class container
//in flashcard
//create a ref for the front div and back div
//create a fun that gets the current getboundclientrect().height of front and back refs
//and setheight to be the max of those two otherwise 100
//then call setmaxheight whenever question or options or answer changes
//inside the first div set height to be equal to the hight variable and remove height from css
//create inside a useeffect an event listener that call setmaxheight whenever 'resize' and clean it
//leave the array empty tho

//back in app
//render a form element with classname container and a handlesubmit that preventDefault()
//then inside create a div with classname form-group
//within create a label with htmlFor category with text category
//and a select with id category and a ref
//setcategories to res.date.trivia_categories
//then between the select elets map over categories and return each category with value and id being 
//category.id in a option elet
//also create a form with the same class but label for amount and says number of cats
//and input is type number id AMOUNT mIN 1 step 1 defauLTvALUE 10 AND REF=AMOUNTREF
//create another div with same class and a elet of button with class btn sying generate