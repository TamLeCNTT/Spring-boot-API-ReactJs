import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Nav from './layout/Nav';
import Home from './component/home/Home';
import ListLoaiSanPhams from './component/loaisanpham/ListLoaiSanPhams';
import ListSanPham from './component/sanpham/ListSanPham';
import ChiTietSanPham from './component/sanpham/ChiTietSanPham';
import ThemLoaiSanPham from './component/loaisanpham/ThemLoaiSanPham';
import ThemSanPham from './component/sanpham/ThemSanPham';
import Register from './component/home/Register';
import Login from './component/home/Login';
import Logout from './component/home/Logout';
import SanPhamShow from './component/sanpham/SanPhamShow';
import Uploadfile from './component/public/Uploadfile';
import Nhapsanpham from './component/sanpham/Nhapsanpham';
//import "~bootstrap/scss/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter ,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        
        <Switch>
          {/* <Route path="/todo">
          <ListToDo/>
          </Route> */}
          
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/dangxuat" exact>
            <Logout />
          </Route>
          <Route path="/loaisanpham" exact>
            <ListLoaiSanPhams />
          </Route>
          <Route path="/sanpham" exact>
            <ListSanPham />
          </Route>
          <Route path="/sanphamshow" exact>
            <SanPhamShow />
          </Route>

          {/* <Route path="/mycomponent">
          <Mycomponent/> 
          </Route>*/}
          <Route path="/user" exact>
          <Register/> 
          </Route>
          <Route path="/dangnhap" exact>
          <Login/> 
          </Route>
          <Route path="/sanpham/chitiet/:id">
          <ChiTietSanPham/>

          </Route> 
          <Route path="/sanpham/nhaphang" exact>
          <Nhapsanpham/>
          </Route> 
          <Route path="/sanpham/:id">
          <ThemSanPham/>
          </Route> 
         
          <Route path="/upload">
          <Uploadfile/>
          </Route>
          
          {/* <Route path="/loaisanpham/them">
          <ThemLoaiSanPham/>
          </Route>  */}
          <Route path="/loaisanpham/:id">
          <ThemLoaiSanPham/>
          </Route> 
        </Switch>
        
    
      
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          /> 

      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
