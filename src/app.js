import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'
import routes from './routes/index.js'

db.on('error', () => console.log.bind(console, 'Erro de conexão!'))
db.once('open', () => console.log('A conexão com o banco foi feita com sucesso!'))

const app = express()

app.use(express.json())

routes(app)

/* const livros = [
  {
    id: 1,
    titulo: 'Senhor dos aneis'
  },
  {
    id: 2,
    titulo: 'O Hobbit'
  }
] */

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node')
}) 


app.put('/livros/:idLivro', (req, res) => {
  let index = buscaLivro(req.params.idLivro)
  livros[index].titulo = req.body.titulo 
  res.json(livros)
})
app.get('/livros/:idLivro', (req, res) => {
  let index = buscaLivro(req.params.idLivro)
  res.json(livros[index])
})

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