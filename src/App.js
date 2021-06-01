import me from "./Images/Profilepic.jpg";
import li from "./Images/linkedin.png";
import './App.css';
import { Component, useState } from "react";
import  Display from "./Components/Display";
import  Track from "./Components/Track";


function App() {
  const [skills , setSkills] =useState("")
  const [skills1 , setSkills1] =useState("")
  const [count, setCount] = useState(0);  
  

  const handleName =()=>{
    setSkills("My Name Is Pete")
  }

  const handleSkills =()=>{
    setSkills1("I am a Front-End Developer")
  }

  


  return (
    <div className="profile-card">

       <div className= "image">
          <img src={me} alt="peter Smith"/>
       </div>

       <Display tech ={skills} />

       <div className="btn1">
          <button onClick ={handleName}>Name</button>
       </div>

      <Track x ={skills1} />

       <div className="btn2">
          <button onClick ={handleSkills}>Skills</button>
        </div>
        <div>
         <a href="https://www.linkedin.com/in/petesmith285"> <img src={li} alt="linked in"/></a>
        </div>
        <p>{count} Likes</p>
        <button onClick={() => setCount(count + 1)}>
          Thumbs up
        </button>

    </div>
  );
}

export default App;
