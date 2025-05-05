import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import logo from './assets/logo-orange.png';
import background from './assets/burger-background.jpg';

function App(){
let [nom, setNom] = useState("");
const navigate = useNavigate();

const handleclik = (e) =>{
  
  e.preventDefault();
  
  if(nom.trim() === ""){
   
    alert("Please fill out this field");
    return ;
  }
  setNom("")
  alert("bonjour "+ nom)
  navigate('order/'+ nom);
}



return (

<BoiteMain id="boiteMain">
 

  <div id="boiteLogo">
    <h1>crazy</h1>
    <img  src={logo} style={{  width : "100px",
  height : "100px"}}/>
    <h1>burger</h1>
  </div>
  <div id="boiteLogin">
  <h1> bienvenue chez nous </h1>
  <hr />
    <h1>connectez vous !</h1>
    <form onSubmit={handleclik} >
    <BsPersonCircle className="petitLogo"/>
    <input value={nom} onChange={(e) => setNom(e.target.value)} type="text"  placeholder="entrez votre prenom" required/>
    <input type="submit"  value="accedez a votre espace" />
    </form>
    </div>
</BoiteMain>
)}


import styled from 'styled-components';

const BoiteMain = styled.div`
  
  display: flex;
  flex-direction: column;
  
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-image: url(${background});
  background-size: cover;

  #boiteLogo{
  display: flex;
  flex-direction: row;
  justify-content: center;

}
#boiteLogo h1{
  color: orange;
}
#boiteLogin h1 {
  color: whitesmoke;
 
}
#boiteLogin hr {
  width: 20%;
}
.petitLogo{
  background-color: white;
  height: 20px;
}
`;

export default App
