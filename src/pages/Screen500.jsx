
import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleError from "../components/TitleError";
import imgError from '../assets/img-error.svg';
import BtnPrimary from "../components/BtnPrimary";

export default function Screen500() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <Header />
            <main className="flex justify-center flex-1 mt-104">
                <div className="content-408 w-full max-w-md flex flex-col gap-12">
                    <TitleError titleError="500" subTitleError="Ops... Ocorreu um problema no servidor. Por favor, entre em contato com o administrador." />
                    <form action="" className="flex flex-col gap-6">
                        <img src={imgError} alt="" />
                        <BtnPrimary className="m-auto">
                            Ir para login
                        </BtnPrimary>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}