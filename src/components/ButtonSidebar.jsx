import { Link } from "react-router-dom";

function ButtonSidebar({weight, iconButton, textButton}){
    return <Link to='/' className={`text-gray-${weight} min-w-28 py-3 flex gap-2.5 pr-5 ${weight=='900'?'border-r-2 border-gray-900':''}`}> <span className="w-6 h-6">{iconButton}</span> <span className="">{textButton}</span> </Link>;
};

export default ButtonSidebar;