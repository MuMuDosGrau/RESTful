// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa o Router, Route, Routes e Link
import MovieList from './MovieList'; // Importa o componente MovieList
import AddMovie from './AddMovie'; // Importa o componente AddMovie
import EditMovie from './EditMovie';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
      </Routes>
    </Router>
  );
};

export default App;

