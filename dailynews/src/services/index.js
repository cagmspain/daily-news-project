export const getAllNewsService = async (topic) => {
	const response = await fetch(
		`http://127.0.0.1:3000/news${topic ? "?topic=" + topic : ""}`
	);
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
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

	return json.data;
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

export const editNewService = async ({ id, data, token }) => {
	const response = await fetch(`http://127.0.0.1:3000/news/${id}`, {
		method: "PUT",
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
export const voteNewService = async ({ id, vote, token }) => {
	const response = await fetch(`http://127.0.0.1:3000/news/${id}/votes`, {
		method: "POST",
		body: JSON.stringify({ vote }),

		headers: { "Content-Type": "application/json", Authorization: token },
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.message);
	}
	return json;
};
