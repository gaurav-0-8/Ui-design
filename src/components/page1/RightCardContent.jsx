import React from 'react';
const RightCardContent = (props) =>{
    
    return(
        <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between '>
            <h2 className='text-right bg-red-300 text-2xl  rounded-10 h-12 w-12 flex justify-center items-center rounded-full ml-auto'>{props.id + 1}</h2>
            <div className=' flex flex-col justify-end h-full gap-6'>
                <i> <p className='text-red-200 mb-4 text-left '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum tempora accusamus est alias ipsam doloremque distinctio debitis earum quas.
                    </p>
                </i>
                    <div className='flex gap-15 '>
                        <button  className={` ${props.color} text-white font-medium py-2 px-4 rounded-full text-lg`}>{props.tag}</button>
                        <button className={` ${props.color} text-white font-medium py-2 px-4 rounded-full text-lg`}><i className="ri-arrow-right-line"></i></button>
                    </div>
            </div>
                
        </div>

    )
}
export default RightCardContent