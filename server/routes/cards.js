const express = require('express');
const router = express.Router();
const Card = require('../db/models/Card');
const Priority = require('../db/models/Priority');
const Status = require('../db/models/Status');
const User = require('../db/models/User');

router.get('/', (req, res) => {
  return Card.fetchAll({
    withRelated: ['priority', 'status', 'createdBy', 'assignedTo']
  })
    .then(cards => {
      return res.json(cards);
    })
    .catch(err => {
      return res.status(500).json({ message: 'something went wrong'});
    })
})

// WORKING on later
router.post('/', (req, res) => {
  const cardTitle = req.body.cardTitle;
  const priorityName = req.body.priorityName;
  const createdBy = req.body.createdBy;
  const assignedTo = req.body.createdBy ? req.body.createdBy : null;

  console.log('Posting in body', req.body);
  res.end();
})

module.exports = router;