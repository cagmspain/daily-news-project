import { useState } from "react";
//import { Link } from "react-router-dom";
import { useActive, useSetActive } from "../../context/ToggleContext";
import { useShow, useSetShow } from "../../context/LoginToggleContext";

function Signup() {
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [biography, setBiography] = useState("");
	const [error, setError] = useState("");

	const active = useActive();
	const setActive = useSetActive();
	const show = useShow();
	const setShow = useSetShow();

	const checkPassword = () => {
		if (password !== confirmPassword) {
			setError("Las contraseñas no coinciden");
			return false;
		} else {
			return true;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (checkPassword()) {
			const res = await fetch("http://localhost:3000/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: username,
					password,
					name,
					biography,
				}),
			});
			const data = await res.json();

			if (!res.ok) {
				setError(data.message);
			} else {
				setError(data.message);
			}
		}
	};

	return (
		<main id="signup" className="modal-like">
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label className="label">
						<span>Nombre</span>
						<div className="control">
							<input
								className="input"
								type="text"
								placeholder="Name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
					</label>
				</div>
				<div className="field">
					<label className="label">
						<span>Email or username</span>
						<div className="control">
							<input
								className="input"
								type="email"
								placeholder="Email"
								name="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
					</label>
				</div>
				<div className="field">
					<label className="label">
						<span>Password</span>
						<div className="control">
							<input
								className="input"
								placeholder="Password"
								name="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</label>
				</div>

				<div className="field">
					<label className="label">
						<span>Confirm Password</span>
						<div className="control">
							<input
								className="input"
								placeholder="Confirm Password"
								name="Confirm password"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</label>
				</div>
				<div className="field">
					<label className="label">
						<span>Biografía</span>
						<div className="control">
							<textarea
								className="textarea"
								type="text"
								placeholder="Biography"
								name="biography"
								value={biography}
								onChange={(e) => setBiography(e.target.value)}
							/>
						</div>
					</label>
				</div>

				<p>{error}</p>
				<div className="field">
					<div className="control">
						<button className="button is-link is-fullwidth" type="submit">
							Registro
						</button>
					</div>
				</div>
			</form>
			<p>Ya tienes cuenta?</p>
			<div className="field">
				<div className="control">
					<button
						className="button is-link is-fullwidth"
						type="submit"
						onClick={() => {
							setActive(!active);
							setShow(!show);
						}}
					>
						Login
					</button>
				</div>
			</div>
		</main>
	);
}

export default Signup;
