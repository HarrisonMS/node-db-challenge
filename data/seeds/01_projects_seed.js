
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_resources").truncate()
    .then(() => {
      return knex("tasks").truncate()
    })
    .then(() => {
      return knex("projects").truncate()
    })
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {id: 1,
           name: "project 1 name",
           description: "description fro project 1",
           completed: 0},
        {id: 2,
           name: "project 2 name",
           description: "description from project 2",
            completed: 0},
        {id: 3,
           name: "project 3 name",
           description: "description fro project 3",
            completed: 0},
      ]);
    });
};
