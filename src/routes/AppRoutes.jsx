import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import EmailInput from '../pages/EmailInputScreen';
import Home from '../pages/Home';
import VerificationCodeSend from '../pages/VerificationCodeSend';
import CodeVerificationScreen from '../pages/CodeVerificationScreen';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/email" element={<EmailInput />} />
                <Route path="/verification-code-send" element={<VerificationCodeSend />} />
                <Route path="/email-verification" element={<CodeVerificationScreen />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
