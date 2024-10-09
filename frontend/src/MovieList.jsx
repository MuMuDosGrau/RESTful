// src/MovieList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/restful/movies');
        setMovies(response.data);
      } catch (error) {
        setError('Erro ao buscar filmes');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.titulo} ({movie.ano})
            <Link to={`/edit-movie/${movie.id}`}> Editar</Link> {/* Link para editar filme */}
          </li>
        ))}
      </ul>
      <Link to="/add-movie">Adicionar Filme</Link>
    </div>
  );
};

export default MovieList;
