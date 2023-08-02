
import React from 'react';
import CityProvider from './Context/CityContext';
import SearchProvider from './Context/SearchContext';
import Container from './Components/Container';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

function App() {
  return (
    <CityProvider>
      <SearchProvider>
        <Container />
      </SearchProvider>
    </CityProvider>
  );
}

export default App;
