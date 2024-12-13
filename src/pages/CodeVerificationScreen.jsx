import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import Title from "../components/Title";
import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";

function CodeVerificationScreen(){
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center flex-1 mt-104">
                    <div className="content-408 w-full max-w-md flex flex-col gap-12">
                        <Title text_h1="Dá uma olhadinha no seu e-mail!">
                            Acabamos de enviar um código para você. Só conferir e já era! 😉
                        </Title>
                        <div className="message">
                            <div className="flex gap-2 rounded-lg p-3 border-none bg-gray-100">
                                <FontAwesomeIcon icon={faCircleExclamation} className="text-yellow-600 text-3xl" />
                                <p>Enviamos um código para o e-mail <strong>e-mail</strong>. Por favor, acesse sua caixa de e-mail para obter o código.</p>
                            </div>
                        </div>
                        <BtnPrimary>
                            continuar <FontAwesomeIcon icon={faRightLong} />
                        </BtnPrimary>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default CodeVerificationScreen;