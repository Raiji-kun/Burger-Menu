
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
            {nameOnglet.map((x)=>{
      return <OngletButton key={x.id} id={x.id} title={x.title}  />})}
    </BlockOnglet>
  )
}

export default BarreAdminMenuOnglet

const BlockOnglet = styled.div`
  
  display: flex;
  height: 20%;
  
`