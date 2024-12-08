import logo_awe from '../assets/logo_anamnesia.svg';
function Header() {
    return (
        <header className='border-bottom'>
            <div className="container py-4">
                <img src={logo_awe} alt="Imagem da Logo do Anamnesia" />
            </div>
        </header>
    );
}

export default Header;
