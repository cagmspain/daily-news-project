import "./Modal.css";

function ModalCreateNew({ showForm, setShowForm, children }) {
	return (
		<>
			{showForm && (
				<div className="modal is-active">
					<div
						onClick={() => setShowForm(!showForm)}
						className="modal-background"
					></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">Create news</p>
							<button
								className="delete"
								aria-label="close"
								onClick={() => setShowForm(!showForm)}
							></button>
						</header>
						<section className="modal-card-body">{children}</section>
					</div>
				</div>
			)}
		</>
	);
}

export default ModalCreateNew;
