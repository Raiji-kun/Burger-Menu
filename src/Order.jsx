import React from 'react'
import styled from 'styled-components';
import MenuAffiche from './Components/menu/menuAffichage/Menu';
import Navbar from './Components/menu/Navbar';

const Order = () => {
  return (
  <OrderPage>
    <Navbar/>
    <MenuAffiche />
  </OrderPage>
  )
}

const OrderPage = styled.div`
width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

`
export default Order