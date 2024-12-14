import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import BtnSecondary from "../components/BtnSecondary";

function RecoveryLinkSend() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <Header />
            <main className="flex justify-center flex-1 mt-104">
                <div className="content-408 w-full max-w-md flex flex-col gap-12">
                    <Title text_h1="🚀 E-mail enviado! Confere aí!">
                        Acabamos de enviar um código para você. Só conferir e já era! 😉
                    </Title>
                    <div className="message">
                        <div className="flex gap-2 rounded-lg p-3 border-none bg-gray-100">
                            <FontAwesomeIcon icon={faCircleExclamation} className="text-yellow-600 text-3xl" />
                            <p>Acabamos de te enviar um e-mail com o link para recuperação. Dá uma olhada lá!</p>
                        </div>
                    </div>
                    <BtnSecondary>
                        Voltar para Login
                    </BtnSecondary>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default RecoveryLinkSend;