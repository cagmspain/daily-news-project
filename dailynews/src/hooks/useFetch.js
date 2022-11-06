import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

/**
 * Devuelve los datos obtenidos al hacer fetch a la ruta indicada.
 * @param {*} url La ruta objetivo
 * @param {*} key Parámetro opcional que permite forzar una recarga al cambiarlo
 * @returns Los datos JSON devueltos por la ruta
 */
function useFetch(url, key) {
	const [data, setData] = useState();
	const user = useUser();

	useEffect(() => {
		(async () => {
			const res = await fetch(url, {
				headers: user ? { Authorization: "Bearer " + user.token } : {},
			});
			const data = await res.json();
			setData(data);
		})();
	}, [url, user, key]); // Al poner el key aquí, si cambia, se vuelve a ejecutar.

	return data;
}

export default useFetch;
