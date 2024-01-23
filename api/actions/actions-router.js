// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model');
const {
  validateActionId,
  validateAction,
  validateActionUpdate
} = require('./actions-middlware')

router.get('/', (req, res, next) => {
    // Implement the GET /api/actions endpoint
  Actions.get()
  .then(action => {
    res.json(action)
  })
  .catch(next)
  });

  router.get('/:id', validateActionId, (req, res) => {
    // Implement the GET /api/actions/:id endpoint
    res.json(req.action)
  });

  router.post('/', validateAction, (req, res, next) => {
    // Implement the POST /api/actions endpoint
    Actions.insert({ project_id: req.project_id, description: req.description, notes: req.notes, completed: req.completed})
    .then(newAction => {
      res.status(201).json(newAction)
    })
    .catch(next)
  });

  router.put('/:id', validateActionId, validateActionUpdate, (req, res, next) => {
    // Implement the PUT /api/actions/:id endpoint
    Actions.update(req.params.id, {project_id: req.project_id, description: req.description, notes: req.notes, completed: req.completed})
    .then(() => {
      return(Actions.get(req.params.id))
    })
    .then(action => {
      res.json(action)
    })
    .catch(next)
  });

  router.delete('/:id', validateActionId, (req, res, next) => {
    // Implement the DELETE /api/actions/:id endpoint
    Actions.remove(req.params.id)
    .then(result => {
      res.json(result)
    })
    .catch(next)
  });

  module.exports = router;
