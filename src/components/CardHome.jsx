import iconClasse from '../assets/icon_card_class.svg';
import BtnPrimary from './BtnPrimary';

function CardHome({imgUser, titleCard, btnText}){
    return(
        <div className="cardDashboard flex flex-col gap-2 w-300">
            <div className="cardDashboard-content flex flex-col">
                <div className="cardDashboard-text flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
                    <img src={iconClasse} alt='Icon de adição de classe' className='w-6 h-6'/>
                    <p className='text-14-size font-semibold text-gray-700 overflow-hidden'>{titleCard}</p>
                </div>
                <img src={imgUser} className='w-12 h-12 imgUser translate-y-menos-50% self-end rounded-full'/>
            </div>
            <BtnPrimary>
                {btnText}
            </BtnPrimary>
        </div>
    );
};

export default CardHome;