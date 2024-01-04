/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContenedorPokemonCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  text-align: center;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  color: #424242;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }
`;

const ImagenPokemon = styled.img`
  max-width: 90%;
  margin-top: 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NombrePokemon = styled.h2`
  display: block;
  background-color: #f8f8f8;
  padding: 0.5rem 0;
  font-size: 1.2em;
  font-weight: bold;
  border-top: 1px solid #e0e0e0;
  margin-top: 1rem;
  color: #5c5c5c;
`;

const PokemonCard = ({ pokemon }) => {
  return (
    <ContenedorPokemonCard>
      <Link to={`/pokemon/${pokemon.name}`}>
        <ImagenPokemon
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <NombrePokemon>{pokemon.name}</NombrePokemon>
      </Link>
      {/* ... más información */}
    </ContenedorPokemonCard>
  );
};

export default PokemonCard;









// import { Link } from 'react-router-dom';
// import styles from '../styles/PokemonCard.module.scss';

// const PokemonCard = ({ pokemon }) => {
//   return (
//     <div className={styles.pokemonCard}>
//       <Link to={`/pokemon/${pokemon.name}`} className={styles.pokemonLink}>
//         <img
//           className={styles.pokemonImage}
//           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
//           alt={pokemon.name}
//         />
//         <h2 className={styles.pokemonName}>{pokemon.name}</h2>
//       </Link>
//       {/* ... más información */}
//     </div>
//   );
// };


// export default PokemonCard;


