import React,{useState,useEffect}from 'react';
import './App.css';
function App(){
    
    const [joke,setJoke]=useState("loading")
    
  const newJoke=()=>{

         
        fetch("http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe").
        then(resp=>resp.json()).then(result=>{
            console.log(result)
            setJoke(result.value.joke)
        })
      
  }
    useEffect(()=>{
        newJoke()
    
    },[])
        return(
      <div>
            <h1>DEVLOPED BY-ANIL</h1>
            <p>hits new to see new joke</p>
            <h4>{joke}</h4>
           
            <button onClick={()=>newJoke()}>newJoke</button>
            </div>
  
        );
    }

export default App;
