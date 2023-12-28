import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import styles from '../styles/About.module.scss';
import pokeball from "../assets/pokeball.svg";

const About = () => {

    const getRandomPokemonId = () => Math.floor(Math.random() * 898) + 1;

    const [randomId, setRandomId] = useState(getRandomPokemonId());

    useEffect(() => {
        setTimeout(() => {
            setRandomId(getRandomPokemonId());
        }, 3000);
    }, [randomId]);

    return (
        <div className={styles.about}>
            <div>
                <Link to="/">Back to Home</Link>
                <div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>
          <img width={30} src={pokeball} alt="pokeball" />
        </Link>
      </div>
            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`} alt="Bulbasaur" />
            <p>This is a Pokémon app developed using ReactJS and SASS. It uses data from PokeAPI.</p>
            <p>Developer: Nora Petro Torres.</p>
        </div>
    );
};

export default About;
