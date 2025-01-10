import imgUser from "../assets/user.png";
function ClassParticipantsCards({name}) {
    return (
        <div className="cardParticipant flex gap-6 border p-2 rounded-xl items-center text-gray-900 font-semibold">
            <img src={imgUser} />
            <span>{name}</span>
        </div>
    );
}

export default ClassParticipantsCards;
