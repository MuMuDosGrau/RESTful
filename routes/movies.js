const express = require('express');
const router = express.Router();
const { getMovies, addMovie, updateMovie, deleteMovie } = require('../controllers/moviesController');

// Rota para listar todos os filmes
router.get('/', getMovies);

// Rota para obter um filme pelo ID
router.get('/:id', getMovies);  // Remova a duplicata e use a função `getMovies`

// Rota para adicionar um novo filme
router.post('/', addMovie);

// Rota para editar um filme existente
router.put('/:id', updateMovie);

// Rota para deletar um filme
router.delete('/:id', deleteMovie);

module.exports = router;
