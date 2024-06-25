import '../styles/Button.css'

const Button = (props) => {
    return(
        <div className="button-field">
            <button>
                {props.text}
            </button>
        </div>
    )
}


export default Button;