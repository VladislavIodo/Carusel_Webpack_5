import {useState} from "react";
import "./App.css";
import "./App.scss";
import logo from "./reactLogo.svg";

function App() {
const [name, setName] = useState("");
return (
    <div className="app">
    <h1>
        Hi React!!!
        <img src={logo} alt="react logo" width="25"/>
    </h1>
        <div>
            <label htmlFor="name">Number: </label>
            <input type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    </div>
);
}

export default App;