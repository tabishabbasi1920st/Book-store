import "./index.css";
import Header from "../Header";
import { CartContext } from "../Context/CartContext";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
};

export default function BookDetails() {
  const [bookData, setBookData] = useState({});
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);
  const { id } = useParams();

  useEffect(() => {
    fetchBookDeatails();
  }, []);

  const fetchBookDeatails = async () => {
    setApiStatus(apiConstants.inProgress);
    try {
      const apiUrl = `https://api.itbook.store/1.0/books/${id}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const singleBookData = await response.json();
        setBookData(singleBookData);
        setApiStatus(apiConstants.success);
      } else {
        setApiStatus(apiConstants.failure);
      }
    } catch (error) {
      setApiStatus(apiConstants.failure);
      console.error("Error while fetching single books details: ", error);
    }
  };

  const renderLoadingView = () => {
    <div className="book-details-loading-view-container">
      <Loader />
      <p className="book-details-loading-view-para">Loading...</p>
    </div>;
  };

  const renderFetchingFailureView = () => {
    return (
      <div>
        <p>
          Oops...
          <br />
          Something went wrong
        </p>
      </div>
    );
  };

  const renderSuccessView = () => {
    return (
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
            <button className="cart-btn" onClick={handleAddToCartButtonClick}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAppropView = () => {
    switch (apiStatus) {
      case apiConstants.inProgress:
        return renderLoadingView();
      case apiConstants.success:
        return renderSuccessView();
      default:
        return renderFetchingFailureView();
    }
  };

  const handleAddToCartButtonClick = () => {
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

  const { title, subtitle, image, desc, price, isbn13 } = bookData;

  const { addItemIntoCartList } = useContext(CartContext);

  return (
    <>
      <Header />
      {renderAppropView()}
    </>
  );
}
