const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 80; // Usando a variável de ambiente PORT ou a porta 3000 como padrão

app.use( (req,res,next) => { 

    res.header("Access-Control-Allow-Origin","*");
    app.use(cors());
    next();
  }
  ) ; 

app.use(express.json());

mongoose.connect('mongodb+srv://pkflabr7:NCfyzb8Yup475Ga8@cluster1.mzqzaqa.mongodb.net/EX4?retryWrites=true&w=majority', {
  // Configurações de conexão, se necessário
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
});

const usuarioSchema = new mongoose.Schema({
  pergunta1: String, 
  pergunta3: String,
  createdAt: { type: Date, default: Date.now() }
});

const usuarioSchema2 = new mongoose.Schema({
  opcao: String,
  opcao8: String,
  createdAt: { type: Date, default: Date.now() }
});

const usuarioSchema3 = new mongoose.Schema({
  pergunta4: String,
  pergunta5: Number,
  createdAt: { type: Date, default: Date.now() }
});

const usuarioSchema4 = new mongoose.Schema({
  pergunta6: String,
  pergunta7: String,
  createdAt: { type: Date, default: Date.now() }
});

const Usuario = mongoose.model('Usuario', usuarioSchema, 'pergunta_1_e_3');
const Usuario2 = mongoose.model('Usuario2', usuarioSchema2, 'pergunta_2');
const Usuario3 = mongoose.model('Usuario3', usuarioSchema3, 'pergunta_4_e_5');
const Usuario4 = mongoose.model('Usuario4', usuarioSchema4, 'pergunta_6_e_7');

// Rota para lidar com solicitações para /pergunta_1_e_3
app.post('/pergunta_1_e_3', async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para lidar com solicitações para /pergunta2
app.post('/pergunta2', async (req, res) => {
  try {
    const novoUsuario = await Usuario2.create(req.body);
    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para lidar com solicitações para /pergunta_4_e_5
app.post('/pergunta_4_e_5', async (req, res) => {
  try {
    const novoUsuario = await Usuario3.create(req.body);
    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para lidar com solicitações para /pergunta_6_e_7
app.post('/pergunta_6_e_7', async (req, res) => {
  try {
    const novoUsuario = await Usuario4.create(req.body);
    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor Node.js rodando na porta ${port}`);
});