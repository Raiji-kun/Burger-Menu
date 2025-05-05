import React from 'react'
import styled from 'styled-components'

function CarteNourriture({menu}) {

  return (

    <Cartenourriture id={menu.id}>
    <img src={menu.imageSource} />
    <h2>{menu.title}</h2>
    <p>{menu.price}</p>
</Cartenourriture>
  )
}
const Cartenourriture = styled.div`


width: 240px;
height: 330px;
box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
background-color: #ffffff;

border-radius: 15px;


img{   width: 50%;
  height: 50%;
  object-fit: cover;
}

`
export default CarteNourriture