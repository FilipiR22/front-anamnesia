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
import PasswordResetScreen from '../pages/PasswordResetScreen';
import PasswordResetSuccessScreen from '../pages/PasswordResetSuccessScreen';
import Screen404 from '../pages/Screen404';
import Screen500 from '../pages/Screen500';

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
                <Route path='/password-reset' element={<PasswordResetScreen/>}/>
                <Route path='/password-reset-success' element={<PasswordResetSuccessScreen/>}/>
                <Route path='/link-recovery' element={<RecoveryLinkSend/>}/>
                <Route path='/404' element={<Screen404/>}/>
                <Route path='/500' element={<Screen500/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
