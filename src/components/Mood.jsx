import React from 'react'

const Mood = ({mood, children}) => {
    let emoji = "🙂";
    if(mood==="happy") emoji ="😊";
    else if (mood==="sad") emoji ="😔";
  return (
    <>
      <h1 className='text-5xl mb-4'>{emoji}</h1>
      <p className='font-general-sans font-light'>{children}</p>
    </>
  )
}

export default Mood
