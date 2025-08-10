import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Card from './components/Card';
import Ex1 from './components/ex1';
import ApiFetch from './components/ApiFetch';
import { Route, Routes } from 'react-router-dom';
import Learn from './components/Learn';
// import { useEffect } from 'react';
import Useeffect from './components/Useeffect';
import ResizeComponent from './components/ResizeComponent';
import UseContext from './components/UseContext';

function App() {


            //Use state string change
let [name,changename]=useState("sagar");
function change(){
  console.log("executed");
  changename("nilamani");
  console.log(name);
}


            //use state counter
let[count,changecount]=useState(0);
function counter(){
  console.log("counter execute");
  changecount(count+1);
}

//form handler
const [FormName, setname] = useState("");
const submitHandler=(e)=>{
  console.log(FormName);
  console.log("submited");
  setname("");
  e.preventDefault();
  }

// props 
const details="Learn React";
const usersData=[
    {
        "name": "Amit Sharma",
        "age": 24,
        "profession": "Web Developer",
        "state": "Maharashtra"
    },
    {
        "name": "Priya Singh",
        "age": 28,
        "profession": "Data Analyst",
        "state": "Karnataka"
    },
    {
        "name": "Ravi Kumar",
        "age": 22,
        "profession": "Graphic Designer",
        "state": "West Bengal"
    },
    {
        "name": "Sneha Patel",
        "age": 30,
        "profession": "Software Engineer",
        "state": "Gujarat"
    },
    {
        "name": "Arjun Das",
        "age": 26,
        "profession": "Content Writer",
        "state": "Odisha"
    }
];



  return (
    <div>
{/* components */}
    <Navbar/>


      {/* state variable */}
    <h1 className='text-blue-700 ml-[100px] '>hello {name}</h1>
    <button className='text-red-700 bg-green-200 p-[10px] rounded-xl' onClick={change}>submit</button>
    <button onClick={counter}>counter {count}</button>



{/* form handler and two way binding*/}
    <form onSubmit={(e)=>{
      submitHandler(e);
    }}>
      <input onChange={(e)=>{
        setname(e.target.value);
      }}
      value={FormName} type="text" placeholder='only text' className='border rounded p-[5px] ' /> <br />
      
      <button type="submit" className='p-[3px] border bg-green-300 rounded mt-[5px]'>Submit</button>
    </form>


{/*props components */}
<div className=' flex gap-10 w-full h-max bg-emerald-400'>
      {usersData.map((e,idx)=>{
        return <Card key={idx}  name={e.name} age={e.age} profession={e.profession} state={e.state}  /> ;
      })}
</div>

<Ex1 Pdetails={" -> main value"}/>


{/* api fetch */}
{/* <ApiFetch/> */}

{/* react Router and api fetch */}
      <p>go to API FETCH by react-router <a href="/ApiFetch" className='text-blue-700 font-extrabold underline'>GO</a></p>

      <Routes>
        <Route path='/Learn' element={<Learn/>}></Route>
        <Route path='/ApiFetch' element={<ApiFetch/>}></Route>
      </Routes>


{/* use effect */}
      <Useeffect/>
      <ResizeComponent/>


      {/* use context */}

      <UseContext/>



    </div>
  )
}

export default App
