import { Link } from "react-router-dom";
import NavForm from "../components/NavForm";
import InputPrimary from "../components/InputPrimary";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import imgAddClass from '../assets/icon_book_add.svg';
import BtnPrimary from "../components/BtnPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

function SettingsPassword() {
    return (
        <div className="flex  root-container">
            <Sidebar buttonsData={[{
                icon: '',
                text: 'Conta',
                weight: '200',
            },
            {
                icon: '',
                text: 'Senha',
                weight: '900'
            }]} />
            <div className="flex flex-col justify-between min-h-screen flex-1">
                <NavForm rightContent={<Link to="/" className="p-3 bg-gray-100 rounded-full"><img src={imgAddClass} alt="icone de adição de classe" /></Link>} />
                <main className="flex flex-1 flex-col container mx-auto gap-12 mt-12 ms-6 max-w-2xl">
                    <div className="title flex flex-col gap-2">
                        <h1 className="text-gray-900 text-2xl font-medium">Senha</h1>
                        <p className="text-14-size text-gray-300">Aqui você pode editar sua senha atual.</p>
                    </div>
                    <div className="actual-password">
                        <InputPrimary text_label='Insira sua senha atual' type='password' placeholder='exemple' id='password' />
                    </div>
                    <form className="flex flex-col gap-6">
                        <h2 className="font-semibold text-gray-900">Nova senha</h2>
                        <InputPrimary text_label='Criar uma nova senha' type='password' placeholder='exemple' id='newPassword' />
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
                        <InputPrimary text_label='Repita a nova senha' type='password' placeholder='exemple' id='repeatNewPassword' />
                        <BtnPrimary>Salvar</BtnPrimary>
                    </form>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default SettingsPassword;
