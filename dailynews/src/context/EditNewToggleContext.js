import { createContext, useContext, useState } from "react";

const EditNewContext = createContext();

export const EditNewToggleProvider = ({ children }) => {
	const [useEditMode, useSetEditMode] = useState(false);
	return (
		<EditNewContext.Provider value={[useEditMode, useSetEditMode]}>
			{children}
		</EditNewContext.Provider>
	);
};

export const useEditMode = () => useContext(EditNewContext)[0];
export const useSetEditMode = () => useContext(EditNewContext)[1];
