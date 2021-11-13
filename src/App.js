import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [cocktailData,setFoodData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
      );
      setFoodData(result.data.drinks);
    };
    fetchData();
  },[]);

  return (
    <div className="">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home data={cocktailData} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
