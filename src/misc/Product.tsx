import "./Product.css";
import { useState } from "react";

interface Product {
    name: string;
    price: number;
    description: string;
    image: string;
}

const products = [
    {
        name: "Product one",
        price: 100,
        description: "This is product one",
        image: "./products/one.webp"
    },
    {
        name: "Product two",
        price: 200,
        description: "This is product two",
        image: "./products/one.webp"
    },
    {
        name: "Product three",
        price: 300,
        description: "This is product three",
        image: "./products/one.webp"
    },
    {
        name: "Product one",
        price: 100,
        description: "This is product one",
        image: "./products/one.webp"
    },
    {
        name: "Product two",
        price: 200,
        description: "This is product two",
        image: "./products/one.webp"
    },
    {
        name: "Product three",
        price: 300,
        description: "This is product three",
        image: "./products/one.webp"
    },
];

function Product() {
    return (
        <div className="products">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    );
}

function ProductItem(props: { product: Product }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        // Only toggle on mobile
        if (window.innerWidth <= 480) {
            setActive(!active);
        }
    };

    return (
        <div className="product" onClick={handleClick}>
            <div className={`image-container ${active ? "active" : ""}`}>
                <img src={props.product.image} alt={props.product.name} />
                <div className="product-info">
                    <h3>{props.product.name}</h3>
                    <p>{props.product.description}</p>
                    <span>${props.product.price}</span>
                </div>
            </div>
        </div>
    );
}

export default Product;