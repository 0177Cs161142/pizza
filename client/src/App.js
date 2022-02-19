import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
//importing bootstrap in app.js
import Bootstarp from "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <Navbar/>
    <Homescreen/>
    
    </>
  );
}

export default App;
