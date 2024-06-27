import './form-input.styles.scss'

function FormInput({ label, inputOptions }) {
    return (
        <div className='form-input'>
            <input className='form-input-field' {...inputOptions} />
            {label && <label className={`${inputOptions.value.length > 0 ? `shrink` : ``} form-input-label`}>{label}</label>}
        </div>
    )
}

export default FormInput