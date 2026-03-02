import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Login from "../src/pages/Auth/Login";
import Pricing from "../src/pages/Pricing/Pricing";
import Team from "../src/pages/Team/Team";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
