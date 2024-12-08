import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="d-flex flex-column justify-content-between root-container">
                <Header />
                <main className="row justify-content-center align-items-center text-center d-flex gap-5" style={{ height: '100', width: '100%' }}>
                    <Link to="/login" className="text-decoration-none">Login</Link>
                    <Link to="/email" className="text-decoration-none">Email Input</Link>
                    <Link to="/verification-code" className="text-decoration-none">/verification-code</Link>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Login;