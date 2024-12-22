import logo_awe from '../assets/logo_anamnesia.svg';
import { Link } from 'react-router-dom';

function Header({NewLeftContent, rightContent, classAdd}) {
    return (
        <header className="border-b border-gray-100">
            <div className={`container mx-auto py-6 flex justify-between items-center ${classAdd}`}>
                {NewLeftContent||<img src={logo_awe} alt="Imagem da Logo do Anamnesia" />}
                {rightContent||<Link to='/'>Home</Link>}
            </div>
        </header>
    );
}

export default Header;