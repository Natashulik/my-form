import { Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/my-form" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
