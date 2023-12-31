import { useState } from "react";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);

  const handleProductSelect = (product) => {
    setOrderedProducts([...orderedProducts, product]);
  };

  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      />
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={handleProductSelect}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
