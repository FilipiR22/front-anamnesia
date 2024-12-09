function BtnPrimary({ children }) {
    return (
        <button className="font-semibold px-4 py-2 ml-auto flex items-center gap-2 bg-blue-500 text-white border border-transparent hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
            {children}
        </button>
    );
}

export default BtnPrimary;