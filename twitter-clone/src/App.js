import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import { RequireAuth } from "react-auth-kit";
function App() {
  
  return (
    <div>

      
        <Routes>
          <Route exact path="/" element={<RequireAuth loginPath="/login"><Home/></RequireAuth>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile"  element={<RequireAuth loginPath="/login"><Profile/></RequireAuth>}/>
        </Routes>

    </div>
  );
}

export default App;
