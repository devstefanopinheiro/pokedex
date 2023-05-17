import styles from './Blog.module.css';
import { useState } from 'react';
import PokemonDetails from '../../api/PokemonDetails';
import PokemonList from '../../api/PokemonList';

const Blog = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      {selectedPokemon ? (
        <PokemonDetails pokemon={selectedPokemon} />
      ) : (
        <PokemonList onSelectPokemon={handleSelectPokemon} />
      )}
    </div>
  );
};

export default Blog;
