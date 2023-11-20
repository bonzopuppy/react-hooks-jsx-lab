import React from "react";
import { name, city } from "../data/data.js"; 

function Home() {
  // div element with an id of home, inside an h1 with style set to 'color: firebrick' and content of "Your Name is a Web Developer from Your City"
  //name and city are variables imported from data.js
  return (
    <div id="home">
      <h1 style={{color: "firebrick"}}>
        {name} is a Web Developer from {city}
      </h1> 
    </div>
  )
}

export default Home;
