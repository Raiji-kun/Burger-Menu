import React from 'react'
import styled from 'styled-components'

function CarteNourriture({id , title , imageSource, price}) {

  return (

    <Cartenourriture id={id}>

      <div className='imageProduct'>
        <img src={imageSource} />
      </div>

      <div className='infoText'>

        <div className='title'>
          <h2>{title}</h2>
        </div>

        <div className='description'>
          <p>{price}円</p>
          <button>ajouter</button>
        </div>

      </div>
    
    
</Cartenourriture>
  )
}
const Cartenourriture = styled.div`
width: 240px;
height: 330px;
box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
background-color: #ffffff;
border-radius: 15px;
display: flex;
flex-direction: column;

.imageProduct{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img{
    width: 100%;
    height: 95%;
  object-fit: cover;
}

}

.infoText{
  height: 50%;
  
  display: flex;
  flex-direction: column;
}

.description{
  
  display: flex;
  justify-content: space-between;
}


`
export default CarteNourriture