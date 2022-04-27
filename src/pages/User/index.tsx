import { AiFillShopping, AiOutlineUser } from "react-icons/ai"
import { BiCart, BiLogOut } from "react-icons/bi"
import "./styles.css"
export function User(){
    return (
        <div id="user" className="container">
            <div className="card card-shadow card-user">
                <div className="user-image">

                </div>
                <h1 className="title">Nome do usuário</h1>
                <div className="user-options">
                    <ul className="user-options-list">
                        <li><AiOutlineUser />Meus dados</li>
                        <li><AiFillShopping />Minhas compras</li>
                        <li><BiCart />Meu carrinho</li>
                        <li><BiLogOut />Sair</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}