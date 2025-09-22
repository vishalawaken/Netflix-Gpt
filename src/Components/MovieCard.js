import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  if(!movie.poster_path) return null;
  return (
    <div className='w-48 pr-4'>
        <img alt="Movie Card" src={IMG_CDN_URL + movie.poster_path}></img>
    </div>
  )
}

export default MovieCard