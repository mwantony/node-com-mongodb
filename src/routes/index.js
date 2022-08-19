import express from "express";
import livrosRouter from "./livrosRoute.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: 'Curso de node'})
  })

  app.use(
    express.json(),
    livrosRouter
  )
}

export default routes