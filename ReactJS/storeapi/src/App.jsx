import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState(null)
  //const [user, setUser] = useState([])

  const getUser=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    setUser(response.data)
  }
  return (
    <>
      <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition" onClick={getUser}>Click Me</button>
       {/* {user.map} */}
       {user && user.map((u,idx)=>(
        <div key={idx} className="mt-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">{u.name}</h2>
          <p className="text-sm text-gray-600">{u.email}</p>
          <p className="text-sm text-gray-600">{u.phone}</p>
          <p className="text-sm text-gray-600">{u.website}</p>
        </div>
      ))}
    </>
  )
}

export default App