import { NewElement } from "./NewElement";

export const NewsList = ({ news }) => {
	//console.log("esto son las news", news);
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
		<p>No hay noticias Empty state</p>
	);
};
