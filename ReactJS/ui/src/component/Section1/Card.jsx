import React from 'react';

const Card = ({ title, desc, img, status }) => {
  const statusClasses = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-slate-100 text-slate-800',
    planning: 'bg-yellow-100 text-yellow-800',
    maintenance: 'bg-indigo-100 text-indigo-800',
    default: 'bg-gray-100 text-gray-800'
  };
  const badgeClass = statusClasses[status] || statusClasses.default;

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full flex-none w-72 min-w-[18rem]">
     <div className="h-40 md:h-48 w-full bg-gray-100 overflow-hidden flex-none">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeClass}`}>
            {status}
          </span>
        </div>

        <p className="text-sm text-slate-600 mt-2 flex-1">{desc}</p>

        <div className="mt-4">
          <button className="text-sm bg-sky-600 text-white px-3 py-1.5 rounded-md hover:bg-sky-700">
            View
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;