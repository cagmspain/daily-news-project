import { deleteNewService, voteNewService } from "../../services";
import { useState } from "react";
import { useUser } from "../../context/UserContext";

import EditNew from "./EditNew";
import ModalEditNew from "../../components/Modal/ModalEditNew";

export const NewElement = ({
	newElement,
	deleteNewElement,
	EditNewElement,
}) => {
	const user = useUser();

	//const setEditMode = useSetEditMode();
	const [error, setError] = useState("");
	const [view, setView] = useState(false);
	const [voted, setVoted] = useState(false);

	const token = user?.data.token;
	const id = newElement.id;
	let vote;

	const deleteNew = async (id) => {
		try {
			await deleteNewService({ id, token });
			deleteNewElement(id);
		} catch (error) {
			setError(error.message);
		}
		//console.log(newElement.id, token);
	};
	const voteNew = async () => {
		try {
			await voteNewService({ id, vote, token });
		} catch (error) {
			setError(error.message);
		}
		//console.log(newElement.id, token);
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
									deleteNew(id, token);
								}}
								className="card-footer-item button is-light is-info"
							>
								<div>
									<i className="fa-solid fa-trash"></i>
								</div>
							</button>
						) : null}
						{user && user.data.id !== newElement.user_id ? (
							<>
								<button
									onClick={() => {
										vote = 1;
										voteNew(id, vote, token);
										setVoted(true);
									}}
									className="card-footer-item button is-light is-info"
								>
									{voted ? (
										<div>
											<i className="fa-solid fa-heart"></i>
											{newElement.votesPositives}
										</div>
									) : (
										<div>
											<i className="fa-regular fa-heart"></i>
											{newElement.votesPositives}
										</div>
									)}
								</button>
								<button
									onClick={() => {
										vote = -1;
										voteNew(id, vote, token);
									}}
									className="card-footer-item button is-light is-info"
								>
									<div>
										<i className="fa-regular fa-thumbs-down"></i>
										{newElement.votesNegatives}
									</div>
								</button>
							</>
						) : null}
						{user && user.data.id === newElement.user_id ? (
							<button
								onClick={(e) => {
									e.stopPropagation();

									setView(true);
								}}
								className="card-footer-item button is-light is-info"
							>
								<div>
									<i className="fa-solid fa-pen-to-square"></i>
								</div>
							</button>
						) : null}
					</footer>
				</div>
				<ModalEditNew view={view} setView={setView}>
					<EditNew
						newElement={newElement}
						EditNewElement={EditNewElement}
						setView={setView}
					/>
				</ModalEditNew>
			</div>
		</div>
	);
};
