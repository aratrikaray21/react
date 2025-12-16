import React from 'react'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await response.json()
      console.log(data)
      setUser(data)
    }
    catch (e) {
      console.log("Error:", e)
    }
  }

  return (
    <>
      <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition" onClick={getUser}>Click Me</button>
       {user && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-600">{user.phone}</p>
          <p className="text-sm text-gray-600">{user.website}</p>
        </div>
      )}


    </>
  )
}

export default App