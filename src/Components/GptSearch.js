import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className='h-screen w-screen object-cover' src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" alt="main-image"></img>
      </div>
    <div className=''>
       
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestions></GptMovieSuggestions>
    </div>
    </>
  )
}

export default GptSearch