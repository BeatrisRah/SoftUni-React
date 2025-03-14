import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Chatroom from "./components/chat/Chatroom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chatroom />} />
      </Routes>
    </>
  )
}

export default App
