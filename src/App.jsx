import React from 'react'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'


import './App.css'

const App = () => {
  const users =[
    {
      img: 'https://i.pinimg.com/originals/77/71/68/7771683223d86b237a3304d6f32828b9.jpg',
      intro: '',
      color: 'bg-green-500',
      tag: 'satisfied'
    },
    {
      img: 'https://images.pexels.com/photos/16182245/pexels-photo-16182245.jpeg?cs=srgb&dl=pexels-greecechina-news-16182245.jpg&fm=jpg',
      intro: '',
      color: 'bg-blue-500',
      tag: 'Underserved'
    },
    {
      img: 'https://images.pexels.com/photos/7580778/pexels-photo-7580778.jpeg?cs=srgb&dl=pexels-rdne-7580778.jpg&fm=jpg',
      intro: '',
      color: 'bg-yellow-500',

      tag: 'UnderBanked'
    },
    {
      img: 'https://images.pexels.com/photos/7504855/pexels-photo-7504855.jpeg?cs=srgb&dl=pexels-olha-ruskykh-7504855.jpg&fm=jpg',
      intro: '',
      color: 'bg-red-500',

      tag: 'UnderRanked'
    },
  ]
  
  return (
    <div className=' h-full w-screen bg-white'>
      <Page1 users={users} />
      
    </div>
  )
}

export default App
