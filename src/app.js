import express from 'express'

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

function buscaLivro(idLivro) {
  return livros.findIndex(livro => {
    livro.id === idLivro
  })
}

export default app