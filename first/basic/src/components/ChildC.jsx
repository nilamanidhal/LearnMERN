import React, { useContext } from 'react'
import UseContext, { UserMode } from './UseContext'
import { useState } from 'react';

const ChildC = () => {
    const Mode=useContext(UserMode);
    const [mode, setmode] = useState(Mode)
     const modeHandel=()=>{
      console.log("chiclC mode tapped");
    {  mode?( document.body.style.backgroundColor="white")&& setmode(false) : (document.body.style.backgroundColor="black") && setmode(true);}
    }
  return (
    <div>
    <h1> ChildC value access by useContext = {mode}</h1> 
     <button onClick={modeHandel} className='bg-blue-500 p-3 rounded'> childC change mode</button>
    </div>
  )
}

export default ChildC
