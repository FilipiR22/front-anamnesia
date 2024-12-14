import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import InputPrimary from "../components/InputPrimary";
import BtnPrimary from "../components/BtnPrimary";
import Title from "../components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

function PasswordRecoveryScreen() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center flex-1 mt-104">
                    <div className="content-408 w-full max-w-md flex flex-col gap-12">
                        <Title text_h1="Bora recuperar sua conta?">
                            Insira seu e-mail cadastrado para recuperar sua senha.
                        </Title>
                        <form action="" className="flex flex-col gap-3">
                            <InputPrimary text_label='Primeiro, insira o seu e-mail' placeholder="exemple@exemple.com" id="endereco_email" type='email' />
                            <p className="already-exists text-14-size">Já tem alguma conta? <Link to={'/Login'} className="text-blue-500 underline">Fazer Login</Link></p>
                            <BtnPrimary>
                                Próximo <FontAwesomeIcon icon={faRightLong} />
                            </BtnPrimary>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default PasswordRecoveryScreen;