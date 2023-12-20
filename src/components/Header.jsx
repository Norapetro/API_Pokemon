import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import pokeball from "../assets/pokeball.svg";
import { Button, ButtonGroup, Input } from 'reactstrap';
import PropTypes from "prop-types";

const Header = ({ onSearchChange }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Logo o título de la aplicación */}
        <Link to="/"><img width={30} src={pokeball} alt="pokeball" /></Link>
      </div>
      <Input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar Pokémon..."
        onChange={(event) => onSearchChange(event.target.value)}
      />
      {/* Links de navegación */}
      <ButtonGroup>
        <Button color="primary">
          <Link className={styles.link} to="/" onClick={() => onSearchChange("")}>Home</Link>
        </Button>
        <Button color="primary">
          <Link to="/about" className={styles.link}>About</Link>
        </Button>
      </ButtonGroup>
    </header>
  );
};

// crete propTypes
Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Header;
