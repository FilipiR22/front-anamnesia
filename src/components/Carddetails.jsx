function Carddetails({url_icon, title_card, description_card}) {
    return(
        <div className="card-details p-6 border-t-8 border rounded-xl">
            <div><img src={url_icon} alt="" /></div>
            <p className="font-semibold">{title_card}</p>
            <p className="text-14-size line-clamp-2">{description_card}</p>
        </div>
    );
};

export default Carddetails;