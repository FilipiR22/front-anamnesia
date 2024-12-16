import iconError from '../assets/icon-web-error.svg';
export default function TitleError({ titleError, subTitleError }) {
    return (
        <div className="error_mensage flex flex-col gap-2 font-semibold text-gray-900">
            <p className='flex gap-2'>
                <span>
                    <img src={iconError} alt="ícone de erro" />
                </span> <span>{titleError}</span>
            </p>
            <p>{subTitleError}</p>
        </div>
    );
};