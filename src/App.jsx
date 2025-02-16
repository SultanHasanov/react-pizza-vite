import React from "react";
import Header from "./components/Header";
import "./scss/app.scss";
import NotFound from "./pages/NotFound";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Home from "./pages/Home";
import Burger from "./pages/Burger";
import PizzaDetails from "./pages/PizzaDetails";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const location = useLocation();
  const isPizzaDetailsPage = location.pathname.startsWith("/pizza/");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header  isPizzaDetailsPage={isPizzaDetailsPage} /> 

        <div className="content">
          <Routes>
            <Route path="/pizza/:id" element={<PizzaDetails />} />
            <Route path="/" element={<Home />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
