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

  return new Card(cardInput)
    .save()
    .then(card => { // the returned card is a promise model.
        // this refreshes the page and fetches the card you just saved
        return card.refresh({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo']});
    })
    .then(newCard => {
      return res.json(newCard);
    })
    .catch(err => console.log(err.message));
})

// WORKING on editing card information.
router.put('/:id', (req, res) => {
  const id = req.params.id;
  // Need a function to do this for both POST and PUT
  const title = req.body.title.trim();
  const body = req.body.body.trim();
  const priority_id = parseInt(req.body.priority_id);
  const status_id = parseInt(req.body.status_id);
  const created_by = parseInt(req.body.created_by);
  const assigned_to = parseInt(req.body.assigned_to);

  return new Card()
    .where({ id })
    .save({
      'title': title,
      'body': body,
      'priority_id': priority_id,
      'status_id': status_id,
      'created_by': created_by,
      'assigned_to': assigned_to
    }, {'patch': true})
    .then(card => {
      return card.refresh({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo']});
    })
    .then(newCard => {
      return res.json(newCard);
    })
    .catch(err => console.log(err.message));
})

module.exports = router;