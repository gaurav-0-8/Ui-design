import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-6 px-16 w-full bg-yellow-500 '>
        
        <h4 className='bg-red-500 text-black px-7 py-4 rounded-full uppercase p-4 tracking-wider'>
          Target Audience
        </h4>

        <button className='bg-green-500 text-black px-6 py-2 uppercase tracking-wider rounded-full'>
          digital banking platform
        </button>

    </div>
  )
}

export default Navbar