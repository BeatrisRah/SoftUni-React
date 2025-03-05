import {  Routes, Route} from "react-router";
import Headther from "./components/Headther";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-white">
      <Headther />

      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
