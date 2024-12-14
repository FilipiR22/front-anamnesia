import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import running from "../assets/running.svg"; 

function ResgistrationSucessScreen() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <Header />
            <main className="flex justify-center mt-104 flex-1">
                <div className="content-408 w-full max-w-md flex flex-col gap-12">
                    <Title text_h1="Parabéns!">
                    Sua conta foi criada com sucesso! Agora é só fazer login e aproveitar tudo o que preparamos para você. 😎
                    </Title>
                    <form action="" className="flex flex-col gap-6">
                        <img src={running} alt="Imagem de um bneco correndo" className="mx-auto"/>
                        <BtnPrimary className='mx-auto'>
                            Fazer Login
                        </BtnPrimary>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ResgistrationSucessScreen;