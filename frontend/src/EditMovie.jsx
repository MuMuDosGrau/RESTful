import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditMovie = () => {
  const { id } = useParams(); // Obtém o id do filme da URL
  const navigate = useNavigate(); // Para navegar de volta à lista de filmes
  const [titulo, setTitulo] = useState('');
  const [ano, setAno] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/restful/movies/${id}`);
        setTitulo(response.data.titulo);
        setAno(response.data.ano);
      } catch (error) {
        setError('Erro ao buscar filme');
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/restful/movies/${id}`, { titulo, ano });
      navigate('/'); // Navega de volta para a lista de filmes após editar
    } catch (error) {
      setError('Erro ao editar filme');
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/restful/movies/${id}`);
      navigate('/'); // Navega de volta para a lista de filmes após deletar
    } catch (error) {
      setError('Erro ao deletar filme');
      console.error(error);
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Editar Filme</h1>
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
          <button onClick={handleDelete} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white' }}>
        Deletar Filme
      </button>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditMovie;