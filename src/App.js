import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import AboutUs from './Components/Home/AboutUs';
import Doctors from './Components/DoctorsPage/Doctors';
import Investors from './Components/InvestorsPage/InvestorsPage';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Doctors></Doctors> */}
      <Investors></Investors>
    </div>
  );
}

export default App;
