import { BiUserCircle, BiCart } from "react-icons/bi"
import "./styles.css"

type Props = {
    title?: string
}

export function Header(props: Props) {    

    return (
        <header>
            <span>{props.title}</span>
            <div className="icons-wrapper">
                <BiUserCircle />
                <BiCart />
            </div>
        </header>
    )
}