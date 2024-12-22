import ButtonSidebar from "./ButtonSidebar";

function Sidebar({buttonsData}){
    return(
        <aside className="pb-12 pt-16 pl-20 flex flex-col border">
            {buttonsData.map((button, index) => (
                <ButtonSidebar
                    key={index}
                    iconButton={<img src={button.icon} alt={`Ícone da página ${button.text}`} />}
                    weight={button.weight}
                    textButton={button.text}
                />
            ))}
        </aside>
    );
};

export default Sidebar;