import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import InputPrimary from "../components/InputPrimary";
import BtnPrimary from "../components/BtnPrimary";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

function PasswordResetScreen() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center flex-1 mt-104">
                    <div className="content-408 w-full max-w-md flex flex-col gap-12">
                        <Title text_h1="🔑 Redefinir senha">
                            Vamos te ajudar a recuperar o acesso à sua conta!
                        </Title>
                        <form action="" className="flex flex-col gap-3">
                            <InputPrimary text_label='Crie sua senha' placeholder="exemple" id="endereco_email" type='email' />
                            <div className="requirements text-xs flex flex-col gap-1">
                                <p className="requirement flex gap-2">
                                    <span className="requirement-text">Comprimento mínimo: 8 caracteres.</span><span className="text-error-dark"><FontAwesomeIcon icon={faXmark} /></span>
                                </p >
                                <p className="requirement flex gap-2">
                                    <span className="requirement-text line-through">Números: Pelo menos 1 número.</span> <span className="text-success-dark"> <FontAwesomeIcon icon={faCheck} /> </span>
                                </p >
                                <p className="requirement flex gap-2">
                                    <span className="requirement-text line-through">Letras: Pelo menos 2 letras (maiúsculas ou minúsculas).</span> <span className="text-success-dark"> <FontAwesomeIcon icon={faCheck} /> </span>
                                </p >
                            </div>
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

export default PasswordResetScreen;