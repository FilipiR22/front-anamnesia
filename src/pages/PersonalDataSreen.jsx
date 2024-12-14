import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputPrimary from "../components/InputPrimary";
import Title from "../components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

function PersonalDataSreen() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <Header />
            <main className="flex justify-center mt-104 flex-1">
                <div className="content-408 w-full max-w-md flex flex-col gap-12">
                    <Title text_h1="Vamos te conhecer melhor 😊">
                        Preencha seus dados para deixar a experiência mais personalizada!
                    </Title>
                    <form action="" className="grid gap-4">
                        <InputPrimary text_label='Nome completo' placeholder="example" id="name_user" type='text' />
                        <div className="box-2 flex gap-4">
                            <InputPrimary text_label='Campus' placeholder="example" id="campus_user" type='text' />
                            <InputPrimary text_label='Data de nascimento' placeholder="00/00/0000" id="name_user" type='text' />
                        </div>
                        <BtnPrimary>
                            Próximo <FontAwesomeIcon icon={faRightLong} />
                        </BtnPrimary>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PersonalDataSreen;