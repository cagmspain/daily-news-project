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
	const [votePositive, setVotePositive] = useState(newElement.votesPositives);
	const [voteNegative, setVoteNegative] = useState(newElement.votesNegatives);

	const token = user?.data.token;
	const id = newElement.id;
	let voted = false;

	const deleteNew = async (id) => {
		try {
			await deleteNewService({ id, token });
			deleteNewElement(id);
		} catch (error) {
			setError(error.message);
		}
		//console.log(newElement.id, token);
	};
	const voteNew = async (id, vote, token) => {
		try {
			const response = await voteNewService({ id, vote, token });
			setVotePositive(response.data.positive);
			setVoteNegative(response.data.negative);
			setError("");
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
						<p className="card-header-title">
							{newElement.leadIn} - {newElement.topic}
							{newElement.email ? ` (${newElement.email})` : null}
						</p>
					</header>
					<div className="card-content">
						<div className="content">
							{" "}
							{newElement.newsText}
							<p>{error}</p>
						</div>
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
										voteNew(id, 1, token);
										//voteNewElement(id, vote);
									}}
									className="card-footer-item button is-light is-info"
								>
									{voted ? (
										<div>
											<i className="fa-solid fa-heart"></i>
											<span> </span>
											{votePositive}
										</div>
									) : (
										<div>
											<i className="fa-regular fa-heart"></i>
											<span> </span>
											{votePositive}
										</div>
									)}
								</button>
								<button
									onClick={() => {
										voteNew(id, -1, token);
									}}
									className="card-footer-item button is-light is-info"
								>
									<div>
										<i className="fa-regular fa-thumbs-down "></i>
										<span> </span>
										{voteNegative}
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
