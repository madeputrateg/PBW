import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import About from './pages/AboutUs';
// import Footer from './components/footer/footer.js';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hubungi from "./components/Hubungi";
import Home from './pages/Home.js';
import LoginFirst from './page/loginfirst/loginfirst.js';
import LoginSecond from './page/loginsecond/loginsecond.js';
import Register from './page/register/register.js';
import Dashboardadmin from './page/dashboardadmin/dashboardadmin.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App"><Navbar/><Home/><Hubungi/><Footer/></div>,
  },
  {
    path: "/LoginF",
    element: <div className="App"><LoginFirst/></div>,
  },
  {
    path: "/Login",
    element: <div className="App"><LoginSecond/></div>,
  },
  {
    path: "/Register",
    element: <div className="App"><Register/></div>,
  },
  {
    path:"/admin/dashboard",
    element:<div className="App"><Header/><Dashboardadmin/><Footer/></div>
  },
  {
    path:"/About",
    element:<div className="App"><Header/><About/><Footer/></div>
  }
]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
