import { NewElement } from "./NewElement";

export const NewsList = ({
	news,
	deleteNewElement,
	EditNewElement,
	voteNewElement,
}) => {
	//console.log(news);
	return news.length !== 0 ? (
		<ul>
			{news.map((newElement) => (
				<li key={newElement.id}>
					<div className="section">
						<NewElement
							newElement={newElement}
							deleteNewElement={deleteNewElement}
							EditNewElement={EditNewElement}
						/>
					</div>
				</li>
			))}
		</ul>
	) : (
		<p>No hay noticias</p>
	);
};
