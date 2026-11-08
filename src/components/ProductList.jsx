import products from '../data/products.js'
import { ProductCard } from './ProductCard.jsx'

export function ProductList(props) {

    if (!products || products.length === 0) {
        return <div>No products available</div>
    }
    
    return (
        <div className="product-list">
            {products.map(
                (product) => {
                    return <ProductCard
                        key={product.id}
                        name={product.name}
                        brand={product.brand}
                        retailer={product.retailer}
                        price={product.price}
                    />
                }
            )}
        </div>
    )
}
