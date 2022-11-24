//	import { Link } from "react-router-dom";
import { useActive, useSetActive } from "../../context/ToggleContext";
import { useShow, useSetShow } from "../../context/LoginToggleContext";
import "../../App.css";
import { useSetUser, useUser } from "../../context/UserContext";

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
				<a className="navbar-item" href="https://bulma.io">
					<img
						src="https://bulma.io/images/bulma-logo.png"
						width="112"
						height="28"
						alt=""
					/>
				</a>

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
									LogOut
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
