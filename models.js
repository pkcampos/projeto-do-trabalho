const mongoose = require('mongoose');

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

module.exports = {
  Usuario,
  Usuario2,
  Usuario3,
  Usuario4
};