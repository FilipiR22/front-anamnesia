function InputPrimary({ text_label, placeholder, id, type }) {
    return (
        <fieldset className="flex flex-col">
            <label htmlFor={id} className="mb-2 text-sm font-medium">
                <span>{text_label}</span>
            </label>
            <input 
                type={type} 
                placeholder={placeholder} 
                id={id} 
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </fieldset>
    );
}

export default InputPrimary;
