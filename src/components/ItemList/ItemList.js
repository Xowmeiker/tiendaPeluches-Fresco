import React from 'react'
import Item from '../Item/Item'

export default function ItemList (props) {
  return (
    props.items.map((item) => {
        return(<Item imgUrl={item.image} productName={item.title} productPrice={item.price} id={item.id} key={item.id}/>)
      })
  )
}
