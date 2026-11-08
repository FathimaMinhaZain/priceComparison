import "./ProductCard.css"

export function ProductCard({ name, brand, retailer, price }) {
    
    const targetPrice = 700
    
    return (
        <div className="product-card" >
            <div className="product-name">
                <h3>{name}</h3>
            </div>

            <div className="product-brand">
                <h3>{brand}</h3>

            </div>

            <div className="product-retailer">
                <h3>{retailer}</h3>
            </div>

            <div className="product-price">
                <h3>{price}</h3>
            </div>

            <div className="target-check">
                {Number(price) > targetPrice ? <h4 style={{color:'red'}}> Not a deal </h4> : <h4 style={{color:'green'}}> Good deal </h4>}
            </div>
        </div>

    )
}