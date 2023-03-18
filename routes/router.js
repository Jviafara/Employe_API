const express = require('express');
const {
	fetchAll,
	fetchOne,
	createObject,
	updateObject,
	deleteObject,
} = require('../controller/employeeCtrl');

const router = express.Router();

//Fetch all
router.get('/', fetchAll);

//Fetch One By Id
router.get('/:id', fetchOne);

//Create
router.post('/', createObject);

//Update
router.put('/:id', updateObject);

//Delete
router.delete('/:id', deleteObject);

module.exports = router;
