import logo_awe from '../assets/logo_awe.svg';

function Footer() {
    return (
        <footer className="py-6 border-t border-gray-100" style={{ height: 'min-content' }}>
            <img src={logo_awe} alt="Imagem do Logotipo da Awe" className="mx-auto block" />
        </footer>
    );
}

export default Footer;
