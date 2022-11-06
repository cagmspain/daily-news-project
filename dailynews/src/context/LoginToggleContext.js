import { createContext, useContext, useState } from "react";

const LoginToggleContext = createContext();

export const LoginToggleProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	return (
		<LoginToggleContext.Provider value={[show, setShow]}>
			{children}
		</LoginToggleContext.Provider>
	);
};

export const useShow = () => useContext(LoginToggleContext)[0];
export const useSetShow = () => useContext(LoginToggleContext)[1];
