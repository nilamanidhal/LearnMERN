import React from 'react'
import Ex2 from './ex2'


const ex1 = (props) => {
  return (
    <div>
       <h1>👉this is my props example one{props.Pdetails}</h1>
        <Ex2 Pdetails1={props.Pdetails}/>
    </div>
  )
}

export default ex1

