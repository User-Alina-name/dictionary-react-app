import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
      <footer className="App-footer">Coded by Alina Pysmenna</footer>
    </div>
  );
}

export default App;
