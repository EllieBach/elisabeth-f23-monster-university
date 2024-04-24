import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png"
import "../styles/Root.scss"

function Root() {
	return (
		<>
			<header>
				<img id="mulogo"src={logo}/>
				<nav className="nav-bar">
					<NavLink className="nav-link" to="/"> Home </NavLink>
					<NavLink className="nav-link" to="/students"> Students </NavLink>
					<NavLink className="nav-link"  to="/add"> Add Students </NavLink>
                    <NavLink className="nav-link"  to="/about"> About Us </NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Root;