import React, { useEffect,useState} from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

const ResizeComponent = () => {
    const [windoWidth, setWindoWidth] = useState(window.innerWidth)


    useEffect(() => {
     const handleResize=()=>setWindoWidth(window.innerWidth);
     console.log("event listener added");
            window.addEventListener('resize',handleResize);
    
      return () => {
       console.log("event listener removed");
       window.removeEventListener('resize',handleResize);
        };
    }, [])
    
  return (
    <div>
      <h1>window width: {windoWidth}</h1>
    </div>
  )
}

export default ResizeComponent
