import React from 'react'
import styled from 'styled-components'
import burger from "../../../assets/burger1.png"
import burger2 from "../../../assets/burger2.png"
import CarteNourriture from "./carteNourriture"


function MenuAffiche() {

  const menuNourriture = [
    {
      image: burger,
      id: "1",
      nom: "Big Mac",
      prix: "5 euros",
    },
    {
      image: burger2,
      id: "2",
      nom: "cheeseburger",
      prix: "3 euros",
    },
    {
      image: "",
      id: "3",
      nom: "raphael",
      prix: "1 euros",
    },
    {
      image: burger,
      id: "4",
      nom: "Big Mac",
      prix: "5 euros",
    },
    {
      image: burger,
      id: "4",
      nom: "Big Mac",
      prix: "5 euros",
    },
    {
      image: burger,
      id: "4",
      nom: "Big Mac",
      prix: "5 euros",
    },

  ]
  ;
    return (
      <Menu>
      {menuNourriture.map((x) => ( <CarteNourriture menu={x} />
      ))}
    </Menu>
  )
}

const Menu = styled.div`
width: 100%; 
min-height: 100%;

display: flex;
flex-wrap: wrap;
  justify-content: flex-start;
justify-content: space-around;

border: black solid 1px;
background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px 150px;
    grid-row-gap: 60px;
`

export default MenuAffiche