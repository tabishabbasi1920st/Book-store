import "./index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaSearch } from "react-icons/fa";
import Header from "../Header";
import BookCard from "../BookCard";
import { useState, useEffect } from "react";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
};

export default function BookList() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);
  const [booksList, setBooksList] = useState([
    {
      title: "MongoDB in Action, 2nd Edition",
      subtitle: "Covers MongoDB version 3.0",
      isbn13: "9781617291609",
      price: "$32.10",
      image: "https://itbook.store/img/books/9781617291609.png",
      url: "https://itbook.store/books/9781617291609",
    },
    {
      title: "Practical MongoDB",
      subtitle: "Architecting, Developing, and Administering MongoDB",
      isbn13: "9781484206485",
      price: "$32.04",
      image: "https://itbook.store/img/books/9781484206485.png",
      url: "https://itbook.store/books/9781484206485",
    },
    {
      title: "The Definitive Guide to MongoDB, 3rd Edition",
      subtitle: "A complete guide to dealing with Big Data using MongoDB",
      isbn13: "9781484211830",
      price: "$47.11",
      image: "https://itbook.store/img/books/9781484211830.png",
      url: "https://itbook.store/books/9781484211830",
    },
  ]);

  useEffect(() => {
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    setApiStatus(apiConstants.inProgress);
    try {
      const apiUrl = "https://api.itbook.store/1.0/new";
      const response = await fetch(apiUrl);
      if (response.ok) {
        const booksData = await response.json();
        const { books } = booksData;
        setBooksList(books);
        setApiStatus(apiConstants.success);
      } else {
        setApiStatus(apiConstants.failure);
      }
    } catch (error) {
      setApiStatus(apiConstants.failure);
      console.error("Error while fetching books data: ", error);
    }
  };

  const fetchSearchedBookData = async (searchedValue) => {
    setApiStatus(apiConstants.inProgress);
    try {
      const apiUrl = `https://api.itbook.store/1.0/search/${searchedValue}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const searchedBookData = await response.json();
        const { books } = searchedBookData;
        setBooksList(books);
        setApiStatus(apiConstants.success);
      } else {
        setApiStatus(apiConstants.failure);
      }
    } catch (error) {
      setApiStatus(apiConstants.failure);
      console.error("Error while fetching searched book data: ", error);
    }
  };

  const handleChangeInSearchInput = (e) => {
    const { value } = e.target;
    setSearchInputValue(value);
    if (value.trim() === "") {
      fetchBooksData();
    } else {
      fetchSearchedBookData(value);
    }
  };

  const getFilteredBooksList = () => {
    const filteredBookList = booksList.filter(
      (book) =>
        parseFloat(book.price.slice(1)) >= minPrice &&
        parseFloat(book.price.slice(1)) <= maxPrice
    );
    return filteredBookList;
  };

  const renderFilter = () => {
    return (
      <div className="filter-container">
        <p className="filter-para">Filter by price </p>
        <div className="price-indicator-container">
          <h3 htmlFor="minAmount">Min:</h3>
          <p>{minPrice} $</p>
          <h3 htmlFor="maxAmount">Max:</h3>
          <p>{maxPrice} $</p>
        </div>
        <Slider
          className="price-slider"
          keyboard
          range
          draggableTrack
          marks
          pushable
          defaultValue={[minPrice, maxPrice]}
          onChange={(e) => {
            setMinPrice(e[0] * 10);
            setMaxPrice(e[1] * 10);
          }}
        />
      </div>
    );
  };

  const renderSearchBar = () => {
    return (
      <div className="search-container">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search for books..."
            className="search-input"
            value={searchInputValue}
            onChange={handleChangeInSearchInput}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
    );
  };

  const renderBookItemsContainer = () => {
    return (
      <ul className="books-item-container">
        {getFilteredBooksList().map((eachBookData) => (
          <BookCard bookData={eachBookData} key={eachBookData.isbn13} />
        ))}
        {booksList.length === 0 &&
          apiStatus === apiConstants.success &&
          renderEmptySearchView()}
        {getFilteredBooksList().length === 0 &&
          renderNoBooksInThisPriceRangeView()}
      </ul>
    );
  };

  const renderLoadingView = () => {
    return (
      <div className="book-list-loading-view">
        <Loader />
        <p className="loading-para">Loading...</p>
      </div>
    );
  };

  const renderEmptySearchView = () => {
    return (
      <div className="empty-search-view-container">
        <p className="something-wrong-para">
          No results found! Try a different search term or category.
        </p>
      </div>
    );
  };

  const renderFailureView = () => {
    return (
      <div className="book-list-failure-view-container">
        <p className="something-wrong-para">
          Oops..
          <br />
          Something went wrong
        </p>
      </div>
    );
  };

  const renderNoBooksInThisPriceRangeView = () => {
    return (
      <div className="empty-search-view-container">
        <p className="something-wrong-para">
          No books in this price range... <br />
        </p>
      </div>
    );
  };

  const renderAppropriateView = () => {
    switch (apiStatus) {
      case apiConstants.inProgress:
        return renderLoadingView();
      case apiConstants.success:
        return renderBookItemsContainer();
      default:
        return renderFailureView();
    }
  };

  return (
    <>
      <Header />
      <div className="search-and-filter-container">
        {renderSearchBar()}
        {renderFilter()}
      </div>
      {renderAppropriateView()}
      <ToastContainer />
    </>
  );
}
