const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Validate the request
	if (!req.body.title) {
		res.status(400).send({ message: "Content cannot be empty!" });
		return;
	}

	// Create a Tutorial
	const tutorial = new Tutorial({
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false
	});

	// Save Tutorial in the database
	tutorial
		.save(tutorial)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "An error occurred while creating the Tutorial."
			});
		});
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

	Tutorial.find(condition)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "An error occurred while retrieving tutorials."
			});
		});
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Tutorial.findById(id)
		.then(data => {
			if(!data)
				res.status(404).send({ message: "Could not find Tutorial with id " + id });
			else res.send(data);
		})
		.catch(err => {
			res
				.status(500)
				.send({ message: "Error retrieving Tutorial with id " + id });
		});
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Cannot update an empty form!"
		});
	}

	const id = req.params.id;

	Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then(data => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update Tutorial with id=${id}. Tutorial could not be found.`
				});
			} else res.send({ message: "Update successful." });
		})
		.catch(err => {
			res.status(500).send({
				message: "Error updating Tutorial with id " + id
			});
		});
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Tutorial.findByIdAndRemove(id)
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot delete Tutorial with id=${id}. Tutorial could not be found.`
				});
			} else {
				res.send({
					message: "Tutorial deleted."
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: `Could not delete Tutorial with id ` + id
			});
		});
};

// Delete all Tutorials from the db
exports.deleteAll = (req, res) => {
	Tutorial.deleteMany({})
		.then(data => {
			res.send({
				message: `${data.deletedCount} Tutorials were deleted successfully.`
			});
		})
		.catch(err => {
			res.status(500).send({
				message:
				err.message || "An error occurred while trying to remove all Tutorials."
			});
		});
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
	Tutorial.find({ published: true })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "An error occurred while retrieving tutorials."
			});
		});
};