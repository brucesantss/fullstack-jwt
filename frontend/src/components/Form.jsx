import '../styles/Form.css'
import Button from './Button.jsx';
import InputField from './InputField.jsx';

const Formulario = () => {
    return(
        <body>
            <form className="form">
                <h1 className='title'>Faça login.</h1>
                <p className='subtitle'>faça a diferença.</p>

                
                    <InputField label="email" type="text" placeholder="xxxx@xxxxx.com" name="email"/>
                    <InputField label="senha" type="password" placeholder="xxxx!@#x293" name="password"/>
                

                <Button text="Entrar na conta"/>
                

                <div className="sup">
                    <span><a href='/cadastro'>não tenho uma conta</a></span>
                    <span className="barra"></span>
                    <span><a href="/recuperar">esqueci a senha</a></span>
                </div>
            </form>
        </body>
    )
}

export default Formulario;