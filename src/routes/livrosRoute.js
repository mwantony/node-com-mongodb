import express from "express";
import LivroController from "../controllers/livrosController.js";

const livrosRouter = express.Router();

livrosRouter
  .get("/livros", (req, res) => LivroController.listarLivros(req, res))
  .post("/livros", (req, res) => LivroController.cadastrarLivro(req, res));

export default livrosRouter;
