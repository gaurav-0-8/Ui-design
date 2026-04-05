import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-[81vh] w-1/3 px-6  text-black flex flex-col justify-between  text-left'>
             <HeroText />
             <Arrow />
         
           
        </div>
    )
}

export default LeftContent