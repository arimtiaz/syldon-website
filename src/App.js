import logo from "./logo.svg";
import {Route, Routes,} from 'react-router-dom'
import "./App.css";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/Home/AboutUs";
import Doctors from "./Components/DoctorsPage/Doctors";
import Investors from "./Components/InvestorsPage/InvestorsPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/investors" element={<Investors></Investors>}></Route>
          <Route path="/doctors" element={<Doctors/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
