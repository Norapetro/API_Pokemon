/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../styles/PokemonCard.module.scss';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className={styles.pokemonCard}>
      <Link to={`/pokemon/${pokemon.name}`} className={styles.pokemonLink}>
        <img
          className={styles.pokemonImage}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <h2 className={styles.pokemonName}>{pokemon.name}</h2>
      </Link>
      {/* ... más información */}
    </div>
  );
};

export default PokemonCard;
