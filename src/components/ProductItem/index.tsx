import { Link } from "react-router-dom"
import "./styles.css"

export function ProductItem(){
    return (
        <Link to="/produto">
            <div className="card card-shadow product-item">
                <div className="product-image">
                    
                </div>
                <div className="product-description">
                    <span className="product-name">Nome do produto</span>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
                    <div className="product-price">
                        <span >R$ 199,90</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}