const ButtonAddNews = ({ showForm, setShowForm }) => {
	return (
		<div className="container">
			<div className="card-content button-add">
				<div className="content">
					<button
						onClick={() => setShowForm(!showForm)}
						className="button is-info"
					>
						<div>Add news</div>
						<div>
							<i className="fa-solid fa-plus"></i>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};
export default ButtonAddNews;
