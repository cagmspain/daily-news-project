import { deleteNewService } from "../../services";
import { useContext, useState } from "react";
import { useUser } from "../../context/UserContext";

export const NewElement = ({ newElement }) => {
	const user = useUser();

	const [error, setError] = useState("");
	const token = user;
	const id = newElement.id;

	const deleteNew = async () => {
		try {
			await deleteNewService({ id, token });
		} catch (error) {
			setError(error.message);
		}
		console.log(newElement.id, token);
	};
	return (
		<div>
			<p></p>
			<div className="card">
				<div className="card-flex">
					<header className="card-header">
						<p className="card-header-title">{newElement.leadIn}</p>
					</header>
					<div className="card-content">
						<div className="content"> {newElement.newsText}</div>
					</div>
					<footer className="card-footer">
						<button className="card-footer-item button is-light is-info">
							<div onClick={() => deleteNew(newElement.id, token)}>
								<i className="fa-solid fa-trash"></i>
							</div>
						</button>
						<button className="card-footer-item button is-light is-info">
							<div>
								<i className="fa-solid fa-check"></i>
							</div>
						</button>
						<button className="card-footer-item button is-light is-info">
							<div>
								<i className="fa-solid fa-pen-to-square"></i>
							</div>
						</button>
					</footer>
				</div>
			</div>
		</div>
	);
};
