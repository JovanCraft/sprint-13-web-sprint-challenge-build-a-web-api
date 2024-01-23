// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')
const { validateProject } = require(`./projects-middleware`)
const router = express.Router();

router.get('/api/projects', (req, res) => {

    Projects.get()
    .then((projects) => {
        if(projects){
            res.status(200).json(projects)
        } else {
            res.status(200).json([])
        }
    })
    .catch(() => {
        res.status(500).json({ message: `An error has occurred while trying to bring up all the projects.`})
    })

  });

  router.get('/api/projects/:id', (req, res, next) => {
    const { id } = req.params
    Projects.get(id)
    .then((project) => {
        if(project){
            res.status(200).json(project)
        } else {
            res.status(404).json({ message: `There is no id by that number.`})
        }
    })
    .catch((err) => {

    })
  })

  router.post('/api/projects', (req, res) => {
    
  })


module.exports = router
