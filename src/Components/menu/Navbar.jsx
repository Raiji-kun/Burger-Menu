import React from 'react'
import { useParams } from 'react-router-dom'
import logo from "../../assets/logo-orange.png"
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import ToggleButton from './menuAffichage/ToggleButton';

export default function Navbar() {
    const { nom } = useParams();
  return (
    <NavbarContainer>
    <div className='block1'>    
      <h1>crazy</h1>
      <img  src={logo} style={{  width : "60px",
      height : "60px"}}/>
      <h1>burger</h1>
    </div>
    <ToggleButton />
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
</NavbarContainer>

  )
}

const NavbarContainer = styled.div`
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