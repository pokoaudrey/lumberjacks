import style from './App.css';
import Loading from "./Loading"
import saw from './assets/CircularSawBlade.svg'
import background from './assets/looking-up-at-pine-forest.jpeg'
import font from './assets/WoodenLog.ttf'
import otherfont from './assets/Shadow.ttf'
import ButtonContent from './ButtonContent';
import './assets/outline.ttf';
import './ButtonContent.css';

import {useEffect, useState} from "react"

export default function App() {

  const [loading, setLoading]= useState(true)
    useEffect(() => {
      setTimeout(() => setLoading(false), 2000)
    }, [])
    if (loading) {
      return <Loading/>
    }



  return (
    <div>
     <div className="App">
     
    
  
     <div className="sidecolumn"></div>
     
      <img className="sawstyle" src={saw} alt="saw"></img>
      <text className="title">
  LUMBER<br/>JACK'S<br/>
  TREE<br/> SERVICES
</text>
    
      
 
<div><text className="subtitle">
EXPERT TREE CARE<br/>SINCE 1977<br/>
</text></div>

<div><ButtonContent /></div>
<div className="additionaltext1">Services
      </div>
      <div className="additionaltext2">History
      </div>
      <div className="additionaltext3">Brochure
      </div>
      <div className="additionaltext4">Contact
      </div>
      
      </div>
     
      
    
    </div>
    

  );
}

