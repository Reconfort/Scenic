import React from 'react'

const ProcessCard = ({id, title, desc}) => {
  return (
    <div className='w-96 flex p-0 border-solid border-2 border-slate-500 rounded-3xl relative group '>
      <div className="bg-slate-500 w-24 h-24 rounded-2xl p-2 flex justify-center items-center">
        <h2 className='infoWelcome font-bold text-2xl'>{id}</h2>
      </div>
      <div className="w-4/6 p-2 text-slate-500 flex flex-col">
        <h1 className='text-2xl uppercase'>{title}</h1>
        <p className='text-xs text-slate-400'>{desc}</p>
      </div>
    </div>
  )
}
export default ProcessCard
