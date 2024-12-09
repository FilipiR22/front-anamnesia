function Title({ text_h1, children }) {
    return (
        <div className="title">
            <h1 className="text-2xl text-center mb-2 font-semibold">{text_h1}</h1>
            <p className="text-center">{children}</p>
        </div>
    );
}

export default Title;