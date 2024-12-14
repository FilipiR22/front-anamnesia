import Header from "../components/Header";
import Title from "../components/Title";
import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";
import InputPrimary from "../components/InputPrimary";

function CodeVerificationScreen() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <Header />
            <main className="flex justify-center mt-104 flex-1">
                <div className="content-408 w-full max-w-md flex flex-col gap-12">
                    <Title text_h1="Ei! 👋">
                        Dá uma olhada no seu e-mail <strong>e-mail</strong> e coloca o código aqui para continuar. 😎
                    </Title>
                    <form action="" className="flex flex-col gap-4">
                        <InputPrimary text_label='Insira o código de verificação' placeholder="000-000" id="code_verification" type='text' />
                        <BtnPrimary>
                            Verificar
                        </BtnPrimary>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CodeVerificationScreen;