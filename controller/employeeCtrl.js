const Employee = require('../model/Employee');

const fetchAll = async (req, res) => {
	try {
		const employees = await Employee.find();
		res.json({
			stattus: 'Success',
			data: employees,
		});
	} catch (err) {
		res.json(err);
	}
};

const fetchOne = async (req, res) => {
	try {
		const id = req.params.id;
		const employee = await Employee.findById({ _id: id });
		res.json({
			stattus: 'Success',
			data: employee,
		});
	} catch (err) {
		res.json(err);
	}
};

const createObject = async (req, res) => {
	const { name, city, isMarried, salary } = req.body;
	try {
		const employee = await Employee.create({
			name,
			city,
			isMarried,
			salary,
		});
		res.json({
			stattus: 'Success',
			data: employee,
		});
	} catch (err) {
		res.json(err);
	}
};

const updateObject = async (req, res) => {
	const { name, city, isMarried, salary } = req.body;
	const id = req.params.id;
	try {
		const employee = await Employee.findByIdAndUpdate(
			id,
			{
				name: name,
				city: city,
				isMarried: isMarried,
				salary: salary,
			},
			{
				new: true,
				runValidators: true,
			}
		);
		res.json({
			stattus: 'Success',
			data: employee,
		});
	} catch (err) {
		res.json(err);
	}
};

const deleteObject = async (req, res) => {
	const id = req.params.id;
	try {
		await Employee.deleteOne({ _id: id });
		res.json({
			stattus: 'Success',
			data: 'Employee Deleted Successfully',
		});
	} catch (err) {
		res.json(err);
	}
};

module.exports = {
	fetchAll,
	fetchOne,
	createObject,
	updateObject,
	deleteObject,
};
