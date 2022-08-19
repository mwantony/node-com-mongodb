import autores from "../models/Autor.js";
class AutorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.json(autores)
    })
  };

  static listaAutorPorId = (req, res) => {
    const {idAutor} = req.params
    autores.findById(idAutor, (err, autor) => {
      if(!err) {
        res.status(200).json(autor)
        return
      }
      res.status(404).json({message: err.message `Não foi possível achar o autor de id ${idAutor}`})
    })
  }

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body)
    autor.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static atualizarAutor = (req, res) => {
    const {idAutor} = req.params
    autores.findByIdAndUpdate(idAutor, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: `O autor ${idAutor} atualizado com sucesso`})
        return
      }
      res.status(500).send({message: err.message `autor ${idAutor} não atualizado`})
    })

  }

  static excluirAutor = (req, res) => {
    const {idAutor} = req.params
    autores.findByIdAndDelete(idAutor, (err) => {
      if(!err) {
        res.status(200).send({message: `autor de id ${idAutor} deletado com sucesso.`})
        return
      }
      res.status(500).send({message: err.message`Impossível deletar autor de id ${idAutor}`})
    })
  }
}

export default AutorController;
