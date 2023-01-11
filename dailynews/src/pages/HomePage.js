import Login from "../components/Login/Login";
import Modal from "../components/Modal/Modal";
import ModalLogin from "../components/Modal/ModalLogin";
import ButtonAddNews from "../components/News/ButtonAddNews";
import { NewsList } from "../components/News/NewsList";
import { useUser } from "../context/UserContext";

import Signup from "../components/Signup/Signup";
import useNews from "../hooks/useNews";
import CreateNew from "../components/News/CreateNew";
import { useState } from "react";
import ModalCreateNew from "../components/Modal/ModalCreateNew";

const HomePage = () => {
	const {
		news,
		loading,
		error,
		addNewElement,
		deleteNewElement,
		EditNewElement,
		voteNewElement,
		topic,
		setTopic,
	} = useNews();
	const user = useUser();

	const [showForm, setShowForm] = useState(false);

	if (loading) {
		return <p>Cargando noticias...</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}

	return (
		<section>
			<div className="section">
				<form>
					<div className="field">
						<label htmlFor="topic" className="label" id="topicFilter">
							Filter by Topic
						</label>
						<div className="select is-info">
							<select
								id="topic"
								name="topic"
								value={topic}
								onChange={(e) => {
									setTopic(e.target.value);
								}}
							>
								<option value="">All topicts</option>
								<option value="deporte">Deportes</option>
								<option value="economia">Economia</option>
								<option value="cultura">Cultura</option>
								<option value="tecnologia">Tecnologia</option>
								<option value="politica">Politica</option>
							</select>
						</div>
					</div>
				</form>
			</div>

			{user ? (
				<div className="is-centered">
					<ButtonAddNews
						className="is-centered"
						showForm={showForm}
						setShowForm={setShowForm}
					/>
					<ModalCreateNew showForm={showForm} setShowForm={setShowForm}>
						<CreateNew
							showForm={showForm}
							setShowForm={setShowForm}
							addNewElement={addNewElement}
						/>
					</ModalCreateNew>
				</div>
			) : null}

			<NewsList
				news={news}
				deleteNewElement={deleteNewElement}
				EditNewElement={EditNewElement}
				voteNewElement={voteNewElement}
			/>

			<ModalLogin>
				<Signup />
			</ModalLogin>
			<Modal>
				<Login />
			</Modal>
		</section>
	);
};
export default HomePage;
