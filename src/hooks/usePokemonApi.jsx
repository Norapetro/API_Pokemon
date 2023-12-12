import { useState, useEffect } from 'react';
import { getPokemons } from '../utils/api';

const usePokemonApi = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await getPokemons();
          setPokemons(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      };
    
      loading && fetchData();
    }, [loading]);
    
    return (pokemons && ({ pokemons, loading }));
};

export default usePokemonApi;
