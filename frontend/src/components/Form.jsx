import { useState } from 'react';
import '../styles/Form.css';
import Button from './Button.jsx';
import InputField from './InputField.jsx';
import axios from 'axios';

const Formulario = () => {
    const [error, setError] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8080/');
            setError(response.data.message); // Exemplo de como definir uma mensagem de erro
            console.log(response.data);
        } catch (err) {
            setError('Erro ao fazer a requisição'); // Definindo uma mensagem de erro no estado
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleClick}>
                <h1 className="title">Faça login.</h1>
                <p className="subtitle">faça a diferença.</p>
                <InputField label="email" type="text" placeholder="xxxx@xxxxx.com" name="email"/>
                <InputField label="senha" type="password" placeholder="xxxx!@#x293" name="password"/>
                <Button text="Entrar na conta"/>
                <div className="sup">
                    <span><a href='/cadastro'>não tenho uma conta</a></span>
                    <span className="barra"></span>
                    <span><a href="/recuperar">esqueci a senha</a></span>
                </div>
                <div className="warnings">
                    <p className="error">{error}</p>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
