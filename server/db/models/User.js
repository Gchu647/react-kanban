const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'user'; }
  get hasTimestamps() { return true; }
}

module.exports = bookshelf.model('User', User);