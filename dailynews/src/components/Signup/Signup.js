import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch("http://localhost:3000/signup", {
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
		} else {
			setError(data.message);
		}
	};

	return (
		<main id="signup" className="modal-like">
			<form onSubmit={handleSubmit}>
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
				<p>{error}</p>
				<div className="field">
					<div className="control">
						<button className="button is-link is-fullwidth" type="submit">
							Registro
						</button>
					</div>
				</div>
			</form>
			<p>
				Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
			</p>
		</main>
	);
}

export default Signup;
