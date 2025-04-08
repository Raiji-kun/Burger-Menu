import React from 'react'
import { useParams } from 'react-router-dom'




const Order = () => {
    const { nom } = useParams();
  return (

    <div>
        <h1>yo {nom}</h1>
        
    </div>
  )
}

export default Order