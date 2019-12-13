

    //creating Projects table
//     A `project` is what needs to be done. We want to store the following data about a `project`:

// - [ ] a unique Id.
// - [ ] a name. This column is required.
// - [ ] a description.
// - [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.
    //creating resource table
    //A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:
// - [ ] a unique Id.
// - [ ] a name. This column is required.
// - [ ] a description.
// The database should not allow resources with duplicate names.
    //creating the tasks table needs to connect through foriegn key to projects table
//     An `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

// - [ ] a unique id.
// - [ ] a description of what needs to be done. This column is required.
// - [ ] a notes column to add additional information.
// - [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();

        tbl.string("name", 255).unique().notNullable();

        tbl.string("description", 255);

        tbl.boolean("completed").notNullable();
    })

    .createTable("resources", tbl => {
        tbl.increments();

        tbl.string("name", 255).unique().notNullable();
        
        tbl.string("description", 255)
    })

    .createTable("tasks", tbl => {
        tbl.increments();

        tbl.string("description", 255).notNullable();

        tbl.string("notes",255).notNullable();

        tbl.boolean("completed").notNullable()

        //connect task to projects
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
    })
    //project resources table contains connection to proj and resources through foreign ke
    .createTable("project_resources", tbl => {
        tbl.increments();

        //project first maybe
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")

        //resources
        tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
    })
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};



