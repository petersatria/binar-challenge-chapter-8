import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card'
import classes from './Style.module.css';

const AddUser = (props) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();
		props.onAddUser(username, email);
		setUsername('');
		setEmail('');
		setPassword('');
	}

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	}
	const emailHandler = (event) => {
		setEmail(event.target.value);
	}
	const passwordHandler = (event) => {
		setPassword(event.target.value);
	}

	return (
		<Card className={classes.input}>
			<h1>Create a User</h1>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" onChange={usernameHandler} value={username} />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" onChange={emailHandler} value={email} />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" onChange={passwordHandler} value={password} />
				<Button type="submit">Create Player</Button>
			</form>
		</Card>
	);
};

export default AddUser;