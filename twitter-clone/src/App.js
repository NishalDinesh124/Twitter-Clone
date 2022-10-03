import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';
import LeftSidebar from './components/Sidebars/LeftSidebar';
import RightSidebar from './components/Sidebars/RightSidebar';
import './App.css'
function App() {
  return (
    <div className="container">
      
      
       <LeftSidebar/>
       <HomePage/>
      <RightSidebar/> 
    </div>
  );
}

export default App;
