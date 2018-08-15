
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {id: 1, name: 'high', rank: 1},
        {id: 2, name: 'blocker', rank: 2},
        {id: 3, name: 'medium', rank: 3},
        {id: 4, name: 'low', rank: 4},
      ]);
    });
};

// high 1, blocker 2, medium 3, low 4
