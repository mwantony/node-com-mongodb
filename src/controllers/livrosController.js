import livros from "../models/Livro.js";
class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.json(livros)
    })
  };

  static listaLivroPorId = (req, res) => {
    const {idLivro} = req.params
    livros.findById(idLivro, (err, livro) => {
      if(!err) {
        res.status(200).json(livro)
        return
      }
      res.status(404).json({message: err.message `Não foi possível achar o livro de id ${idLivro}`})
    })
  }

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body)
    livro.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarLivro = (req, res) => {
    const {idLivro} = req.params
    livros.findByIdAndUpdate(idLivro, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: `O livro ${idLivro} atualizado com sucesso`})
        return
      }
      res.status(500).send({message: err.message `Livro ${idLivro} não atualizado`})
    })

  }

  static excluirLivro = (req, res) => {
    const {idLivro} = req.params
    livros.findByIdAndDelete(idLivro, (err) => {
      if(!err) {
        res.status(200).send({message: `Livro de id ${idLivro} deletado com sucesso.`})
        return
      }
      res.status(500).send({message: err.message`Impossível deletar livro de id ${idLivro}`})
    })
  }
}

export default LivroController;
