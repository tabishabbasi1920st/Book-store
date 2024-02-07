import "./index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaSearch } from "react-icons/fa";
import Header from "../Header";
import BookCard from "../BookCard";
import { useState } from "react";

const booksList = [
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
  {
    title: "The Definitive Guide to MongoDB, 3rd Edition",
    subtitle: "A complete guide to dealing with Big Data using MongoDB",
    isbn13: "9781484211830",
    price: "$47.11",
    image: "https://itbook.store/img/books/9781484211830.png",
    url: "https://itbook.store/books/9781484211830",
  },
  {
    title: "The Definitive Guide to MongoDB, 3rd Edition",
    subtitle: "A complete guide to dealing with Big Data using MongoDB",
    isbn13: "9781484211830",
    price: "$47.11",
    image: "https://itbook.store/img/books/9781484211830.png",
    url: "https://itbook.store/books/9781484211830",
  },
  {
    title: "The Definitive Guide to MongoDB, 3rd Edition",
    subtitle: "A complete guide to dealing with Big Data using MongoDB",
    isbn13: "9781484211830",
    price: "$47.11",
    image: "https://itbook.store/img/books/9781484211830.png",
    url: "https://itbook.store/books/9781484211830",
  },
];

export default function BookList() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchInputValue, setSearchInputValue] = useState("");

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
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="search-and-filter-container">
        {renderSearchBar()}
        {renderFilter()}
      </div>
      <ul className="books-item-container">
        {booksList.map((eachBookData) => (
          <BookCard bookData={eachBookData} key={eachBookData.isbn13} />
        ))}
      </ul>
    </>
  );
}
