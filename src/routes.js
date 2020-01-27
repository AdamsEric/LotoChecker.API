const express = require('express');
const routes = express.Router();

const LotomaniaController = require('./controllers/LotomaniaController');

routes.get('/concursos', LotomaniaController.listarConcursos);
routes.post('/concursos', LotomaniaController.incluirConcurso);
routes.get('/concursos/:id', LotomaniaController.dadosConcurso);
routes.put('/concursos/:id', LotomaniaController.atualizarConcurso);
routes.delete('/concursos/:id', LotomaniaController.deletarConcurso);
routes.get('/apostas', LotomaniaController.listarApostas);
routes.post('/apostas', LotomaniaController.incluirAposta);
routes.get('/apostas/conferir', LotomaniaController.conferirAposta);
routes.get('/apostas/:id', LotomaniaController.dadosAposta);
routes.put('/apostas/:id', LotomaniaController.atualizarAposta);
routes.delete('/apostas/:id', LotomaniaController.deletarAposta);


module.exports = routes;