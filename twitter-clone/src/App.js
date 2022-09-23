import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import LeftSidebar from './components/Left-sidebar';
import RightSidebar from './components/Right-sidebar';

function App() {
  return (
    <div className="container" style={{border: "solid 1px magenta", height :'1000px'}}>
      <Navbar/>
      <HomePage/>
      <LeftSidebar/>
      <RightSidebar/>
    </div>
  );
}

export default App;
