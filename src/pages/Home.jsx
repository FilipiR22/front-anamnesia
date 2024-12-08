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
                    <Link to="/verification-code" className="text-blue-500 underline">/verification-code</Link>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Login;