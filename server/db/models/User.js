const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  createCards() {
    return this.hasMany('Card', 'created_by');
  }

  cardsAssigned() {
    return this.hasMany('Card', 'assigned_to');
  }
}

module.exports = bookshelf.model('User', User);