import Card from '../UI/Card';
import classes from './Style.module.css';

const UsersList = (props) => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						<p><b>Username:</b> {user.username}</p>
						<p><b>Email:</b> {user.email}</p>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
