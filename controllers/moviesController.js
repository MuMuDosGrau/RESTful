let filmes = [
    { id: 1, titulo: 'O Poderoso Chefão', ano: 1972 },
    { id: 2, titulo: 'Interestelar', ano: 2014 }
  ];
  
  // Função para listar todos os filmes ou obter um filme por ID
  const getMovies = (req, res) => {
    if (req.params.id) {
      const id = parseInt(req.params.id);
      const filme = filmes.find(f => f.id === id);
      
      if (!filme) {
        return res.status(404).send('Filme não encontrado.');
      }
      
      return res.json(filme);
    }
  
    res.json(filmes);
  };
  
  // Função para adicionar um novo filme
  const addMovie = (req, res) => {
    const novoFilme = {
      id: filmes.length + 1,
      titulo: req.body.titulo,
      ano: req.body.ano
    };
    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
  };
  
  // Função para editar um filme existente
  const updateMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const filme = filmes.find(f => f.id === id);
  
    if (!filme) {
      return res.status(404).send('Filme não encontrado.');
    }
  
    filme.titulo = req.body.titulo;
    filme.ano = req.body.ano;
  
    res.json(filme);
  };
  
  // Função para deletar um filme
  const deleteMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const filmeIndex = filmes.findIndex(f => f.id === id);
  
    if (filmeIndex === -1) {
      return res.status(404).send('Filme não encontrado.');
    }
  
    filmes.splice(filmeIndex, 1);
    res.status(204).send();
  };
  
  module.exports = {
    getMovies,
    addMovie,
    updateMovie,
    deleteMovie
  };
  