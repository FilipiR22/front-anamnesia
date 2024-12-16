import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center items-center text-center gap-5 flex-1">
                    <Link to="/login" className="text-blue-500 underline">Login</Link>
                    <Link to="/email" className="text-blue-500 underline">Email Input</Link>
                    <Link to="/verification-code-send" className="text-blue-500 underline">/verification-code</Link>
                    <Link to="/email-verification" className="text-blue-500 underline">/email-verification</Link>
                    <Link to="/personal-data" className="text-blue-500 underline">/personal-data</Link>
                    <Link to="/registration-sucess" className="text-blue-500 underline">/registration sucess</Link>
                    <Link to="/password-creation" className="text-blue-500 underline">/password-creation</Link>
                    <Link to="/password-recovery" className="text-blue-500 underline">/password-recovery</Link>
                    <Link to="/link-recovery" className="text-blue-500 underline">/RecoveryLinkSend</Link>
                    <Link to="/password-reset" className="text-blue-500 underline">/password-reset</Link>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Login;