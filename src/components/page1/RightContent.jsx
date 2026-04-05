import React from 'react'
import RightCard from './RightCard'


{/* agr isme aur right card bdhaate hai to isme simple right card me jaake shrink add kr denge   */}
const RightContent = (props) => {
    console.log(props.users)
    return(
        <div  id='right' className=' h-[81vh] w-2/3 flex flex-nowrap overflow-x-auto gap-4  text-black py-4 p-6'>
            {props.users.map(function(elem , idx) {
                return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
            })}
        </div>

    )
}
export default RightContent