import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import EmailInput from '../pages/EmailInputScreen';
import Home from '../pages/Home';
import CodeVerificationScreen from '../pages/CodeVerificationScreen';
import VerificationCodeSend from '../pages/VerificationCodeSend';
import PersonalDataSreen from '../pages/PersonalDataSreen';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/email" element={<EmailInput />} />
                <Route path="/verification-code-send" element={<VerificationCodeSend/>} />
                <Route path="/email-verification" element={<CodeVerificationScreen />}/>
                <Route path='/personal-data' element={<PersonalDataSreen/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
