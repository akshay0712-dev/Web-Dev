import React from 'react'

const navbar = () => {

    
  return (
    <div className='flex justify-between bg-slate-700 items-center px-7 text-white py-3 text-lg'>
      <span className="logo font-bold text-xl">iTask</span>
      <div>
        <ul className='flex gap-9'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
        </ul>
      </div>
    </div>
  )
}

export default navbar
