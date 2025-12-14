import React from 'react'

const CompactHeader = () => {
  const details = {
    name: "Jane Doe",
    role: "Frontend Engineer — TechCorp",
    location: "Bangalore, IST • Available",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop"
  }

  return (
    <div className="flex items-start gap-4">
      <img
        src={details.avatar}
        alt={details.name}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-white shadow-sm flex-shrink-0"
      />

      <div className="min-w-0">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 truncate">{details.name}</h2>
        <p className="text-sm text-slate-600 mt-1 truncate">{details.role}</p>
        <p className="text-sm text-slate-500 mt-1 truncate">{details.location}</p>
      </div>
    </div>
  )
}

export default CompactHeader