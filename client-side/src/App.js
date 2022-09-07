import { useState } from 'react';
import AddUser from './components/Users/AddUser'
import EditUser from './components/Users/EditUser'
import SearchUser from './components/Users/SearchUser'
import UserList from './components/Users/UsersList'

import Navbar from './components/UI/Navbar'
import { Route, Routes } from "react-router-dom"

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uUsername, uEmail) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ username: uUsername, email: uEmail, id: Math.random().toString() },
			];
		});
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={
						<div>
							<AddUser onAddUser={addUserHandler} />
							<UserList users={usersList} />
						</div>
					} />
					<Route path="/edit" element={<EditUser />} />
					<Route path="/search" element={<SearchUser />} />
				</Routes>
			</div>
		</div>
	);
}


export default App;
