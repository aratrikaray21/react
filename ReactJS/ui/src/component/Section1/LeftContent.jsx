import React from 'react'
import CompactHeader from './CompactHeader'
import Bio from './Bio'
import Contact from './Contact'


const LeftContent = () => {
  return (
   <div className="w-full md:w-80 lg:w-96 p-4">
      <div className="bg-linear-to-tr from-white via-slate-50 to-sky-50 shadow-lg rounded-xl p-4 md:p-5 space-y-4">
        <CompactHeader />   
        <Bio />
        <Contact/>
        </div>
        </div>
  )
}

export default LeftContent