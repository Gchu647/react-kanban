const express = require('express');
const router = express.Router();
const Card = require('../db/models/Card');
const Priority = require('../db/models/Priority');
const Status = require('../db/models/Status');
const User = require('../db/models/User');

// fetches all the cards from db using bookshelf
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

// creating a new card and putting it into database
router.post('/', (req, res) => {
  const title = req.body.title.trim();
  const body = req.body.body.trim();
  const priority_id = parseInt(req.body.priority_id);
  const created_by = parseInt(req.body.created_by);
  const assigned_to = parseInt(req.body.assigned_to);

  //Make sure no empty strings
  const cardInput = {
    title: title ? title : null,
    body: body ? body:null,
    priority_id: priority_id ? priority_id : null,
    created_by: created_by ? created_by : null,
    assigned_to: assigned_to ? assigned_to : null,
    status_id: 1
  }

  console.log('Posting in body', cardInput);

  return new Card(cardInput)
    .save()
    .then(card => {// need to send card with related
        console.log('this is server card: ', card);

        return card.refresh({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo']});
    })
    .then(newCard => {
      console.log('This is new card', newCard);
      return res.json(newCard);
    })
    .catch(err => console.log(err.message));
})

module.exports = router;