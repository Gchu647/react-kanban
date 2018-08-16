const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }

  priority() {
    return this.belongsTo('Priority', 'priority_id');
  }

  status() {
    return this.belongsTo('Status', 'status_id');
  }

  createdBy() {
    return this.belongsTo('User', 'created_by');
  }

  assignedTo() {
    return this.belongsTo('User', 'assigned_to');
  }
}

module.exports = bookshelf.model('Card', Card);