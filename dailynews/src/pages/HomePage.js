import Login from "../components/Login/Login";
import Modal from "../components/Modal/Modal";
import ModalLogin from "../components/Modal/ModalLogin";
import ButtonAddNews from "../components/News/ButtonAddNews";
import { NewsList } from "../components/News/NewsList";
import { useSetUser, useUser } from "../context/UserContext";

import Signup from "../components/Signup/Signup";
import useNews from "../hooks/useNews";
import CreateNew from "../components/News/CreateNew";

const HomePage = () => {
	const { news, loading, error } = useNews();
	const user = useUser();
	console.log(user);

	if (loading) {
		return <p>Cargando noticias...</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}
	console.log(news.data);
	return (
		<section>
			{user ? <CreateNew /> : null}
			<ButtonAddNews />

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
