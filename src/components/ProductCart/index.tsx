import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { BsCartXFill } from "react-icons/bs"
import "./styles.css"

export function ProductCart(){
    return(
        <div className="cart-item">
                    <div className="cart-item-image">aaa</div>
                    <div className="cart-item-name">Nome do produto</div>
                    <div className="cart-item-quantity">
                        <button className="minus-quantity">
                            <AiOutlineMinus />
                        </button>
                        <input type="number" min="0" max="10" className="cart-item-quantity-input"/>
                        <button className="plus-quantity">
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <div className="cart-item-remove">
                        <button>
                            <BsCartXFill />
                        </button>                        
                    </div>
                    <span className="cart-item-price">RS 1.990,00</span>
        </div>
    )
}