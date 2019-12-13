const db = require("../data/db-config")

module.exports = {
	getProjects,
	addProjects,
	getResources,
	addResources,
	getTasks,
	addTasks,
};

function getProjects() {
	return db("projects");
}

function addProjects(project) {
	return db("projects").insert(project);
}

function getResources() {
	return db("resources");
}

function addResources(resource) {
	return db("resources").insert(resource);
}
// function getTasks() {
// 	return db("tasks")
// 		.select("projects.name", "projects.description", "tasks.notes", "tasks.id", "tasks.project_id")
// 		.join("projects", "tasks.project_id", "projects.id");
// }

function getTasks() {
	return db("tasks")
		.select(
			"projects.name as project_name",
			"projects.description as project_description",
			"tasks.description",
			"tasks.notes",
			"tasks.id",
            "tasks.project_id",
            "tasks.completed"
		)
		.join("projects", "tasks.project_id", "projects.id");
}
// function getTasks() {
// 	return db("tasks");
// }

function addTasks(tasks) {
	return db("tasks").insert(tasks);
}


