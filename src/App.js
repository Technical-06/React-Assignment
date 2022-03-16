import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [jwtToken, setJwtToken] = useState(null);
  console.log(jwtToken);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home jwtToken={jwtToken} setJwtToken={setJwtToken} />}
          />
          <Route
            path="/login"
            element={<Login jwtToken={jwtToken} setJwtToken={setJwtToken} />}
          />
          <Route
            path="/register"
            element={<Register jwtToken={jwtToken} setJwtToken={setJwtToken} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
