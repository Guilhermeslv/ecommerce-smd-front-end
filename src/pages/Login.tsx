import "../styles/login.css"

export function Login(){
    return (
        <div id="login">
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
                    <span>faça login</span>
                </div>                 
            </div>
            <div className="card card-shadow login-page-form">
                
            </div>
        </div>
    )
}