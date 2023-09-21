import Home from "./Home";
import StudentsView from "./component/student/StudentsView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentPofile";

function App() {
	return (
		<main>
			<Router>
				<NavBar />
				<Routes>
					
					<Route
						exact
						path="/"
						element={<StudentsView />}></Route>
					<Route
						exact
						path="/add-students"
						element={<AddStudent />}></Route>
					<Route
						exact
						path="/edit-student/:id"
						element={<EditStudent />}></Route>
					<Route
						exact
						path="/student-profile/:id"
						element={<StudentPofile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;