import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import pokeball from "../assets/pokeball.svg";

const ContenedorAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  a {
    text-decoration: none;
    color: #3498db;
    font-weight: bold;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    color: #333;
    margin-top: 10px;
    line-height: 1.5;
  }

  &:hover {
    background-color: #ffcb05;
    transition: background-color 0.3s ease-in-out;
  }
`;

const About = () => {
  const getRandomPokemonId = () => Math.floor(Math.random() * 898) + 1;

  const [randomId, setRandomId] = useState(getRandomPokemonId());
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    const getPokemonName = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        setPokemonName(data.name);
      } catch (error) {
        console.error('Error fetching Pokémon data', error);
      }
    };

    getPokemonName();

    const intervalId = setInterval(() => {
      setRandomId(getRandomPokemonId());
    }, 3000);

    return () => clearInterval(intervalId);
  }, [randomId]);

  return (
    <ContenedorAbout>
      <div>
        <div>
          <Link to="/">
            <img width={30} src={pokeball} alt="pokeball" />
          </Link>
        </div>
        <h2 className="pokemon-name">{pokemonName}</h2>
      </div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`} alt={pokemonName} />
      <p>{`This is an app developed using ReactJS and SASS. It uses data from PokeAPI.`}</p>
      <p>Developer: Nora Petro Torres.</p>
    </ContenedorAbout>
  );
};

export default About;
