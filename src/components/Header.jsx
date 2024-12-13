import logo_awe from '../assets/logo_anamnesia.svg';

function Header() {
    return (
        <header className="border-b border-gray-100">
            <div className="container mx-auto py-6">
                <img src={logo_awe} alt="Imagem da Logo do Anamnesia" />
            </div>
        </header>
    );
}

export default Header;