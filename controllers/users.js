import { v4 as uuidv4 } from "uuid";
let users = [];

export const createUser = (req, res) => {
	const userId = uuidv4();
	var user = req.body;
	const userWithId = { ...user, id: userId };
	users.push(userWithId);
	res.send(`${user.firstName} was added`);
	console.log(req.body);
};
export const getUsers = (req, res) => {
	console.log(users);
	res.send(users);
};
export const getUser = (req, res) => {
	const id = req.params.id;
	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
};
export const deleteUser = (req, res) => {
	const id = req.params.id;
	users = users.filter((user) => user.id !== id);
};
export const updateUser = (req, res) => {
	const id = req.params.id;
	const { firstName, lastName, age } = req.body;

	const userToUpdate = users.find((user) => user.id === id);

	if (firstName) {
		userToUpdate.firstName = firstName;
	}
	if (lastName) {
		userToUpdate.lastName = lastName;
	}
	if (age) {
		userToUpdate.age = age;
	}

	res.send("updated");
};
