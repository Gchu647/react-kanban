
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {id: 1, name: 'in_queue', rank: 1},
        {id: 2, name: 'in_progress', rank: 2},
        {id: 3, name: 'done', rank: 3},
      ]);
    });
};
