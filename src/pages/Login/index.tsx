import { useState } from "react"
import "./styles.css"

function CadForm(){
    return (
            <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Endereço</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user">Login</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" />
                    </div>
                    <div className="form-group">
                        <button className="btn button-primary" id="cad-cliente">Cadastrar</button>
                    </div>
                </form>
    )
}
function LoginForm(){
    return (
        <form action="" method="post">
            <div className="form-group">
                <label htmlFor="user">Login</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" />
            </div>
            <div className="form-group">
                <button className="btn button-primary" id="cad-cliente">Cadastrar</button>
            </div>
        </form>
    )
}

export function Login(){

    const [isLoginForm, setIsLoginForm] = useState(false);

    function handleChangeForm(){
        setIsLoginForm(!isLoginForm)
    }

    return (
        <div id="login" className="container">
            <div className="login-page-text-wrapper">
                <div className="login-page-text">
                    <span>
                        Cadastre-se na plataforma para ter acesso a milhares de produtos
                    </span>
                </div>
                
                <div className="login-page-text-or">
                    <hr />
                        <span>ou</span>
                    <hr />
                </div>

                <div className="login-page-text-login">
                    <span onClick={handleChangeForm}>{isLoginForm? 'cadastre-se': 'faça login'}</span>
                </div>                 
            </div>
            <div className="card card-shadow login-page-form">
                {isLoginForm ? <LoginForm />: <CadForm />}
            </div>
        </div>
    )
}