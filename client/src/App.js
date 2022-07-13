import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import List from "./components/List"
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [holdData, setHoldData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      fetch("/stocks")
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setHoldData(data)
          console.log(data)
          setLoaded(true)
        });
    }
  }, []);

  function aFilter(letter) {
    setData(holdData.filter(word => word.symbol[0] === letter))
  }

  function reset() {
    setData(holdData)
  }


  return (
    <div className="App">
      <header className="App-header">
        <List props={data} />
        <div className="container">
          <button className="button-6" onClick={() => aFilter('A')}>Give me the A's!</button>
          <button className="button-6" onClick={() => aFilter('I')}>Give me the I's!</button>
          <button className="button-6" onClick={() => aFilter('P')}>Give me the P's!</button>
          <button className="button-6" onClick={() => aFilter('T')}>Give me the T's!</button>
        </div>
        <button className="button-6" onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;