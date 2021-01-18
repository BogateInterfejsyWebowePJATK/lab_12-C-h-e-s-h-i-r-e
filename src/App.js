//import logo from './logo.svg';
import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentSum,setCurrentSum]=useState(0);
  //const [currentAv,setCurrentAv]=useState(0);
  const [currentC,setCurrentC]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
    document.querySelector('#average').value="";
  },[])
  
  useEffect(()=>{
    if(clear) {
    document.querySelector('#result').value="";
    document.querySelector('#average').value="";
    }
  })
  
  
  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum==='')
    return;
    let sum= parseFloat(currentSum)+parseFloat(currentNum);
    setCurrentSum(sum);
    let c;
    c = parseFloat(currentC)+1;
    setCurrentC(c);
    //var av= currentSum/currentC;
    //setCurrentAv(av);
    //setCurrentAv();
    document.querySelector('#num').value="";   
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    console.log('c:', currentC);
    console.log('av:', currentSum/currentC);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
    //setCurrentAv(0);
    setCurrentC(0);
  }

  return (
    <div className="App">
      <form>
            <input type="text" id="result" value={currentSum}  readOnly />   
            <input type="text" id="average" value={currentSum/currentC}  readOnly />
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;
