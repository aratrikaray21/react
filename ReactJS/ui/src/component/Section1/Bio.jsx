import React from 'react'

const Bio = () => {
  const skills = ['React', 'TypeScript', 'CSS', 'Accessibility']
  const content = {
    about: "Building accessible, high-performance UIs. Focus: React, TypeScript, CSS.",
    passion: "Passionate about creating seamless user experiences and writing clean, maintainable code."
  }

  return (
    <div className="mt-1">
      <p className="mb-2 text-sm md:text-base text-slate-700">
        {content.about}
      </p>

      <p className="text-sm md:text-base text-slate-600">
        {content.passion}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Bio