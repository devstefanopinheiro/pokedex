import React, { useEffect, useState } from 'react';
import styles from './PokemonList.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonList = ({ onSelectPokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPokemons, setTotalPokemons] = useState(0);

  useEffect(() => {
    let cancelRequest = false;

    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (page - 1) * 20
          }&limit=20`,
        );
        const results = response.data.results;

        if (!cancelRequest) {
          setPokemons(results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();

    return () => {
      cancelRequest = true;
    };
  }, [page]);

  useEffect(() => {
    let cancelRequest = false;

    const fetchTotalPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const count = response.data.count;

        if (!cancelRequest) {
          setTotalPokemons(count);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalPokemons();

    return () => {
      cancelRequest = true;
    };
  }, []);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(totalPokemons / 20);
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.lista_pokemon}>
      <h2>Lista de Pokemons</h2>
      <p>Total de Pokemons: {totalPokemons}</p>
      <div>
        <button onClick={handlePreviousPage}>Antes</button>
        <button onClick={handleNextPage}>Próximo</button>
      </div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} onClick={() => onSelectPokemon(pokemon)}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemon.url.split('/')[6]
              }.png`}
              alt={pokemon.name}
            />
            <span>{pokemon.name}</span>
            <button onClick={() => onSelectPokemon(pokemon)}>Detalhes</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage}>Antes</button>
        <button onClick={handleNextPage}>Próximo</button>
      </div>
    </div>
  );
};

export default PokemonList;
