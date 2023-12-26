import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import pokeball from "../assets/pokeball.svg";
import styled from 'styled-components';
import PropTypes from "prop-types";

// Styled components
const StyledHeader = styled.header`
  background-color: #ffcb05;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input[type="text"] {
    flex: 1;
    margin: 0 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
  }
`;

const StyledNav = styled.nav`
  background: #3b4cca;
  border-radius: 10px;
  padding: 0.5rem;
  
  a {
      color: #000;
      margin: 0 10px;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
      
      &:hover, &.active {
          color: #f2f2f2;
      }
  }
`;

/* const buttonColor = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

const StyledButton = styled.button`
  background-color: ${buttonColor[Math.floor(Math.random() * buttonColor.length)]};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`; */


const Header = ({ onSearchChange }) => {
  return (
    <StyledHeader>
      <div className={styles.logo}>
        {/* Logo o título de la aplicación */}
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        <Link to="/"><img width={30} src={pokeball} alt="pokeball" /></Link>
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar Pokémon..."
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <div className="search">
        {/* <div className="search__img">🔍</div> */}
      </div>
      <StyledNav>
        {/* Links de navegación */}
        <Link to="/" onClick={() => onSearchChange("")}>Home</Link>
        <Link to="/about">About</Link>
      </StyledNav>
      {/* NOTACION BEM */}
      {/* <button className="button button--large">
        <span className="button__icon">Icon</span>
        <span className="button__text">Click me</span>
      </button> */}

    </StyledHeader>
  );
};


// crete propTypes
Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Header;
