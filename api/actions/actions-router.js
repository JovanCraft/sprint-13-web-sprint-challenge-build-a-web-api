// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model');

router.get('/api/actions', async (req, res) => {
    // Implement the GET /api/actions endpoint
  });

  router.get('/api/actions/:id', async (req, res) => {
    // Implement the GET /api/actions/:id endpoint
  });

  router.post('/api/actions', async (req, res) => {
    // Implement the POST /api/actions endpoint
  });

  router.put('/api/actions/:id', async (req, res) => {
    // Implement the PUT /api/actions/:id endpoint
  });

  router.delete('/api/actions/:id', async (req, res) => {
    // Implement the DELETE /api/actions/:id endpoint
  });

  module.exports = router;
