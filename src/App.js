import './App.css';
import Home from './HomePages/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './LoginAndRegister/Login';
import Register from './LoginAndRegister/Register';
import Navbars from './Nvabars/Navbar';
import Footer from './Footer/Footer';
import Personal from './Details/Personal';
import Datas from './Details/Datas';



function App() {
  return (
    <>
    <Navbars/>
      <Routes>
          <Route exact path="" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/details" element={<Personal />}></Route>
          <Route exact path="/datas" element={<Datas/>}></Route>

          /datas
      </Routes>
      {/* <Footer/> */}
    </>
    
  );
}

export default App;
