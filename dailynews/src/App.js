import { Route, Routes } from "react-router-dom";

//import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
//import Signup from "./components/Signup/Signup";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<main>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</main>
	);
}

export default App;
