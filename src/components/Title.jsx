function Title({ text_h1, children}) {
    return (
        <div className="title">
            <h1 className="fs-4 text-center mb-2">{text_h1}</h1>
            <p className="text-center">{children}</p>
        </div>
    );
}

export default Title