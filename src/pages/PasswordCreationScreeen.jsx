import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputPrimary from "../components/InputPrimary";
import Title from "../components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

function PasswordCreationScreen() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <Header />
            <main className="flex justify-center mt-104 flex-1">
                <div className="content-408 w-full max-w-md flex flex-col gap-12">
                    <Title text_h1="Pronto para finalizar?">
                        Agora, crie uma senha poderosa e única para fechar com chave de ouro! 🔑
                    </Title>
                    <form action="" className="grid gap-4">
                        <InputPrimary text_label='Senha' placeholder="*********" id="name_user" type='password' />
                        <BtnPrimary>
                            Finalizar Cadastro
                        </BtnPrimary>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PasswordCreationScreen;