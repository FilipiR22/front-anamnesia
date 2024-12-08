import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import EmailInput from '../pages/EmailInput';
import Home from '../pages/Home';
import VerificationCodeSend from '../pages/VerificationCodeSend';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/email" element={<EmailInput />} />
                <Route path="/verification-code" element={<VerificationCodeSend />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
