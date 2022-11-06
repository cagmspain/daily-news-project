import { useShow, useSetShow } from "../../context/LoginToggleContext";
import "./Modal.css";

function Modal({ children }) {
	const show = useShow();
	const setShow = useSetShow();

	return (
		<>
			{show && (
				<div className="modal is-active">
					<div
						onClick={() => setShow(false)}
						className="modal-background"
					></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">Inicia sesion</p>
							<button
								className="delete"
								aria-label="close"
								onClick={() => setShow(false)}
							></button>
						</header>
						<section className="modal-card-body">{children}</section>
					</div>
				</div>
			)}
		</>
	);
}

export default Modal;
