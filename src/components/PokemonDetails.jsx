import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/PokemonDetails.module.scss';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemonDetails(data);
    };

    fetchPokemonDetails();
  }, [pokemonId]);

  if (!pokemonDetails) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.pokemonDetails}>
      <div className={styles.header}>
        <div className={styles.name}>
          <h2>{pokemonDetails.name.toUpperCase()}</h2>
          <span className={styles.id}>#{String(pokemonDetails.id).padStart(4, '0')}</span>
        </div>
      </div>
      <div className={styles.container}>
        <motion.div
         animate={{ opacity: 1 }} 
         initial={{ opacity: 0 }}
         transition={{ duration: 1 }}
        >
          <div className={styles.info}>
            <div className={styles.type}>
              <h3>Type</h3>
              {pokemonDetails.types.map(type => <span key={type.type.name}>{type.type.name}</span>)}
            </div>
            <div className={styles.weakness}>
              {/* You'll need to implement a method to calculate weaknesses  
              Necesitarás implementar un método para calcular las debilidades*/}

              <h3>Weakness</h3>
              {/* Dummy data for example
              Datos ficticios, por ejemplo */}

              <span>Water</span>
              <span>Ground</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.imageContainer}>
            <img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name} />
          </div>
        </motion.div>        
        <div className={styles.stats}>
          <h3>Status</h3>
          {/* Map through stats for display
          Mapa a través de estadísticas para visualización */}
          
          {pokemonDetails.stats.map(stat => (
            <div key={stat.stat.name} className={styles.stat}>
              <span className={styles.statName}>{stat.stat.name}</span>
              <span className={styles.statValue}>{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
