import React from 'react'
import styled from 'styled-components'
import CarteNourriture from './carteNourriture'
import { useState } from 'react'
import {fakeMenu2} from "../fakeData/fakeMenu"

export default function MenuCarte() {
  const [products, setproducts] = useState(fakeMenu2);
  return (  
  <MenuCarteNourriturre>
        {products.map((x) => {
           console.log(x);
      return <CarteNourriture key={x.id} id={x.id} title={x.title} imageSource={x.imageSource} price={x.price}/>; })}
    </MenuCarteNourriturre>
  )

}

const MenuCarteNourriturre = styled.div`
width: 100%; 
min-height: 100%;

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 60px;
padding: 50px 50px 150px;
justify-items: center;

border: black solid 1px;
background: #F5F5F7;
box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    
    `