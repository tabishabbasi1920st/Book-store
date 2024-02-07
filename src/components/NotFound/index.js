import "./index.css";
import Header from "../Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="not-found-img-container">
          <img
            className="not-found-img"
            src="https://cdn.shopify.com/s/files/1/0648/3066/9017/files/Group_16971.png?v=1674635449"
            alt="not found"
          />
        </div>
        <div className="not-found-content-container">
          <p className="page-not-found-para">Page Not Found</p>
          <button className="back-to-home-btn">Back To Home</button>
        </div>
      </div>
      ;
    </>
  );
}
