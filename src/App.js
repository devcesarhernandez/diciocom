import { Routes, Route } from "react-router-dom"
import RegisterForm from "./Pages/Forms/Register"
import Form from "./Pages/Layouts/Form"
import Users from "./Pages/Tables/Users"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Form children={<RegisterForm/>} />} ></Route>
			<Route path="/users" element={<Users />} />
		</Routes>
	)
}

export default App;
