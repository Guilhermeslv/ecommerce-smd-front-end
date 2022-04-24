import "../styles/product.css"

export function Product(){
    return (
        <div id="product">
            <div className="card card-shadow product-page-image">
            </div>
            <div className="card card-shadow product-page-description">
                <span className="title-destaque">Nome do produto</span>
                <p className=" text description-product-page-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates delectus repellendus fugiat. At, architecto magnam nesciunt minus eum obcaecati cum pariatur molestias accusamus. Quia temporibus quod veritatis. Provident, corporis. Quas?
                </p>

                <div className="product-buy-options">
                    <span className="title product-page-price">R$ 199,90</span>
                    <button>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}