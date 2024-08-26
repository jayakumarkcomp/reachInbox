import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/index";
import OneBox from "./components/OneBox/index";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<OneBox />} />
          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;