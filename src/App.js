import logo from "./logo.svg";
import "./App.css";
import { API } from "aws-amplify";

const myAPI = "api426c55e3";
const path = "/validate";

function App() {
  const getHelloWorld = () => {
    const endpoint = `${path}/`;
    API.get(myAPI, endpoint)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => getHelloWorld()}>Get Hello World</button>
      </header>
    </div>
  );
}

export default App;
