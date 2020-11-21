import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [next, setNext] = useState(0);
  let len = props.slides.length-2;

  const nextButton =()=>{
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
    <button disabled={next <= 0} onClick={prevButton} data-testid="button-prev">Prev</button>
    <button disabled={next >= len} onClick={nextButton} data-testid="button-next">Next</button>
    <button disabled={next <= 0 || next >= len} onClick={()=>{setNext(0)}} data-testid="button-restart">Restart</button>
    </>
  )
}


export default App;
