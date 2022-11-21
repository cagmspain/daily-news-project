import { useState } from "react";
import { Link } from "react-router-dom";
import { useSetUser, useUser } from "../../context/UserContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

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
			setError(error.message);
			alert("usuario o contraseña invalidos");
		} else {
			setUser(data);
		}
	};

	if (user) {
	}

	return (
		<main id="login" className="modal-like">
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
				<button>Entrar</button>
				{error ? <p>{error}</p> : null}
			</form>
			<p>
				Todavía no tienes cuenta? <Link to="/signup">Regístrate</Link>
			</p>
		</main>
	);
}

export default Login;
