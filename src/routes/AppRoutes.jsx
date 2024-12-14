import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import EmailInput from '../pages/EmailInputScreen';
import Home from '../pages/Home';
import CodeVerificationScreen from '../pages/CodeVerificationScreen';
import VerificationCodeSend from '../pages/VerificationCodeSend';
import PersonalDataSreen from '../pages/PersonalDataSreen';
import ResgistrationSucessScreen from '../pages/ResgistrationSucessScreen';
import PasswordCreationScreen from '../pages/PasswordCreationScreeen';
import PasswordRecoveryScreen from '../pages/PasswordRecoveryScreen';
import RecoveryLinkSend from '../pages/RecoveryLinkSend';

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
                <Route path='/registration-sucess' element={<ResgistrationSucessScreen/>}/>
                <Route path='/password-creation' element={<PasswordCreationScreen/>}/>
                <Route path='/password-recovery' element={<PasswordRecoveryScreen/>}/>
                <Route path='/link-recovery' element={<RecoveryLinkSend/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
