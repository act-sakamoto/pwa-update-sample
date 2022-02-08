import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleUpdateServiceWorker = () => {
    navigator.serviceWorker.getRegistrations().then((regs) =>
      regs.forEach((reg) => {
        if (reg && reg.waiting) {
          reg.waiting.postMessage({ type: "SKIP_WAITING" });
        }
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="button" onClick={handleUpdateServiceWorker}>
          更新
        </input>
      </header>
    </div>
  );
}

export default App;
