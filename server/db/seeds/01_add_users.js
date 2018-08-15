
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'John', last_name: 'Vo', email: 'john@vo.com'},
        {id: 2, first_name: 'James', last_name: 'Vo', email: 'jamen@vo.com'},
        {id: 3, first_name: 'Alan', last_name: 'Vo', email: 'alan@vo.com'},
        {id: 4, first_name: 'Surya', last_name: 'Vo', email: 'surya@vo.com'},
        {id: 5, first_name: 'Andy', last_name: 'Vo', email: 'andy@vocom'}
      ]);
    });
};
