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
