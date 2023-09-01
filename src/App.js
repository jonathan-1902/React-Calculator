import React,{useState} from 'react';
import './App.css';

const App=() =>{
  const [result,setResult]=useState("");

  const clickHandler=e=>{
    setResult(result.concat(e.target.value));
  }

  const clearHandler=e=>{
    setResult("");
  }

  const calculate=() => {

    setResult(eval(result).toString());
  }
  return(
    <div className="calc">
      <center>
        <h1>
          A simple calculator React Application
        </h1>
      </center>
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button" onClick={clickHandler}/>
      <input type="button" value="/" className="button" onClick={clickHandler}/>
      <input type="button" value="%" className="button" onClick={clickHandler}/>
      <input type="button" value="^" className="button" onClick={clickHandler}/>
      <input type="button" value="CLEAR" className="button button1" onClick={clearHandler}/>
      <input type="button" value="ANS" className="button button1" onClick={calculate}/>
    </div>

  )
}

export default App;
