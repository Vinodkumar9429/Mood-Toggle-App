import React, { useState } from 'react'
import Mood from './components/mood'

const App = () => {
  const [mood, setMood] = useState("neutral");
  const toggleFunc = () =>{
    if(mood==="neutral") setMood("happy");
    else if(mood==="happy") setMood("sad")
    else setMood("neutral");
  }


  return (
    <div className='flex flex-col justify-center items-center h-screen'>

      <Mood mood={mood}>
      <p>This is some text from children props</p>
      </Mood>
      <button 
      className='px-20 py-3 bg-black text-white rounded-2xl mt-4 font-extrabold font-general-sans cursor-pointer'
      onClick={toggleFunc}
      >
        Toggle
      </button>
    </div>
  )
}

export default App
