import '../styles/InputField.css'

const InputField = (props) => {
    return(
        <>
            <label className="label" htmlFor={props.name}>{props.label}</label>
            <input
            className='input' 
            type={props.type}
            name={props.name} 
            placeholder={props.placeholder}
            />
        </>
    )
}

export default InputField;