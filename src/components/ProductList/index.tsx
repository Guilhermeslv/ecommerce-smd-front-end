import { ProductItem } from "../ProductItem";
import "./styles.css"

export function ProductList(){
    return(
        <div className="product-list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    )
}