import Login from "../components/Login/Login";
import Modal from "../components/Modal/Modal";
import ModalLogin from "../components/Modal/ModalLogin";
import ButtonAddNews from "../components/News/ButtonAddNews";
import { NewsList } from "../components/News/NewsList";
import { useSetUser, useUser } from "../context/UserContext";
import { useSetShow, useShow } from "../context/LoginToggleContext";
import Signup from "../components/Signup/Signup";
import useNews from "../hooks/useNews";
import CreateNew from "../components/News/CreateNew";
import { useState } from "react";

const HomePage = () => {
	const { news, loading, error } = useNews();
	const user = useUser();
	const show = useShow();
	const setShow = useSetShow();
	//console.log("esto es user", user);

	if (loading) {
		return <p>Cargando noticias...</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}
	//console.log(news.data);
	return (
		<section>
			{user ? (
				<>
					<ButtonAddNews />

					<CreateNew />
				</>
			) : null}

			<NewsList news={news.data} />

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
