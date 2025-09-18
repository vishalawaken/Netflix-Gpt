import React from 'react'
import lang from '../utils/LanguageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const currentLanguage=useSelector((store)=>store.language.language)
    
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input type="text" className='p-4 m-4 rounded-lg col-span-9' placeholder={`${lang[currentLanguage].gptSearchPlaceholder}`} />
            <button className='py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3'>{lang[currentLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar