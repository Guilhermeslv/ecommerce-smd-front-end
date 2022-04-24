import { BiUserCircle, BiCart } from "react-icons/bi"
import { Link } from "react-router-dom"
import "./styles.css"

type Props = {
    title?: string
}

export function Header(props: Props) {    

    return (
        <header>
                <span className="logo">
                    <Link to="/">
                        {props.title}
                    </Link>    
                </span>          
            <div className="icons-wrapper">
                <Link to="/login">
                    <div>
                        <BiUserCircle />
                    </div>
                </Link>
                <Link to="/carrinho">
                    <div>                    
                        <BiCart />                    
                    </div> 
                </Link>               
            </div>
        </header>
    )
}