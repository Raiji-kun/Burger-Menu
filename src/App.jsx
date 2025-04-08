import { useState } from "react"

function App(){
let [nom, setNom] = useState("")

const handleclik = () =>{
  if(nom.trim() === ""){
   
    alert("Please fill out this field");
    return ;
  }
  alert("bonjour "+ nom)
 console.log(nom)
}



return (<div>
  <h1> bienvenue chez nous </h1>
  <h2>connectez vous !</h2>

    <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" placeholder="entrez votre prenom" required/>
  <button onClick={handleclik} >accedez a votre espace</button>
  </div>
)}

export default App
