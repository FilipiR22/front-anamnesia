import logo_awe from '../assets/logo_anamnesia.svg';
import { Link } from 'react-router-dom';
import imgUser from '../assets/img_user_aluno.png';

function NavForm() {
    return (
        <header className="border-b border-gray-100">
            <div className="container mx-auto py-6 flex justify-between items-center">
                <img src={logo_awe} alt="Imagem da Logo do Anamnesia" />
                <nav className='flex gap-4'>
                    <a href="/home">Home</a>
                    <a href="">Configurações</a>
                </nav>
                <img src={imgUser} alt="" className='w-12 h-12 rounded-full'/>
            </div>
        </header>
    );
}

export default NavForm;