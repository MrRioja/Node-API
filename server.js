const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando a aplicação
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando a conexão do BD
mongoose.connect('mongodb+srv://API:NodeAPIPassword@clusterapi.lqg8u.gcp.mongodb.net/nodeapi?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

//Importa models
requireDir('./src/models');

//Importação das rotas
app.use('/api', require('./src/routes'));

//Definindo a porta padrão
app.listen(3001);