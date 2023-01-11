//	import { Link } from "react-router-dom";
import { useActive, useSetActive } from "../../context/ToggleContext";
import { useShow, useSetShow } from "../../context/LoginToggleContext";
import "../../App.css";
import { useSetUser, useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import qnews from "./qnews.png";
function Navbar() {
	const active = useActive();
	const setActive = useSetActive();
	const show = useShow();
	const user = useUser();
	const setUser = useSetUser();

	const setShow = useSetShow();
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<Link to="/" className="navbar-item">
					<img src={qnews} width="40" height="28" alt="logo daily news" />
					<h1 className="title is-4">Quicknewbe</h1>
				</Link>

				<div
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start"></div>

				<div className="navbar-end">
					<div className="navbar-item">
						{!user ? (
							<div className="buttons">
								<button
									onClick={() => {
										setActive(!active);
									}}
									className="button is-primary"
								>
									Signup
								</button>
								<button
									onClick={() => {
										setShow(!show);
									}}
									className="button is-light"
								>
									Log in
								</button>
							</div>
						) : (
							<div className="buttons">
								<button
									onClick={() => {
										setUser(null);
									}}
									className="button is-primary"
								>
									Logout
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
