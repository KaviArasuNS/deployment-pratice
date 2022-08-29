import Home from "./pages/Home";
import Login from "./pages/Login";
import PorductList from "./pages/PorductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state);
  return (
    <Routes>
      <Route path="/" element={<PorductList />} />
    </Routes>
  );
};

export default App;
