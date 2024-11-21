function InputPrimary({ text_label, placeholder, id, type }) {
    return (
        <fieldset>
            <label htmlFor={id} className="mb-2 form-label"><span>{text_label}</span></label>
            <input type={type} placeholder={placeholder} id={id} className="form-control p-3" />
        </fieldset>
    )
}

export default InputPrimary