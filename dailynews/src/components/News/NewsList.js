import { NewElement } from "./NewElement";

export const NewsList = ({ news }) => {
	console.log(news);
	return news ? (
		<ul>
			{news.map((newElement) => (
				<li key={newElement.id}>
					<div className="section">
						<NewElement newElement={newElement} />
					</div>
				</li>
			))}
		</ul>
	) : (
		<p>No hay noticias</p>
	);
};
