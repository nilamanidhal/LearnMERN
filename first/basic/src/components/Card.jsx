import React from 'react'

const Card = (props) => {
    // console.log(props.userDetails)
  return (
    <div className='bg-amber-100 w-40  flex flex-col items-center justify-center h-45 leading-4.5'>

    <div className='h-10 w-10 bg-gray-600 mt-1 mb-4  rounded-full'></div>
      <p>{props.name}</p>
      <p> {props.age}</p>
      <p> {props.profession}</p>
      <p> {props.state}</p>
      <div className='p-1 bg-green-950 text-white rounded'>ADD</div>

    </div>
  )
}

export default Card
