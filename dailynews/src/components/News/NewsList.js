import { NewElement } from "./NewElement";

export const NewsList = ({
	news,
	deleteNewElement,
	EditNewElement,
	voteNewElement,
}) => {
	console.log("esto son las news", news);
	return news ? (
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
		<p>No hay noticias Empty state</p>
	);
};
