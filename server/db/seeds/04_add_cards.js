
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {title: 'Do Push Ups', body: 'Just do it', priority_id: 4, status_id: 1, created_by: 1, assigned_to: 2},
        {title: 'Eat Carbs', body: 'Just do it', priority_id: 2, status_id: 1, created_by: 1, assigned_to: 3},
        {title: 'Coding', body: 'Just do it', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 4},
        {title: 'Get Hair Cut', body: 'Just do it', priority_id: 3, status_id: 1, created_by: 1, assigned_to: 5},
        // seeds with different statuses
        {title: 'Fight a Bear', body: 'Just do it', priority_id: 4, status_id: 2, created_by: 1, assigned_to: 5},
        {title: 'Sleep', body: 'Just do it', priority_id: 4, status_id: 3, created_by: 1, assigned_to: 5},
      ]);
    });
};
