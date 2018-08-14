const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }
}

// add in many relationships

module.exports = bookshelf.model('Card', Card);