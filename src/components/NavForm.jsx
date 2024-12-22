import logo_awe from '../assets/logo_anamnesia.svg';
import imgUser from '../assets/img_user_aluno.png';

function NavForm({ navCentralContent, rightContent }) {
    return (
        <header className="border-b border-gray-100">
            <div className="container mx-auto py-6 flex justify-between items-center px-3">
                <img src={logo_awe} alt="Imagem da Logo do Anamnesia" />
                <nav className="flex gap-4 nav-central">
                    {navCentralContent || (
                        <>
                            <a href="/home">Home</a>
                            <a href="">Configurações</a>
                        </>
                    )}
                </nav>
                <div className="flex items-center gap-4">
                    {rightContent}
                    <img src={imgUser} alt="" className="w-12 h-12 rounded-full" />
                </div>
            </div>
        </header>
    );
}

export default NavForm;