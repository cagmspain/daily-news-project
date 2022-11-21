export const getAllNewsService = async () => {
	const response = await fetch("http://127.0.0.1:3000/news");
	const json = response.json();
	if (!response.ok) {
		throw new Error(json.message);
	}

	return json;
};

export const sendNewsService = async ({ data, token }) => {
	const response = await fetch("http://127.0.0.1:3000/news", {
		method: "POST",
		body: data,
		headers: {
			Authorization: token,
		},
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.message);
	}
	return json;
};

export const deleteNewService = async ({ id, token }) => {
	const response = await fetch(`http://127.0.0.1:3000/news/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: token,
		},
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.message);
	}
	return json;
};
