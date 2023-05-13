import { Routes, Route } from "react-router-dom";
import './App.css';
import Error from "./Error";
import Home from './Home';
import SingleMovie from "./SingleMovie";

function App() {
	return (
		<>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:id" element={<SingleMovie />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
