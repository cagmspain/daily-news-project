import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { editNewService } from "../../services";

const EditNew = ({ newElement }) => {
	const [error, setError] = useState("");
	const [sending, setSending] = useState(false);
	const [leadIn, setLeadIn] = useState(newElement.leadIn);
	const [newsText, setNewsText] = useState(newElement.newsText);
	const [topic, setTopic] = useState(newElement.topic);

	//const id = user.data.id;
	const newId = newElement.id;
	console.log("este es el id a editar", newId);
	console.log("esto recibo", newElement);

	const handleForm = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		try {
			setSending(true);
			const data = new FormData(e.target);

			const editedNew = await editNewService({ newId, data });
			console.log(newId, data);
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
							onChange={(e) => {
								setLeadIn(e.target.value);
							}}
							value={leadIn}
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
						onChange={(e) => {
							setNewsText(e.target.value);
						}}
						value={newsText}
					></textarea>
				</fieldset>
				<fieldset className="field">
					<div className="control">
						<label htmlFor="topic" className="label">
							topic
						</label>
						<input
							id="topic"
							name="topic"
							className="input"
							type="text"
							placeholder="topic"
							onChange={(e) => {
								setTopic(e.target.value);
							}}
							value={topic}
						/>
					</div>
				</fieldset>
				<div className="control">
					<button type="submit" className="mt-2 button is-info">
						Edit!
					</button>
				</div>
				{sending ? <p>Editing New</p> : null}
				{error ? <p>{error}</p> : null}
			</form>
		</div>
	);
};
export default EditNew;