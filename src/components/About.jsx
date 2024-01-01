import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import styles from '../styles/About.module.scss';
import pokeball from "../assets/pokeball.svg";

const About = () => {
    const getRandomPokemonId = () => Math.floor(Math.random() * 898) + 1;

    const [randomId, setRandomId] = useState(getRandomPokemonId());
    const [pokemonName, setPokemonName] = useState('');

    useEffect(() => {
        // Función para obtener el nombre del Pokémon por su ID
        const getPokemonName = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                const data = await response.json();
                setPokemonName(data.name);
            } catch (error) {
                console.error('Error fetching Pokémon data', error);
            }
        };

        // Actualizar el nombre del Pokémon cada vez que cambia el ID
        getPokemonName();

        // Programar la actualización del ID cada (3 segundos)
        const intervalId = setInterval(() => {
            setRandomId(getRandomPokemonId());
        }, 3000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [randomId]);

    return (
        <div className={styles.about}>
            <div>
                {/* <Link to="/">Back to Home</Link> */}
                <div className={styles.linkContainer}>
                    <Link to="/" className={styles.link}>
                        <img width={30} src={pokeball} alt="pokeball" />
                    </Link>
                </div>
                <h2 className="pokemon-name">{pokemonName}</h2>
            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`} alt={pokemonName} />
            <p>{`This is a app developed using ReactJS and SASS. It uses data from PokeAPI.`}</p>
            <p>Developer: Nora Petro Torres.</p>
        </div>
    );
};

export default About;

