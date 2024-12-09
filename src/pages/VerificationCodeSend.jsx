import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnPrimary from "../components/BtnPrimary";
import Title from "../components/Title";
import img_verification_code from "../assets/img_verification_code.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function VerificationCodeSend() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center items-center flex-1 w-full">
                    <div className="content w-full max-w-md flex flex-col gap-4">
                        <Title text_h1="Verifique o seu e-mail">
                            um código foi enviado
                        </Title>
                        <div className="message">
                            <img src={img_verification_code} alt="Imagem do código de verificação" className="mx-auto" />
                            <div className="flex gap-2 rounded-lg p-3 border border-yellow-400 bg-yellow-50">
                                <FontAwesomeIcon icon={faCircleExclamation} className="text-yellow-600 text-3xl" />
                                <p>Enviamos um código para o e-mail <strong>e-mail</strong>. Por favor, acesse sua caixa de e-mail para obter o código.</p>
                            </div>
                        </div>
                        <BtnPrimary>
                            Entrar
                        </BtnPrimary>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default VerificationCodeSend;