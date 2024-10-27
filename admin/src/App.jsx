
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Orders from './pages/Orders/Order'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <hr />
    <div className='app-content'>
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add/>}/>
        <Route path="/order" element={<Orders/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
