import "./Modal.css";

function ModalEditNew({ view, setView, children }) {
	return (
		<>
			{view && (
				<div className="modal is-active">
					<div
						onClick={(e) => {
							e.stopPropagation();
							setView(false);
						}}
						className="modal-background"
					></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">Edit new</p>
							<button
								className="delete"
								aria-label="close"
								onClick={() => setView(false)}
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
