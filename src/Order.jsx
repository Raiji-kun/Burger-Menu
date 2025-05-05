import React from 'react'
import { useParams } from 'react-router-dom'
import logo from './assets/logo-orange.png';
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import MenuAffiche from './Menu';
import burger from "./assets/burger1.png"
import burger2 from "./assets/burger2.png"

const Order = () => {
    const { nom } = useParams();


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


  return (<TaMere>



    <Navbar>
        <div className='block1'>    
          <h1>crazy</h1>
          <img  src={logo} style={{  width : "60px",
          height : "60px"}}/>
          <h1>burger</h1>
        </div>
        <div className='block2'>
          <div className='block2bis1'>
            <div className='title'>
            <p>Hey,{nom}</p>
            </div>
            <div className='buttons'>
            <input type='button' value='deconnexion'/>
          </div>
          </div>
    
          <div className='block2bis2'>
          <BsPersonCircle className='petitLogo'/>
          </div>
           
        
        </div>  
    </Navbar>


    <Menu>
  {menuNourriture.map((x) => (

      <MenuAffiche menu={x} />
  ))}
</Menu>
    </TaMere>
  )
}



const TaMere = styled.div`
width: 100%;
  min-height: 100%;
`
const Navbar = styled.div`
background-color:#ffffff;
width: 100%;
  height: 90px;
  
  display  : flex ;
box-shadow: 1px 10px 5px 0px rgba(0,0,0,0.2);
-webkit-box-shadow: 1px 10px 5px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 1px 10px 5px 0px rgba(0,0,0,0.2);

.block1{
  width: 80vw;
  height: 4vw;
  
  display: flex;
}

.block2{
 
  width: 10vw;
  height: 4vw;
  display: flex;
  justify-content: center;
  flex-grow: 2;
 
}

.block2bis1{
 
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

 
}
.block2bis2{
  width: 45%;
  display: flex;
  align-items: center;
}
.petitLogo{
  height: 40px;
  width: 50px;
}

.title{
  height: 50%;
  display: flex;
  justify-content: center;
}

.buttons{
  height: 50%;
  
  display: flex;
  justify-content: center;
  align-items: center;

}

`

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
export default Order