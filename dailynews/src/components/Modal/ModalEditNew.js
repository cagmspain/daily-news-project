import {
	useEditMode,
	useSetEditMode,
} from "../../context/EditNewToggleContext";
import "./Modal.css";

function ModalEditNew({ children }) {
	const editMode = useEditMode();
	const setEditMode = useSetEditMode();

	return (
		<>
			{editMode && (
				<div className="modal is-active">
					<div
						onClick={(e) => {
							e.stopPropagation();
							setEditMode(false);
						}}
						className="modal-background"
					></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">Edit new</p>
							<button
								className="delete"
								aria-label="close"
								onClick={() => setEditMode(false)}
							></button>
						</header>
						<section className="modal-card-body">{children}</section>
					</div>
				</div>
			)}
		</>
	);
}

export default ModalEditNew;
