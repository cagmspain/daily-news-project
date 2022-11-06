import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
	const [active, setActive] = useState(false);
	return (
		<ToggleContext.Provider value={[active, setActive]}>
			{children}
		</ToggleContext.Provider>
	);
};

export const useActive = () => useContext(ToggleContext)[0];
export const useSetActive = () => useContext(ToggleContext)[1];
