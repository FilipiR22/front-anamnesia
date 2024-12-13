function Title({ text_h1, children }) {
    return (
        <div className="title">
            <h1 className="text-2xl text-center mb-2 text-gray-900 font-medium">{text_h1}</h1>
            <p className="text-center text-14-size text-gray-400">{children}</p>
        </div>
    );
}

export default Title;