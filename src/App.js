import React,{useState,useEffect}from 'react';
import './App.css';
function App(){
    
    const [joke,setJoke]=useState("loading")
    const [fName,setfN]=useState("")
    const[sName,setsN]=useState("")
  const newJoke=(first,second)=>{

         
        fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).
        then(resp=>resp.json()).then(result=>{
            console.log(result)
            setJoke(result.value.joke)
        })
      
  }
    useEffect(()=>{
        newJoke(fName,sName)
    
    },[])
        return(
      <div>
            <h1>DEVLOPED BY-ANIL</h1>
            <p>Enter your name and read jokes on you</p>
            <h4>{joke}</h4>
            <input type="text" value={fName} onChange={(event)=>setfN(event.target.value)} placeholder="enter your Name" /><br/><br/>
            <input type="text" value={sName} onChange={(event)=>setsN(event.target.value)} placeholder="enter your lastName"/><br/><br/>
            <button onClick={()=>newJoke(fName,sName)}>newJoke</button>
            </div>
  
        );
    }

export default App;
