import { ProductItem } from "../ProductItem";
import "./styles.css"

type Product = {
    product_name: string;
    product_description: string;
    product_price: number;
}

let mockProducts = [
    {
        product_name: "Fogão",
        product_description: "Um fogão muito show",
        product_price: 199.9,
    },
    {
        product_name: "Geladeira",
        product_description: "Uma geladeira muito show",
        product_price: 199.9,
    },
    {
        product_name: "Microondas",
        product_description: "Um microondas muito show",
        product_price: 199.9,
    },
    {
        product_name: "liquidificador",
        product_description: "Um liquidificador muito show",
        product_price: 199.9,
    },
]

export function ProductList(){
    return(
        <div className="product-list">
            {mockProducts.map(element => (
                <ProductItem 
                    product_name={element.product_name}
                    product_description={element.product_description}
                    product_price={element.product_price}
                />
            ))}
            
        </div>
    )
}