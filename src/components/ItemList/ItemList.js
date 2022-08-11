import React from 'react'
import Item from '../Item/Item'

export default function ItemList (props) {
  return (
    props.items.map((item) => {
        return(<Item imgUrl={item.download_url} productName={item.author}/>)
      })
  )
}
