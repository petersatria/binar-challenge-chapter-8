import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Style.module.css';

const UsersList = (props) => {

	const editUserHandler = (event) => {
		event.preventDefault();
	}

	return (
		<Card className={classes.input}>
			<form onSubmit={editUserHandler}>
				<h1>Edit User</h1>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
				<Button type="submit">Edit User</Button>
			</form>
		</Card>
	);
};

export default UsersList;
