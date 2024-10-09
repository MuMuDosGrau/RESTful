// src/AddMovie.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [titulo, setTitulo] = useState('');
  const [ano, setAno] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/restful/movies', {
        titulo,
        ano,
      });
      navigate('/'); // Redireciona para a lista de filmes após a adição
    } catch (error) {
      setError('Erro ao adicionar filme');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Adicionar Filme</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ano:</label>
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Filme</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddMovie;
