import {  Routes, Route} from "react-router";
import Headther from "./components/Headther";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import ProductsDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="bg-white">
      <Headther />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:productId" element={<ProductsDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
