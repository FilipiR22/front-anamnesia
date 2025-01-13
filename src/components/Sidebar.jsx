import ButtonSidebar from "./ButtonSidebar";

function Sidebar({ buttonsData }) {
    return (
        <aside className="pb-12 pt-16 pl-20 flex flex-col border">
            {buttonsData.map((button, index) => (
                <ButtonSidebar
                    key={index}
                    iconButton={button.icon ? <img src={button.icon} alt={`Ícone da página ${button.text}`} /> : null}
                    weight={button.weight}
                    textButton={button.text}
                />
            ))}
        </aside>
    );
};

export default Sidebar;
