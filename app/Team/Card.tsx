import React from 'react'

export default function Card(props : any) {
  return (
    <div className="card flex content-center p-5 rounded-md w-80 bg-slate-950 gap-8 shadow-xl shadow-slate-700 drop-shadow-md sm:w-96 mb-4">
        <img src={props.image} alt="" className="aspect-square w-20 rounded-full "></img>
        <div className='flex-col gap-4 content-center'>
          <p className='text-xl font-semibold text-teal-600'>{props.name}</p>
          <p className=' text-sm font-light'>{props.post}</p>
        </div>
    </div>
)}

