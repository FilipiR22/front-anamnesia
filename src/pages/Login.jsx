import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import InputPrimary from "../components/InputPrimary";
import BtnPrimary from "../components/BtnPrimary";
import Title from "../components/Title";

function Login() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center flex-1 mt-104">
                    <div className="content w-full max-w-md flex flex-col gap-5">
                        <Title text_h1="Olá novamente!">
                            Ainda não tem uma conta? <Link to="/" className="text-blue-500 underline">criar conta</Link>
                        </Title>
                        <form action="" className="flex flex-col gap-2">
                            <InputPrimary text_label="O seu endereço de e-mail" placeholder="exemple@exemple.com" id="endereco_email" type="email" />
                            <InputPrimary text_label="A sua senha" placeholder="exemple" id="endereco_senha" type="password" />
                            <p className="text-sm">
                                Esqueceu sua senha? <Link to="/" className="text-blue-500 underline">recuperar senha</Link>
                            </p>
                            <BtnPrimary>
                                Entrar
                            </BtnPrimary>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Login;