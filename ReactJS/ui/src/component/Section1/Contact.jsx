import React from 'react'

const Contact = () => {
  return (
     <div className="pt-3 border-t border-slate-100 flex gap-2">
          <button className="flex-1 px-3 py-1.5 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700">
            Message
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-3 py-1.5 border border-sky-200 text-sky-700 rounded-lg text-sm font-medium hover:bg-sky-50"
          >
            Resume
          </a>
        </div>
  )
}

export default Contact