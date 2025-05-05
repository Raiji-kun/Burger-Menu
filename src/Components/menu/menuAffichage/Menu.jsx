import React from 'react'
import styled from 'styled-components'
import MenuCarte from './menuCarte'


function MenuAffiche() {
    return (
      <Main>
        {/* <Basket /> */}
        <MenuCarte />
    </Main>
  )
}

const Main = styled.div`
width: 100%; 
height: 1000px;
display: grid;
grid-template-columns:  1fr; 

`
/* const Basket = styled.div`
  background-color: blue;
` */



export default MenuAffiche ;