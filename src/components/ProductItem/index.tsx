import { Link } from "react-router-dom"
import "./styles.css"

type ProductItem = {
    product_name: string;
    product_description: string;
    product_price: number;
}

export function ProductItem(props:ProductItem){
    return (
        <Link to="/produto">
            <div className="card card-shadow product-item">
                <div className="product-image">
                    
                </div>
                <div className="product-description">
                    <span className="product-name">{props.product_name}</span>
                    <p>{props.product_description}</p>
                    <div className="product-price">
                        <span >R$ {props.product_price}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}