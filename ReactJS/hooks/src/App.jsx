import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  const increment = () => setNum(prev=>prev + 1)
  const decrement = () => setNum(prev=>prev - 1)
  const jumpBy5=()=>setNum(prev=>prev + 5) 
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-800">Counter</h1>
          <p className="text-sm text-slate-500 mt-1">Simple counter using React hooks</p>
        </header>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-6">
          <div
            aria-live="polite"
            className="text-5xl font-extrabold text-slate-900 bg-amber-50 px-8 py-4 rounded-lg w-full text-center"
          >
            {num}
          </div>

          <div className="w-full flex gap-3">
            <button
              onClick={increment}
              aria-label="Increment"
              className="flex-1 bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              +
            </button>
            <button
              onClick={decrement}
              aria-label="Decrement"
              className="flex-1 bg-amber-100 text-amber-800 py-2 rounded-lg font-semibold hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200"
            >
              -
            </button>
             <button
              onClick={jumpBy5}
              aria-label="JumpBy5"
              className="flex-1 bg-amber-100 text-amber-500 py-2 rounded-lg font-semibold hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200"
            >
              +5
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App