import SideBar from "./Component/SideBar";
import Topbar from "./Component/Topbar";
import Home from './pages/Home';
import './App.css';



function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
