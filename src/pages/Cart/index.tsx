import { ProductCart } from "../../components/ProductCart"
import "./styles.css"

export function Cart(){
    return(
        <div id="cart" className="container">
            <div className="card card-shadow cart-items-wrapper">
                <span className="title title-cart-items">Itens no carrinho</span>
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </div>
            <div className="card card-shadow cart-finish-wrapper">
               <div className="title title-cart-finish"><span>Finalize sua compra</span></div>
               <div className="price-cart-finish">
                   <span>R$ 1999,90</span>
                   <div className="cart-finish-buttons-wrapper">
                       <button className="btn button-secondary">Continuar comprando</button>
                       <button className="btn button-primary">Finalizar compra</button>
                   </div>
               </div>
               
            </div>
        </div>
    )
}