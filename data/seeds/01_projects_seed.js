
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {id: 1,
           name: "project 1 name",
           description: "description fro project 1",
           completed: false},
        {id: 2,
           name: "project 2 name",
           description: "description fro project 2",
            completed: false},
        {id: 3,
           name: "project 3 name",
           description: "description fro project 3",
            completed: false}
      ]);
    });
};
