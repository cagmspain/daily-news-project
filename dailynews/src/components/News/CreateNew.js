import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { sendNewsService } from "../../services";

const CreateNew = ({ showForm, setShowForm, addNewElement }) => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [sending, setSending] = useState(false);
	const user = useUser();
	const token = user.data.token;

	const handleForm = async (e) => {
		e.preventDefault();
		try {
			setSending(true);
			const data = new FormData(e.target);

			const newNew = await sendNewsService({ data, token });

			addNewElement(newNew);

			setShowForm(!showForm);
			navigate("/");
		} catch (error) {
			setError(error.message);
		} finally {
			setSending(false);
		}
	};

	return (
		<div className="section">
			<form onSubmit={handleForm}>
				<fieldset className="field">
					<div className="control">
						<label htmlFor="leadIn" className="label">
							New title
						</label>
						<input
							id="leadIn"
							name="leadIn"
							className="input"
							type="text"
							placeholder="leadIn"
							required
						/>
					</div>
				</fieldset>
				<fieldset className="control">
					<label htmlFor="newsText" className="label">
						News Description
					</label>
					<textarea
						id="newsText"
						name="newsText"
						className="textarea"
						placeholder="Escribe una noticia"
					></textarea>
				</fieldset>
				<fieldset className="field">
					<div className="control">
						<label htmlFor="topic" className="label">
							topic
						</label>

						<select id="topic" name="topic" className="input">
							<option>Select Topic</option>
							<option value="deporte">Deportes</option>
							<option value="economia">Economia</option>
							<option value="cultura">Cultura</option>
							<option value="tecnologia">Tecnologia</option>
							<option value="politica">Politica</option>
						</select>
					</div>
				</fieldset>
				<div className="control">
					<button type="submit" className="mt-2 button is-info">
						Create!
					</button>
				</div>
				{sending ? <p>Sending New</p> : null}
				{error ? <p>{error}</p> : null}
			</form>
		</div>
	);
};
export default CreateNew;
