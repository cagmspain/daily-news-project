import { useState } from "react";

import { useSetShow, useShow } from "../../context/LoginToggleContext";
import { useActive, useSetActive } from "../../context/ToggleContext";
import { useSetUser, useUser } from "../../context/UserContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const setShow = useSetShow();
	const show = useShow();
	const active = useActive();
	const setActive = useSetActive();
	const user = useUser();
	const setUser = useSetUser();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch("http://localhost:3000/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: username,
				password,
			}),
		});
		const data = await res.json();
		if (!res.ok) {
			setError(data.message);
			//alert("usuario o contraseña invalidos");
		} else {
			setUser(data);
			setShow(!show);
		}
	};

	if (user) {
	}

	return (
		<main id="login" className="modal-like">
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label className="label">
						<span>Email or username </span>
						<div className="control">
							<input
								name="username"
								className="input"
								type="email"
								placeholder="email"
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
				{error ? <p>{error}</p> : null}
				<div className="field">
					<div className="control">
						<button className="button is-link is-fullwidth" type="submit">
							Entrar
						</button>
					</div>
				</div>
			</form>
			<p>Todavía no tienes cuenta?</p>
			<div className="field">
				<div className="control">
					<button
						className="button is-link is-fullwidth"
						type="submit"
						onClick={() => {
							setShow(!show);
							setActive(!active);
						}}
					>
						Registrate
					</button>
				</div>
			</div>
		</main>
	);
}

export default Login;
