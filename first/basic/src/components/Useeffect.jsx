import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Useeffect = () => {


const [first, setfirst] = useState(0)
const incHandel=()=>{
    setfirst(first+1);
}

const [total, setTotal] = useState(1)
const totalHandel=()=>{
    setTotal(total+1);
}
//use effect
//first -> side-effect function
//second -> clean-up function
// third-> comma separated dependency list or useeffect run at any change

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])



//variatoin:1
//runs on every render
// useEffect(() => {
//   alert("rendered");
// })



//variation:2
//runs on only one render
// useEffect(() => {
//  alert("i only run on first render")
// }, [])


//variation:3
//runs on anything selected item updated on thr ui
// useEffect(() => {
//  alert("i only runs when first value is updated")
// }, [first])



//variaton:4
//multiple dependencies
// useEffect(() => {
//     alert("i only runs when first & total value is updated")
// }, [first,total])



//variaton:5
//add a clean-up function
// useEffect(() => {
//   alert("count is updated");

//   return () => {
//     alert("first is unmounted from UI");
//   }
// }, [first])


  return (
    <div>
<h1>use of useEffect</h1>
        <button onClick={incHandel} className='p-3 bg-amber-200 rounded ml-10'>increase</button>
        <p>increase {first}</p>


         <button onClick={totalHandel} className='p-3 bg-amber-200 rounded ml-10'>Total increase</button>
        <p>total {total}</p>
    </div>
  )
}

export default Useeffect