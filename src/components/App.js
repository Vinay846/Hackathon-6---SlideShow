import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [next, setNext] = useState(0);

  const nextButton =()=>{
    let len = props.slides.length-2;
    console.log(len);
    (next <= len)
    ? setNext(next+1):len
  }
  const prevButton =()=>{
    (next > 0)
    ? setNext(next-1):0
  }
  return (
    <>
    <h1 data-testid="title">{props.slides[next]["title"]}</h1>
    <p data-testid="text">{props.slides[next]["text"]}</p>
    <button onClick={prevButton} data-testid="button-prev">Prev</button>
    <button onClick={nextButton} data-testid="button-next">Next</button>
    <button onClick={()=>{setNext(0)}} data-testid="button-restart">Restart</button>
    </>
  )
}


export default App;
