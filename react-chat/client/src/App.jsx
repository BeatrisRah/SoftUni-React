import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Chatroom from "./components/chat/Chatroom"
import Navigation from "./components/Navigation"
import { useState } from "react"
import { UserContext } from "./context/UserContext"


function App() {

	const [user, setUser] = useState(null)

	const login = (userData) => {
		setUser(userData)
	}

	const logout = () => {
		setUser(null)
	}
	return (
		<>
			<UserContext.Provider value={{user, login, logout}}>

				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chat" element={<Chatroom />} />
				</Routes>
			</UserContext.Provider>
		</>
	)
}

export default App
