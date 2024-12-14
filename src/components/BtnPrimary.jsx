function BtnPrimary({ children, className = ""}) {
    return (
        <button
            className={`font-semibold px-6 py-2 ml-auto flex items-center gap-2 bg-primary-main text-white border border-transparent rounded-3xl hover:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
}

export default BtnPrimary;