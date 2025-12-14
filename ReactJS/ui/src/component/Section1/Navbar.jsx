import React from 'react'

const Navbar = () => {
  return (
    <header className='items-center p-4 bg-gray-800 text-white'>
      <div className='flex justify-between items-center'>
        <a href="/">Brand</a>

        <nav>
          <ul className='hidden md:flex gap-4 '>
            <li><a href="#">Home</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className='md:hidden'>☰</button>   
        <div className='hidden md:flex gap-4'>
          <button className='bg-blue-600 px-4 py-2 rounded'>Sign in / Sign up</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar