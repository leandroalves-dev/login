import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import Login from './components/Login';
import Inicio from './components/Inicio';

function App() {
    return (    

        <BrowserRouter basename="/projects/login">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App
