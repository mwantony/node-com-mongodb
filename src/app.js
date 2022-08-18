import express from 'express'
import db from './config/dbConnect.js'

db.on('error', () => console.log.bind(console, 'Erro de conexão!'))
db.once('open', () => console.log('A conexão com o banco foi feita com sucesso!'))

const app = express()

app.use(express.json())

const livros = [
  {
    id: 1,
    titulo: 'Senhor dos aneis'
  },
  {
    id: 2,
    titulo: 'O Hobbit'
  }
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node')
}) 

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  livros.push(req.body)
  res.status(201).send('Livro cadastrado com sucesso')
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