import { Link } from "react-router-dom";
import NavForm from "../components/NavForm";
import InputPrimary from "../components/InputPrimary";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import imgAddClass from '../assets/icon_book_add.svg';
import imgUser from '../assets/img_user_aluno.png';
import BtnPrimary from "../components/BtnPrimary";

function Settings({ }) {
    return (
        <div className="flex  root-container">
            <Sidebar buttonsData={[{
                icon: '',
                text: 'Conta',
                weight: '900',
            },
            {
                icon: '',
                text: 'Senha',
                weight: '200'
            }]} />
            <div className="flex flex-col justify-between min-h-screen flex-1">
                <NavForm rightContent={<Link to="/" className="p-3 bg-gray-100 rounded-full"><img src={imgAddClass} alt="icone de adição de classe" /></Link>} />
                <main className="flex flex-1 flex-col container mx-auto gap-12 mt-12 ms-6 max-w-2xl">
                    <div className="title flex flex-col gap-2">
                        <h1 className="text-gray-900 text-2xl font-medium">Conta</h1>
                        <p className="text-14-size text-gray-300">Aqui você encontra e edita suas informações pessoais.</p>
                    </div>
                    <div className="acount border rounded-lg border-gray-100 p-6 flex justify-between">
                        <div className="content-left flex gap-5 items-center">
                            <img src={imgUser} alt="img user" className="w-12 h-12 border flex rounded-full" />
                            <div className="info-user">

                                <p className="name-user text-gray-900 font-semibold">
                                    Clayton Rennan
                                </p>
                                <p className="address-user text-gray-300 text-14-size">
                                    r.clayton@escolar.ifrn.edu.br
                                </p>
                            </div>
                        </div>
                        <BtnPrimary>Editar foto</BtnPrimary>
                    </div>
                    <form className="flex flex-col gap-6">
                        <h2>Dados pessoais</h2>
                        <InputPrimary type='text' placeholder='Clayton Rennan de Araújo dos Santos' text_label='Nome completo' id='name_user' />
                        <InputPrimary text_label='E-mail' placeholder='r.clayton@escolar.ifrn.edu.br' type='email' id='emailUser' />
                        <div className="flex gap-6">
                            <InputPrimary type='text' placeholder='22/12/2006' id='data_birth' text_label='Data de nascimento' />
                            <InputPrimary type='text' placeholder='Zona Norte' id='campusUser' text_label='Campus' />
                        </div>
                        <BtnPrimary>Salvar</BtnPrimary>
                    </form>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Settings;