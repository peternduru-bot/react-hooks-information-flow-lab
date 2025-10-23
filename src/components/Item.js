import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddToCart() {
    setInCart((prev) => !prev);
  }

  return (
    <li className={inCart ? "Item in-cart" : "Item"}>
      <span className="name">{name}</span> - <span className="category">{category}</span>
      <button onClick={handleAddToCart}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
