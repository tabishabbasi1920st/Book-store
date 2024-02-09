import "./index.css";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function BookCard({ bookData }) {
  const { title, subtitle, isbn13, price, image, url } = bookData;

  const { addItemIntoCartList } = useContext(CartContext);

  const handleCartBtnClick = () => {
    const item = {
      id: isbn13,
      image,
      title,
      subtitle,
      price,
      quantity: 1,
    };
    addItemIntoCartList(item);
  };

  return (
    <li className="book-card">
      <Link className="img-container" to={`/books/${isbn13}`}>
        <img title="click to see book details" src={image} alt={title} />
      </Link>
      <div className="content-container">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <p className="price">Rs. {price}/-</p>
      </div>
      <div className="cart-btn-container">
        <button onClick={handleCartBtnClick} className="add-to-cart-btn">
          Add to cart
        </button>
      </div>
    </li>
  );
}
