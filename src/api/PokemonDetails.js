import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './PokemonDetails.module.css';

const PokemonDetails = ({ pokemon }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pokemon]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      {details ? (
        <div className={styles.detalhes_pokemon}>
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`}
              alt={details.name}
            />
          </div>
          <div className={styles.pokemons}>
            <h2>Detalhes do Pokemon</h2>
            <h3>{details.name}</h3>
            <p>Altura: {(details.height / 10).toFixed(1)} m</p>
            <p>Peso: {(details.weight / 10).toFixed(1)} kg</p>
            <p>Base de Experiência: {details.base_experience}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button className={styles.reload} onClick={handleReload}>
        Voltar
      </button>
    </div>
  );
};

export default PokemonDetails;
