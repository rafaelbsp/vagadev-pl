import React from 'react'

interface PropsBanner {
  id: number
  game: string
  price: number
  imgUrl: string
  textGame: string
} 

function BannerItem({
    id,
    game,
    price,
    imgUrl,
    textGame,
}:PropsBanner) {

  return (
    <img src={imgUrl} >BannerItem</img>
  )
}

export default BannerItem