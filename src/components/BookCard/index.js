import "./index.css";

export default function BookCard({ bookData }) {
  const { title, subtitle, isbn13, price, image, url } = bookData;

  return (
    <li className="book-card">
      <div className="img-container">
        <img title="click to see book details" src={image} alt={title} />
      </div>
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
