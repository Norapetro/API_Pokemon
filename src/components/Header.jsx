import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import pokeball from "../assets/pokeball.svg";
// import Button from '@mui/material/Button';
import PropTypes from "prop-types";

const Header = ({ onSearchChange }) => {
  return (
    <header className={styles.header}>
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
      <div className={styles.logo}>
        {/* Logo o título de la aplicación */}
        <Link to="/"><img width={30} src={pokeball} alt="pokeball" /></Link>
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar Pokémon..."
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <nav className={styles.navigation}>
        {/* Links de navegación */}
        <Link to="/" onClick={() => onSearchChange("")}>Home💥</Link>
        <Link to="/about">💥About</Link>
        {/* <Button variant="contained">Hello world</Button> */}
      </nav>
    </header>
  );
};

// crete propTypes
Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Header;
