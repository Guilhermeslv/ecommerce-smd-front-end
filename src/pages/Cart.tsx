import { ProductCart } from "../components/ProductCart"
import "../styles/cart.css"

export function Cart(){
    return(
        <div id="cart">
            <div className="cart-items-wrapper">
                <span className="title title-cart-items">Itens no carrinho</span>
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </div>
            <div className="cart-finish-wrapper">
               <div className="title title-cart-finish"><span>Finalize sua compra</span></div>
               <div className="price-cart-finish">
                   <span>R$ 1999,90</span>
                   <div className="cart-finish-buttons-wrapper">
                       <button>Continuar comprando</button>
                       <button className="blue-button">Finalizar compra</button>
                   </div>
               </div>
               
            </div>
        </div>
    )
}