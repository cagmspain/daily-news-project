import { useEffect, useState } from "react";
import { NewElement } from "../components/News/NewElement";
import { getAllNewsService } from "../services";

const useNews = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const loadNews = async () => {
			try {
				setLoading(true);
				const data = await getAllNewsService();
				setNews(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		loadNews();
	}, []);

	//Add new in sgtate after succesfull request
	const addNewElement = (data) => {
		//console.log(news);
		setNews([data, ...news]);
	};

	//delete from state after succesfull request
	const deleteNewElement = (id) => {
		console.log(news);
		setNews(news.filter((NewElement) => NewElement.id !== id));
	};

	//edit from state after successfull fetch request
	const EditNewElement = (id, data) => {
		setNews(
			news.map((newElement) => {
				if (newElement.id === id) {
					return (newElement = data);
				} else {
					return newElement;
				}
			})
		);
	};
	//add vote to state after succesfull request
	const voteNewElement = (id, vote) => {
		setNews(
			news.map((newElement) => {
				if (newElement.id === id) {
					if (vote === 1) {
						const noticias = newElement;
						//console.log(noticias);
						noticias.votesPositives = Number(newElement.votesPositives) + 1;
						//console.log("noticias positivas", noticias);
						return noticias;
					} else {
						const noticias = newElement;
						//console.log(noticias);
						noticias.votesNegatives = Number(newElement.votesNegatives) + 1;
						//console.log("noticias negativas", noticias);
						return noticias;
					}
				} else {
					return newElement;
				}
			})
		);
	};

	return {
		news,
		loading,
		error,
		addNewElement,
		deleteNewElement,
		EditNewElement,
		voteNewElement,
	};
};
export default useNews;
