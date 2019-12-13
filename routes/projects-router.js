const express = require("express");
const router = express.Router();

const Projects = require("./projects-model.js")
// gets all users from db
router.get("/", (req, res) => {
    Projects.getProjects().then((projects) => {
        projects.map((project) => {
            if (project.completed === 0) {
                project.completed = false;
            }   else {
                project.completed = true;
            }
        });
        res.status(200).json(projects); 
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ errrorMessage: "Failed to get projects from data base" }); 
    });
});

//gets all resources from db
router.get("/resources", (req, res) => {
    Projects.getResources().then((resources) => {
        res.status(200).json(resources)
    })
    .catch((err) => {
        console.log(err);
        res.status.apply(500).json({ errorMessage: "failed to get a list of resources from the data base" })
    });
});

//gets all tasks from the db
router.get("/tasks", (req, res) => {
    Projects.getTasks().then((projects) => {
        projects.map((tasks) => {
            if (tasks.completed === 0) {
                tasks.completed = false
            } else {
                tasks.completed = true
            }
            console.log(tasks)
        })
        res.status(200).json(projects)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Failed to get tasks from db" });
    });
})

//add project to db
router.post("/", (req, res) => {
	const project = req.body;
	Projects
		.addProjects(project)
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: "could not add projects to the database" });
		});
});

//post resource

router.post("/resources", (req, res) => {
	const resource = req.body;
	Projects
		.addResources(resource)
		.then((resource) => {
			res.status(200).json(resource);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: "could not post resources to the database" });
		});
});

router.post("/tasks", (req, res) => {
	const task = req.body;
	Projects
		.addTasks(task)
		.then((task) => {
			res.status(200).json(task);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: "could not post task to the database" });
		});
});
module.exports = router;