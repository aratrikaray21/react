import React from 'react'
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by: ", name);
    setName('')
   
  }
  return (
    <>
    <form onSubmit={(e)=>submitHandler(e)}>
      <input type="text" placeholder="Enter your name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="border-2 border-gray-300 p-2 rounded-md"/>
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded-md">Submit</button>

    </form>
    </>
  )
}

export default App