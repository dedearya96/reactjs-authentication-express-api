import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dahsboard";
import Login from "./components/Login";

import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/'element={<Dashboard/>}/>
        <Route exact path='/login'element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard"  element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
