import React from 'react'

const App = () => {

  localStorage.setItem('user', 'Aratrika')
  localStorage.setItem('age', '20')
  console.log(localStorage.getItem('user'))
  console.log(localStorage.getItem('age'))
  localStorage.removeItem('cute_notes_tasks')

  const project={
    name: 'Cute Notes',
    version: '1.0.0',
    description: 'A cute notes app'
  }

  localStorage.setItem('project', JSON.stringify(project))
  const str=localStorage.getItem('project')
  console.log(typeof(str))
  const savedProject=JSON.parse(localStorage.getItem('project'))
  console.log(savedProject)
  return (
    <div>App</div>
  )
}

export default App