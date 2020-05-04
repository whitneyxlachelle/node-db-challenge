
exports.seed = function (knex) {
  return knex('projects').insert([
    {
      project_name: "Vision board",
      description: "create a vision board",
      completed: false
    },
    {
      project_name: "Paint room",
      description: "",
      completed: false
    },
  ]);
};
