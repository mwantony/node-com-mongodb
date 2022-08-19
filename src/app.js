import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'
import routes from './routes/index.js'

db.on('error', () => console.log.bind(console, 'Erro de conexão!'))
db.once('open', () => console.log('A conexão com o banco foi feita com sucesso!'))

const app = express()

app.use(express.json())

routes(app)


app.delete('/livros/:idLivro', (req, res) => {
  let {idLivro} = req.params
  let index = buscaLivro(idLivro)
  livros.splice(index, 1)
  res.send(`Livro ${index} removido com sucesso`)
})

function buscaLivro(idLivro) {
  return livros.findIndex(livro => {
    return Number(livro.id) === Number(idLivro)
  })
}

export default app