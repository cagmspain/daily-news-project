import { deleteNewService } from "../../services";
import { useContext, useState } from "react";
import { useUser } from "../../context/UserContext";
import {
	useEditMode,
	useSetEditMode,
} from "../../context/EditNewToggleContext";
import EditNew from "./EditNew";
import ModalEditNew from "../../components/Modal/ModalEditNew";

export const NewElement = ({ newElement }) => {
	const user = useUser();
	const editMode = useEditMode();
	const setEditMode = useSetEditMode();
	const [error, setError] = useState("");
	const token = user?.data.token;
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
						{user && user.data.id === newElement.user_id ? (
							<button
								onClick={() => {
									deleteNew(newElement.id, token);
								}}
								className="card-footer-item button is-light is-info"
							>
								<div>
									<i className="fa-solid fa-trash"></i>
								</div>
							</button>
						) : null}
						<button className="card-footer-item button is-light is-info">
							<div>
								<i className="fa-solid fa-check"></i>
							</div>
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								console.log("editando", editMode, newElement.id);
								setEditMode(!editMode);
							}}
							className="card-footer-item button is-light is-info"
						>
							<div>
								<i className="fa-solid fa-pen-to-square"></i>
							</div>
						</button>
					</footer>
				</div>
				<ModalEditNew>
					<EditNew newElement={newElement} />
				</ModalEditNew>
				;
			</div>
		</div>
	);
};
