import {  Routes, Route} from "react-router";
import Headther from "./components/Headther";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="bg-white">
      <Headther />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
