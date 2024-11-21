import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnPrimary from "../components/BtnPrimary";
import Title from "../components/Title";
import img_verification_code from "../assets/img_verification_code.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import '../styles/message.css';

function VerificationCodeSend() {
    return (
        <>
            <div className="d-flex flex-column justify-content-between root-container">
                <Header />
                <main className="row justify-content-center align-items-center" style={{ height: '100', width: '100%' }}>
                    <div className="content col-4 d-flex flex-column gap-4">
                        <Title text_h1="Verifique o seu e-mail">
                            um código foi enviado
                        </Title>
                        <div className="message">
                            <img src={img_verification_code} alt={img_verification_code} className="d-block ms-auto" />
                            <div className="content-message d-flex gap-2 rounded p-3">
                                <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#f3961c", fontSize:"2rem" }} />
                                <p>Enviamos um código para o e-mail <strong>
                                    e-mail
                                </strong> Por favor, acesse sua caixa de e-mail para obter o código.</p>
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
    )
}

export default VerificationCodeSend;