import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate(); 

  const handleClicks = () => {
    navigate('/'); 
  };

  return (
    <div>
      <h1>Erreur de la page</h1>
      <button onClick={handleClicks}>Revenir à la page d'accueil</button>
    </div>
  );
}

export default Error;