import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import  {Home} from "./components/Home";
import {Navbar} from "./components/Navbar";
import { Login } from './components/Login';
import { Signup } from './components/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
