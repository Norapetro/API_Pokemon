import PokemonCard from './PokemonCard';
import usePokemonApi from '../hooks/usePokemonApi';
import styles from '../styles/PokemonList.module.scss';
import loader from '../assets/loader.gif';

import PropTypes from 'prop-types';

const PokemonList = ({ searchQuery }) => {
  const { pokemons, loading } = usePokemonApi();

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p><img src={loader} alt="loader" /></p>;
  }
  return (
  <div className={styles.pokemonList}>
    {filteredPokemons.map((pokemon) => (
      <PokemonCard key={pokemon.name} pokemon={pokemon}/>
    ))}
  </div>
  );
};

PokemonList.propTypes = {
  searchQuery: PropTypes.string,
};

export default PokemonList;
