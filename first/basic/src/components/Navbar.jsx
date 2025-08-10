import React from 'react'
import Learn from './Learn'
import {Link} from 'react-router-dom'
const Navbar = () => {
  
  return (
    <>
      <nav className='bg-emerald-950 w-full h-15 flex justify-between items-center text-white'>
        <p className='ml-10 font-sans font-bold text-xl'>React</p>
        <ul className='flex gap-20 font-sans mr-10 font-bold'>
            <li>About</li>
            <li>Pricing</li>
            <li> <Link to='/Learn'>Learn</Link></li>
            <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
