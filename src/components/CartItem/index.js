import "./index.css";
import { useState, useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { Link } from "react-router-dom";

export default function CartItem({ eachItem }) {
  const { id, image, title, subtitle, price, quantity } = eachItem;
  const { updateExistingItemQuantity, removeItemFromCartList } =
    useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const quantityOptionsList = [];
  for (let i = 1; i <= 30; i++) {
    quantityOptionsList.push(i);
  }

  const handleQuantitySelector = (e) => {
    setProductQuantity(parseInt(e.target.value));
    updateExistingItemQuantity(id, parseInt(e.target.value));
  };

  const handleClickRemoveItem = () => {
    removeItemFromCartList(id);
  };

  return (
    <li className="cart-item">
      <div className="cart-item-img-container">
        <Link to={`/books/${id}`}>
          <img className="product-img" src={image} alt={title} />
        </Link>
      </div>
      <div className="product-details-container">
        <p className="product-title">{title}</p>
        <p className="product-subtitle">{subtitle}</p>
        <p className="product-price">{price}</p>
      </div>
      <div className="cart-btns-container">
        <button className="cart-remove-btn" onClick={handleClickRemoveItem}>
          Remove
        </button>
        <select
          value={productQuantity}
          title="select quantity"
          className="quantity-selector"
          onChange={handleQuantitySelector}
        >
          {quantityOptionsList.map((eachOption) => (
            <option key={eachOption}>{eachOption}</option>
          ))}
        </select>
      </div>
    </li>
  );
}
