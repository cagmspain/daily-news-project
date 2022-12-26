import Login from "../components/Login/Login";
import Modal from "../components/Modal/Modal";
import ModalLogin from "../components/Modal/ModalLogin";
import ButtonAddNews from "../components/News/ButtonAddNews";
import { NewsList } from "../components/News/NewsList";
import { useSetUser, useUser } from "../context/UserContext";

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
	} = useNews();
	const user = useUser();

	const [showForm, setShowForm] = useState(false);

	if (loading) {
		return <p>Cargando noticias...</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}

	const handleForm = async (e) => {
		e.preventDefault();
	};

	return (
		<section>
			<form onSubmit={handleForm}>
				<label htmlFor="topic" className="label">
					topic
				</label>
				<select id="topic" name="topic" className="input">
					<option value="deporte">Deportes</option>
					<option value="economia">Economia</option>
				</select>
				<button type="submit" className="mt-2 button is-info">
					Find
				</button>
			</form>

			{user ? (
				<>
					<ButtonAddNews showForm={showForm} setShowForm={setShowForm} />
					<ModalCreateNew showForm={showForm} setShowForm={setShowForm}>
						<CreateNew
							showForm={showForm}
							setShowForm={setShowForm}
							addNewElement={addNewElement}
						/>
					</ModalCreateNew>
				</>
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
