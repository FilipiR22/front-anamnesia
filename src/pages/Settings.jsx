import { Link } from "react-router-dom";
import NavForm from "../components/NavForm";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import imgAddClass from '../assets/icon_book_add.svg';
import imgUser from '../assets/img_user_aluno.png';

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
                    <div className="acount border rounded-lg border-gray-100 p-6">
                        <img src={imgUser} alt="img user" className="w-12 h-12 border flex"/>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Settings;