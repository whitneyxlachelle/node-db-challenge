exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      description: "search pinterest",
      notes: "make an account",
      completed: false
    },
    {
      project_id: 1,
      description: "purchase poster board",
      notes: "Dollar Tree",
      completed: false
    },
    {
      project_id: 2,
      description: "choose a color",
      notes: "Home Depot",
      completed: false
    },
  ]);
};
