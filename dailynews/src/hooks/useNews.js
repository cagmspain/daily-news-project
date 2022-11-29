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
		//console.log(news);
		setNews(news.filter((NewElement) => NewElement.id !== id));
	};
	const EditNewElement = (id, data, user_id) => {
		console.log("editando live");
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
	//const mapTask = this.tasks.map((elem) => {
	// 	elem.id === id;
	// 	return (elem = task);
	// });

	return {
		news,
		loading,
		error,
		addNewElement,
		deleteNewElement,
		EditNewElement,
	};
};
export default useNews;
