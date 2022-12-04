import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
