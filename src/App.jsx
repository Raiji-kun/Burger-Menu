import { useState } from "react"
import { useNavigate } from "react-router-dom";

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



return (<div>
  <h1> bienvenue chez nous </h1>
  <h2>connectez vous !</h2>
    <form onSubmit={handleclik} >
    <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" placeholder="entrez votre prenom" required/>
    <input type="submit"  value="accedez a votre espace" />
    </form>
  
  </div>
)}

export default App
