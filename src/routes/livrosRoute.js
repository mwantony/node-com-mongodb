import express from "express";
import LivroController from "../controllers/livrosController.js";

const livrosRouter = express.Router();

livrosRouter
  .get("/livros", (req, res) => LivroController.listarLivros(req, res))
  .get("/livros/:idLivro", (req, res) =>
    LivroController.listaLivroPorId(req, res)
  )
  .post("/livros", (req, res) => LivroController.cadastrarLivro(req, res))
  .put("/livros/:idLivro", (req, res) =>
    LivroController.atualizarLivro(req, res)
  )
  .delete("/livros/:idLivro", (req, res) =>
    LivroController.excluirLivro(req, res)
  );

export default livrosRouter;
