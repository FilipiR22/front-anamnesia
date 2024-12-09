import logo_awe from '../assets/logo_anamnesia.svg';

function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto py-4">
                <img src={logo_awe} alt="Imagem da Logo do Anamnesia" />
            </div>
        </header>
    );
}

export default Header;