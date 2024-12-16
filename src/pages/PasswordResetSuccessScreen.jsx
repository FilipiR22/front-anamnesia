import Header from "../components/Header";
import Footer from "../components/Footer";
import imgSuccess from "../assets/img-success-reset-password.svg";
import BtnPrimary from "../components/BtnPrimary";
import Title from "../components/Title";

function PasswordResetSuccessScreen() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen root-container">
                <Header />
                <main className="flex justify-center flex-1 mt-104">
                    <div className="content-408 w-full max-w-md flex flex-col gap-12">
                        <Title text_h1="🎉 Parabéns!">
                            Sua senha foi redefinida com sucesso! Agora é só fazer login e curtir a experiência!
                        </Title>
                        <form action="" className="flex flex-col gap-6">
                            <img src={imgSuccess} alt="" />
                            <BtnPrimary className="m-auto">
                                Fazer Login
                            </BtnPrimary>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default PasswordResetSuccessScreen;