import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Top10 from "./components/top10/top10";
import RealTime from "./components/realtimeInv/realtimeInv";
import Historic from "./components/historicInv/historicInv";
import CryptoInfo from "./components/cryptoinfo/cryptoinfo";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import ContactUs from "./components/contactus/contactus";

function App() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      );
      const data = await response.json();
      setCryptocurrencies(data);
      console.log(data);
    };

    fetchData();
    setInterval(fetchData, 30000);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path='/top-10'
          exact
          element={<Top10 data={cryptocurrencies} />}
        />
        <Route
          path='/realtime-investment'
          exact
          element={<RealTime data={cryptocurrencies} />}
        />
        <Route
          path='/historic-investment'
          exact
          element={<Historic data={cryptocurrencies} />}
        />
        <Route
          path='/cryptocurrencies-info/*'
          exact
          element={<CryptoInfo data={cryptocurrencies} />}
        />
        <Route path='/about' exact element={<About />} />
        <Route path='/contactus' exact element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
