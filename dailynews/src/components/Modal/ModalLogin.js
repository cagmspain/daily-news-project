import { useActive, useSetActive } from "../../context/ToggleContext";

import "./Modal.css";

function ModalLogin({ children, label = "Registrate" }) {
	const active = useActive();
	const setActive = useSetActive();

	return (
		<>
			{active && (
				<div className="modal is-active">
					<div
						onClick={() => setActive(false)}
						className="modal-background"
					></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">Registrate</p>
							<button
								className="delete"
								aria-label="close"
								onClick={() => setActive(false)}
							></button>
						</header>
						<section className="modal-card-body">{children}</section>
					</div>
				</div>
			)}
		</>
	);
}

export default ModalLogin;
