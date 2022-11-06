import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSetUser, useUser } from "../../context/UserContext";

function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const user = useUser();
	const setUser = useSetUser();

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
			// TODO: Manejar error
		} else {
			setUser(data);
		}
	};

	if (user) {
		//return <Navigate to="/" />;
	}

	return (
		<main id="signup" className="modal-like">
			<form onSubmit={handleSubmit}>
				<label>
					<span>Username</span>
					<input
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<label>
					<span>Password</span>
					<input
						name="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button>Registro</button>
			</form>
			<p>
				Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
			</p>
		</main>
	);
}

export default Signup;
