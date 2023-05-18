import React from 'react';
import './Pokecard.css';

function Pokecard(props) {
  const { id, name, type, base_experience } = props.pokemon;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{name}</h3>
      <img className="Pokecard-image" src={imageUrl} alt={name} />
      <p className="Pokecard-details">Type: {type}</p>
      <p className="Pokecard-details">Base Experience: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
