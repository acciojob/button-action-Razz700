import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [btnclick,setbtnclick]=useState('hide');
const handlebtn=()=>{
  setbtnclick('show');
}
  return (
    <div className="App" id="main">
    <p id="para" className={btnclick} >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button onClick={handlebtn} id="click">Click to see para</button>
      {/* // Do not alter the main div */}
    </div>
  );
}

export default App
