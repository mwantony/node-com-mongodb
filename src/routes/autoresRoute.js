import express from "express";
import AutorController from "../controllers/autoresController.js";

const autoresRouter = express.Router();

autoresRouter
  .get("/autores", (req, res) => AutorController.listarAutores(req, res))
  .get("/autores/:idAutor", (req, res) =>
    AutorController.listaAutorPorId(req, res)
  )
  .post("/autores", (req, res) => AutorController.cadastrarAutor(req, res))
  .put("/autores/:idAutor", (req, res) =>
    AutorController.atualizarAutor(req, res)
  )
  .delete("/autores/:idAutor", (req, res) =>
    AutorController.excluirAutor(req, res)
  );

export default autoresRouter;
