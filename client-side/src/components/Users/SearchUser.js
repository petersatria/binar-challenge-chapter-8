import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Style.module.css';

const UsersList = (props) => {
	const searchUserHandler = (event) => {
		event.preventDefault();
	}

	return (
		<Card className={classes.input}>
			<form onSubmit={searchUserHandler}>
				<h1>Search User</h1>
				<input type="text" id="search" />
				<Button type="submit">Search User</Button>
			</form>
		</Card>
	);
};

export default UsersList;
