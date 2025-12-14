import React from 'react'
import Card from './Card'


const RightContent = (props) => {
  return (
    <section
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4"
        >
          {props.projects.map((project) => (
            <div key={project.id} className="snap-start flex-none">
              <Card
                title={project.title}
                desc={project.desc}
                img={project.img}
                status={project.status}
              />
            </div>
          ))}
        </section>
  )
}

export default RightContent