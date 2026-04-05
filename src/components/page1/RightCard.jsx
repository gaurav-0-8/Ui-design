import React from 'react';
import RightCardContent from './RightCardContent';
const RightCard = (props) => {
    return(
        <div className='h-[70vh] w-[30%] p-2 m-4 flex-shrink-0  overflow-hidden relative '>
            
            <img  className='h-full w-full object-cover rounded-3xl' src={props.img} alt=""
             />
            <RightCardContent  id={props.id} color={props.color} tag={props.tag} />
            
        </div>
      
      
    )
}
export default RightCard