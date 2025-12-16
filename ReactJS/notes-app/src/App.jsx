import React, { useState } from 'react';

const App = () => {

  const [heading, setHeading] = useState('')
  const [noteBody, setNoteBody] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [editHeading, setEditHeading] = useState('')
  const [editBody, setEditBody] = useState('')

  

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...tasks]
    copyTask.push({ heading, noteBody })
    setTasks(copyTask)
    setHeading('');
    setNoteBody('');
  }

  const deleteNote = (idx) => {
    const taskLists = [...tasks]
    taskLists.splice(idx, 1)
    setTasks(taskLists)
  }
  
  const startEdit = (idx) => {
    setEditIndex(idx)
    setEditHeading(tasks[idx].heading)
    setEditBody(tasks[idx].noteBody)
  }

  const cancelEdit = () => {
    setEditIndex(null)
  }

  const saveEdit = (idx) => {
    const updatedTasks = [...tasks]
    updatedTasks[idx] = { heading: editHeading, noteBody: editBody }
    setTasks(updatedTasks)
    setEditIndex(null)
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-yellow-50 flex items-center justify-center p-6 font-sans">
      <main className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-pink-100">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-rose-600">✨ Cute Notes</h1>
          <p className="text-sm text-rose-500 mt-2">Tiny, cheerful notes to brighten your day 💖</p>
        </header>

        <form className="space-y-4" onSubmit={(e) => submitHandler(e)}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-rose-600 mb-1">Heading</label>
            <input
              id="title"
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="e.g. Grocery list"
              className="w-full rounded-2xl border border-rose-100 px-4 py-2 bg-white shadow-sm placeholder:italic focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
          </div>

          <div>
            <label htmlFor="body" className="block text-sm font-medium text-rose-600 mb-1">Note</label>
            <textarea
              id="body"
              rows="6"
              value={noteBody}
              onChange={(e) => setNoteBody(e.target.value)}
              placeholder="Write something cute..."
              className="w-full rounded-2xl border border-rose-100 p-4 bg-white shadow-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-md hover:scale-[1.02] transition-transform"
            >
              <span>💾</span>
              <span>Save Note</span>
            </button>
          </div>
        </form>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-rose-700 flex items-center gap-2">Recent Notes <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full">{tasks.length}</span></h2>
        
          </div>

          <div className="space-y-3">
            {tasks.map((task, idx) => (
              <div key={idx} className="space-y-2">
                <article className="bg-white rounded-xl p-4 flex items-start justify-between gap-4 border border-rose-50 shadow-sm">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-rose-700 truncate">{task.heading}</h3>
                    <p className="text-sm text-rose-500 mt-1 max-h-20 overflow-hidden">{task.noteBody}</p>
                  </div>

                  <div className="flex flex-col gap-2 items-end">
                    <button
                      type="button"
                      onClick={() => deleteNote(idx)}
                      className="text-xs text-rose-700 bg-rose-50 px-3 py-1 rounded-full hover:bg-rose-100"
                      aria-label="Delete note"
                    >
                      🗑️ Delete
                    </button>

                    <button
                      type="button"
                      onClick={() => startEdit(idx)}
                      className="text-xs text-rose-700 bg-rose-50 px-3 py-1 rounded-full hover:bg-rose-100"
                      aria-label="Edit note"
                    >
                      ✏️ Edit
                    </button>
                  </div>
                </article>

                {editIndex === idx && (
                  <form className="bg-white rounded-xl p-4 mt-2 border border-rose-50 shadow-sm space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-rose-600 mb-1">Heading</label>
                      <input
                        value={editHeading}
                        onChange={(e) => setEditHeading(e.target.value)}
                        className="w-full rounded-xl border border-rose-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-rose-600 mb-1">Note</label>
                      <textarea
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                        rows="4"
                        className="w-full rounded-xl border border-rose-100 p-3 resize-vertical focus:outline-none focus:ring-2 focus:ring-rose-200"
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <button type="button" onClick={() => saveEdit(idx)} className="px-3 py-1.5 bg-rose-500 text-white rounded-full text-sm">Save</button>
                      <button type="button" onClick={cancelEdit} className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full text-sm">Cancel</button>
                    </div>
                  </form>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;