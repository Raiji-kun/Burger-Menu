import { FiChevronDown } from "react-icons/fi";
import styled from 'styled-components';
import OngletButton from './OngletButton';


function BarreAdminMenuOnglet() {
        const nameOnglet = [
    {
    id : 1,
    title : "modifier un produit"
  },
    {   
    id : 2,
    title : "Ajouter un produit"
  }];
  return (
    <BlockOnglet>
      <FiChevronDown className="chevronDown"/>
            {nameOnglet.map((x)=>{
      return <OngletButton key={x.id} id={x.id} title={x.title}  />})}
    </BlockOnglet>
  )
}

export default BarreAdminMenuOnglet

const BlockOnglet = styled.div`
  
  display: flex;
  height: 20%;

.chevronDown{
  width: 60px;
  height: 40px;
  border : 0px;
  border-radius: 5px;
  border: 1px solid black;
}  
  
`