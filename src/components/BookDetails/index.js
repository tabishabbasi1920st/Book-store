import "./index.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const bookDetails = {
  error: "0",
  title: "Securing DevOps",
  subtitle: "Security in the Cloud",
  authors: "Julien Vehent",
  publisher: "Manning",
  isbn10: "1617294136",
  isbn13: "9781617294136",
  pages: "384",
  year: "2018",
  rating: "5",
  desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
  price: "$26.98",
  image: "https://itbook.store/img/books/9781617294136.png",
  url: "https://itbook.store/books/9781617294136",
  pdf: {
    "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
    "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf",
  },
};

export default function BookDetails() {
  const { title, subtitle, image, desc, price } = bookDetails;
  return (
    <>
      <Header />
      <div className="book-details-container">
        <div className="book-img-container">
          <img src={image} alt={title} className="book-img" />
        </div>
        <div className="book-info-container">
          <h1 className="book-title">{title}</h1>
          <p className="book-subtitle">{subtitle}</p>
          <p className="desc-tag">Description:</p>
          <p className="book-desc">{desc}</p>
          <p className="book-price">Rs.{price}/-</p>
          <div className="back-and-cart-btns-container">
            <Link to="/books" className="custom-link-btn">
              <button className="back-btn">Back</button>
            </Link>
            <button className="cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
