import React, { useState } from "react";
import { MultiCarousel } from "react-multi-carousel";
import { MdFavorite } from "react-icons/md";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const ProductModal = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <div className="product-modal">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Cena: {product.price} PLN</p>
      <div className="quantity-control">
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <div className="favorite-control">
        <MdFavorite />
        <span>Dodaj do ulubionych</span>
      </div>
      <button onClick={onAddToCart}>DODAJ DO KOSZYKA</button>
      <h3>Dodaj to co lubisz</h3>
      <MultiCarousel responsive={responsive}>
        {product.recommended.map((recommendedProduct) => (
          <div key={recommendedProduct.id}>
            <h4>{recommendedProduct.name}</h4>
            <img src={recommendedProduct.image} alt={recommendedProduct.name} />
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
};

export default ProductModal;
