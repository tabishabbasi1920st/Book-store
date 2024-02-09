import "./index.css";
import { Link } from "react-router-dom";

export default function BookCard({ bookData }) {
  const { title, subtitle, isbn13, price, image, url } = bookData;

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
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </li>
  );
}
