import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-blue-400 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap text-center'>
            <span className='text-slate-500'>Real</span>
            <span className='text-slate-700'>Estate</span>
            <span className='text-red-700'>.com</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex item-center'>
            <input type="text" placeholder='Search...' className='bg-transparant rounded-lg focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-500'/>
        </form>
        <ul className='flex gap-4'>
           <Link to='/Home'><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link> 
            <Link to='/About'><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
            <Link to='/sign-in'><li className='hidden sm:inline text-slate-700 hover:underline'>Signin</li></Link>
        </ul>
        
        </div>
    </header>
  )
}

export default Header