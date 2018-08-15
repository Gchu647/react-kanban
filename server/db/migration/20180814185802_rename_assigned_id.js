
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('cards', table => {
    table.renameColumn('assigned_id', 'assigned_to');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('cards', table => {
      table.renameColumn('assigned_to', 'assigned_id');
  })
};
