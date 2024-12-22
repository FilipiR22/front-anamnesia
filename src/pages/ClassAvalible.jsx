import Footer from "../components/Footer";
import imgLogoExtenso from '../assets/logo_extenso.png'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import iconHome from '../assets/iconHome.svg';
import iconAvaliacoes from '../assets/iconAvaliacoes.svg';
import iconParticipantes from '../assets/iconParticipantes.svg';
import imgUser from '../assets/img_user_aluno.png';

function ClassAvalible() {
    return (
        <div className="flex  root-container">
            <Sidebar buttonsData={[{
                icon:iconHome,
                text:'Home',
                weight:'200',
            },
            {
                icon:iconAvaliacoes,
                text:'Avaliações',
                weight:'900'
            },
            {
                icon:iconParticipantes,
                text:'Participantes',
                weight:'200'
            }]}/>
            <div className="flex flex-col justify-between min-h-screen flex-1">
                <Header classAdd='px-6' NewLeftContent={<img src={imgLogoExtenso} alt="" />} rightContent={<img src={imgUser} alt="" className="w-12 h-12 rounded-full" />}/>
                <main className="flex flex-1 flex-col container mx-auto gap-12 mt-12">
                    <p>contexto</p>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default ClassAvalible;