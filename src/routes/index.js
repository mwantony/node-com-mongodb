import express from "express";
import livrosRouter from "./livrosRoute.js";
import autoresRouter from "./autoresRoute.js";
const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: 'Curso de node'})
  })

  app.use(
    express.json(),
    livrosRouter,
    autoresRouter
  )
}

export default routes