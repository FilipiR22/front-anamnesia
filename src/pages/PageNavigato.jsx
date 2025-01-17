import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function PageNavigato() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center items-center text-center flex-wrap gap-12">
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
                    <Link to="/password-reset-success" className="text-blue-500 underline">/password-reset-success</Link>
                    <Link to="/404" className="text-blue-500 underline">/404</Link>
                    <Link to="/500" className="text-blue-500 underline">/500</Link>
                    <Link to="/home" className="text-blue-500 underline">Home</Link>
                    <Link to="/home-outclass" className="text-blue-500 underline">Home-outclass</Link>
                    <Link to="/class-avalible" className="text-blue-500 underline">ClassAvalible</Link>
                    <Link to="/class-participants" className="text-blue-500 underline">ClassParticipantes</Link>
                    <Link to="/settings" className="text-blue-500 underline">settings</Link>
                    <Link to="/settings-password" className="text-blue-500 underline">settings password</Link>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default PageNavigato;