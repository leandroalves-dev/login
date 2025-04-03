import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (    

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App
