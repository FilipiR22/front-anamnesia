import Footer from "../components/Footer";
import NavForm from "../components/NavForm";
import Title from "../components/Title";
import imgOutclass from '../assets/img_outclass.svg'
import BtnPrimary from "../components/BtnPrimary";
import { Link } from "react-router-dom";
import imgAddClass from '../assets/icon_book_add.svg';

function HomeOutclass() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <NavForm rightContent={<Link to="/" className="p-3 bg-gray-100 rounded-full"><img src={imgAddClass} alt="icone de adição de classe" /></Link>}/>
            <main className="flex flex-1 flex-col container mx-auto gap-12 mt-12">
                <Title text_h1='🚫 Sem turma ainda'>
                    Use o código para acessar sua turma e começar!
                </Title>
                <form action="" className="flex flex-col gap-6">
                    <img src={imgOutclass} alt="Imagem de um boneco sentado" className="mx-auto" />
                    <BtnPrimary className='mx-auto'>
                        Entrar em uma turma
                    </BtnPrimary>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default HomeOutclass;