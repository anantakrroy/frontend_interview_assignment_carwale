import React, { useState } from "react";
import "./index.css";
import Data from "./Data";

function StockData() {
  const [prices, setPrices] = useState({});

  function getStocksData() {
    let url = "https://jsonmock.hackerrank.com/api/stocks?date=";
    let dateVal = document.querySelector("#app-input").value;
    url = url + dateVal;
    fetch(url).then(data => data.json())
      .then(res => {
        let data = res.data[0];
        if (data)
          setPrices({ open: data.open, high: data.high, low: data.low, close: data.close })
        else
          setPrices({});
      });
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" />
        <button className="" onClick={getStocksData} id="submit-button" data-testid="submit-button">Search</button>
      </section>
      <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        {Object.keys(prices).length === 0 ? <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No results found !</div> : <Data prices={prices} />}
      </ul>
    </div>
  );
}

export default StockData;
