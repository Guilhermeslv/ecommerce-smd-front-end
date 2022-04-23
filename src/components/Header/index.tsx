import { BiUserCircle, BiCart } from "react-icons/bi"
import { Link } from "react-router-dom"
import "./styles.css"

type Props = {
    title?: string
}

export function Header(props: Props) {    

    return (
        <header>
            <Link to="/">
                <span>{props.title}</span>
            </Link>            
            <div className="icons-wrapper">
                <div>
                    <BiUserCircle />
                </div>
                <div>
                    <BiCart />
                </div>                
            </div>
        </header>
    )
}