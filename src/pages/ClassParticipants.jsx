import Footer from "../components/Footer";
import imgLogoExtenso from '../assets/logo_extenso.png'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import iconHome from '../assets/iconHome.svg';
import iconAvaliacoes from '../assets/iconAvaliacoes.svg';
import iconParticipantes from '../assets/iconParticipantsThick.svg';
import imgUser from '../assets/img_user_aluno.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import crown from '../assets/crown.svg';
import ClassParticipantsCards from "../components/ClassParticipantsCards";


function ClassParticipants() {
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
                weight:'200'
            },
            {
                icon:iconParticipantes,
                text:'Participantes',
                weight:'900'
            }]}/>
            <div className="flex flex-col justify-between min-h-screen flex-1">
                <Header classAdd='px-6' NewLeftContent={<img src={imgLogoExtenso} alt="" />} rightContent={<img src={imgUser} alt="" className="w-12 h-12 rounded-full" />}/>
                <main className="flex flex-1 flex-col container mx-auto gap-12 mt-12">
                    <div className="max-w-md mx-auto w-full flex flex-col gap-12">
                        <div className="info p-3 bg-gray-100 rounded-lg flex gap-20 items-center border">
                            <p>Primeira turma 2024 - campus natal zona norte</p>
                            <FontAwesomeIcon icon={faDoorOpen} className="text-error-dark text-2xl"/>
                        </div>
                        <div className="teachers flex flex-col gap-4">
                            <p className="flex gap-2 font-semibold text-gray-900"><img src={crown} alt="" /> <span>PROFESSORES</span></p>
                            <ClassParticipantsCards name='Cesimar Xavier'/>
                        </div>
                        <div className="students flex flex-col gap-4">
                            <p className="flex gap-2 font-semibold text-gray-900"><span>ALUNOS</span></p>
                            <ClassParticipantsCards name='Clayton Rennan'/>
                            <ClassParticipantsCards name='Alexsander Bastos'/>
                            <ClassParticipantsCards name='Douglas Pierry'/>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default ClassParticipants;