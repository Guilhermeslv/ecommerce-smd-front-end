import "./styles.css"

export function Login(){
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
                    <span>faça login</span>
                </div>                 
            </div>
            <div className="card card-shadow login-page-form">
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
            </div>
        </div>
    )
}