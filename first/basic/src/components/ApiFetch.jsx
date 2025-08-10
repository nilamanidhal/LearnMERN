import React, { useState } from 'react'
import axios from 'axios'

const ApiFetch = () => {
const [data, setdata] = useState([])
const [loading, setloading] = useState(false)

    const apiHandel= async ()=>{  
            console.log("tapped"); 
            setloading(true);
        const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
        setdata(response.data);
        setloading(false);
        console.log(data);
    }


  return (
    <div>
      <button onClick={apiHandel} className='p-4 text-2xl text-blue-50 rounded-2xl m-8 font-bold bg-emerald-800'>Data from api</button>
     {

     loading? <h1 className='text-3xl font-bold text-center'>Loading...</h1> :
               data.map((e,idx)=>{
          return  <div className='bg-amber-200 flex flex-row-reverse justify-between w-full h-max mx-7 my-7 py-10 rounded-2xl' > 
          <h1 key={idx} className='bg-blue-400 mr-10'>{e.author}</h1> 
          <img src={e.download_url} alt="" className='h-30 ml-10' /> </div>
        })
      
      }
       <p>go Back by react-router <a href="/" className='text-blue-700 font-extrabold underline'>GO BACK</a></p>
    </div>
  )
}

export default ApiFetch
