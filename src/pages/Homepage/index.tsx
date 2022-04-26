import "./styles.css"
import { ProductList } from "../../components/ProductList"

export function Homepage() {
    return (
        <div id="home" className="container">
            <ProductList />
        </div>
    );
}