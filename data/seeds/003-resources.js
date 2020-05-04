
exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      resource_name: "laptop",
      description: "",
    },
    {
      project_id: 1,
      resource_name: "scissors",
      description: "Dollar Tree",
    },
    {
      project_id: 2,
      resource_name: "paint brush",
      description: "",
    },
  ]);
};
