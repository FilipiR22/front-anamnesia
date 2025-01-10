import BtnPrimary from "../components/BtnPrimary";
import Carddetails from "./Carddetails";
import icon1 from '../assets/icon-details-1.svg';
import icon2 from '../assets/icon-details-2.svg';
import icon3 from '../assets/icon-details-3.svg';

function ShowDetails() {
    return (
        <div className="max-w-md flex flex-col gap-18-px mx-auto">
            <p className="flex items-center"><span>DETALHES DAS ANÁLISES</span> <BtnPrimary className="text-14-size">Iniciar análise</BtnPrimary></p>

            <div className="box-details flex flex-col gap-18-px">
                <Carddetails url_icon={icon1} title_card="Ambiente, Atitudes e Conhecimento" description_card="Você vai se autoavaliar em uma escala de Excelente a Insuficiente, e no final somaremos todas as notas para revelar seu perfil empreendedor. Boa sorte!" />
                <Carddetails url_icon={icon2} title_card="Autoavaliação das habilidades empreendedoras" description_card="Vamos avaliar suas habilidades empreendedoras agora. Para cada tópico, escolha a opção que melhor reflete seu nível de habilidade, variando de (A) não tenho experiência até (C) sou bastante experiente. No final, somaremos suas escolhas para revelar seu perfil empreendedor. Boa sorte!" />
                <Carddetails url_icon={icon3} title_card="Você é criativo(a)?" description_card="Nesta atividade, você realizará uma autoavaliação que contém uma série de perguntas, divididas em dois grupos: perguntas de alta e baixa qualidade. As perguntas ímpares pertencem a um grupo, enquanto as pares pertencem a outro." />
            </div>
        </div>
    );
}

export default ShowDetails;