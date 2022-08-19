import express from "express";
import LivroController from "../controllers/livrosController.js";

const livrosRouter = express.Router()

livrosRouter.get('/livros', (req, res) => {
  return LivroController.listarLivros(req, res)
})

export default livrosRouter