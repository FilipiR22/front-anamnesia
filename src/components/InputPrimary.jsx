function InputPrimary({ text_label, placeholder, id, type }) {
    return (
        <fieldset className="flex flex-col w-full">
            <label htmlFor={id} className="mb-2 text-sm font-medium">
                <span className="text-gray-400">{text_label}</span>
            </label>
            <input 
                type={type} 
                placeholder={placeholder} 
                id={id} 
                className="border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4 text-14-size text-gray-200 placeholder:text-gray-200"
            />
        </fieldset>
    );
}

export default InputPrimary;
