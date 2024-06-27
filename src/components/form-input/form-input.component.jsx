import './form-input.styles.scss'

function FormInput({ label, ...otherProps }) {
    return (
        <div className='form-input'>
            <input className='form-input-field' {...otherProps} />
            {label && <label className={`${otherProps.value.length > 0 ? `shrink` : ``} form-input-label`}>{label}</label>}
        </div >
    )
}

export default FormInput