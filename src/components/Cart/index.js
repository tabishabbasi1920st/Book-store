import "./index.css";
import Header from "../Header";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartList } = useContext(CartContext);

  const getTotalPriceOfCartItems = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      const price = parseFloat(cartList[i].price.slice(1));
      const quantity = cartList[i].quantity;
      totalPrice += price * quantity;
    }

    return Math.ceil(totalPrice);
  };

  const renderOrderSummary = () => {
    return (
      <li className="order-summary-container">
        <p className="order-summary-para">Order Summary</p>
        <div className="first-section">
          <p className="amount-payable-para">
            Amount Payable:
            <br />
            (Inclusive all taxes)
          </p>
          <p className="total-price">{getTotalPriceOfCartItems()}$/-</p>
        </div>
        <div className="second-section">
          <p className="you-save">You Save</p>
          <p className="saved-price">0$/-</p>
        </div>
        <p className="delievery-instruction-para">
          Special Delievery Instructions
        </p>
        <textarea
          placeholder="Please update special delievery instructions.."
          className="text-area"
        />
        <Link to="/checkout">
          <button title="click to checkout" className="checkout-btn">
            Checkout
          </button>
        </Link>
      </li>
    );
  };

  const renderEmptyCartView = () => {
    return (
      <div className="empty-cart-view-container">
        <h1>Your Cart Is Empty</h1>
      </div>
    );
  };

  const renderNonEmptyCartView = () => {
    return (
      <div className="cart-item-and-summary-container">
        <ul className="cart-container">
          {cartList.map((eachItem) => (
            <CartItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
        {renderOrderSummary()}
      </div>
    );
  };

  const renderCartOrEmptyCartView = () => {
    switch (cartList.length) {
      case 0:
        return renderEmptyCartView();
      default:
        return renderNonEmptyCartView();
    }
  };

  return (
    <>
      <Header />
      {renderCartOrEmptyCartView()}
    </>
  );
}
