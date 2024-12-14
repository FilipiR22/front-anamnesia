function BtnSecondary({ children, className = ""}) {
    return (
        <button
            className={`font-semibold px-6 py-2 ml-auto flex items-center gap-2 text-gray-300 border border-gray-300 rounded-3xl hover:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
}

export default BtnSecondary;