import { Link } from "react-router-dom"
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<Link to="/" className={classes.sitetitle}>Home</Link>
			<ul>
				<CustomLink to="/edit">Edit</CustomLink>
				<CustomLink to="/search">Search</CustomLink>
			</ul>
		</nav>
	)
}

const CustomLink = ({ to, children, ...props }) => {
	return (
		<li >
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}

export default Navbar;