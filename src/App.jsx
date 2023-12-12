import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import Footer from './components/Footer';

// App component
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const withLayout = (children) => (
    <React.Fragment>
      <Header onSearchChange={setSearchQuery} />
      {children}
      <Footer />
    </React.Fragment>
  );

  // Define the routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: (withLayout(<PokemonList searchQuery={searchQuery} />)),
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: 'pokemon/:pokemonId',
      element: withLayout(<PokemonDetails />),
    },
  ]);

  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
