import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './page/home/home.js';
import LoginFirst from './page/loginfirst/loginfirst.js';
import LoginSecond from './page/loginsecond/loginsecond.js';
import Register from './page/register/register.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App"><Header/><Home/><Footer/></div>,
  },
  {
    path: "/LoginF",
    element: <div className="App"><Header/><LoginFirst/><Footer/></div>,
  },
  {
    path: "/Login",
    element: <div className="App"><Header/><LoginSecond/><Footer/></div>,
  },
  {
    path: "/Register",
    element: <div className="App"><Header/><Register/><Footer/></div>,
  },
]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
