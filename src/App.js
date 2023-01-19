
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//pages
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserDetail from "./pages/UserDetail"
import Contact from "./pages/Contact"
import Menu from './components/Menu';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:id' element={<UserDetail />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
        <Route path='auth' element={<AuthLayout/>}>
          <Route index element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
