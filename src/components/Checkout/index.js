import "./index.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, firstName, address, city, state, pinCode, phone } = formData;

    const validateEmail = (email) => {
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validateFirstName = (firstName) => {
      // Check if the first name has at least two characters and contains only letters
      const nameRegex = /^[A-Za-z]{2,}$/;
      return nameRegex.test(firstName);
    };

    const validateAddress = (address) => {
      // Check if the address is not empty
      return address.trim() !== "";
    };

    const validateCity = (city) => {
      // Check if the city is not empty and meets specific criteria
      return city.trim() !== "" && city.length >= 2; // Example: At least 2 characters
    };

    const validateState = (state) => {
      // Check if the state is not empty and meets specific criteria
      return state.trim() !== "" && state.length >= 2; // Example: At least 2 characters
    };

    const validatePinCode = (pinCode) => {
      // Check if the pin code is a numeric value and meets specific criteria
      const pinCodeRegex = /^\d{6}$/; // Example: Exactly 6 digits
      return pinCodeRegex.test(pinCode);
    };

    const validatePhoneNumber = (phoneNumber) => {
      // Check if the phone number is a numeric value and meets specific criteria
      const phoneRegex = /^\d{10}$/; // Example: Exactly 10 digits
      return phoneRegex.test(phoneNumber);
    };

    if (!validateEmail(email)) {
      toast.warn("Please enter valid email");
      return false;
    } else if (!validateFirstName(firstName)) {
      toast.warn("Please enter valid first name");
      return false;
    } else if (!validateAddress(address)) {
      toast.warn("Please enter valid address");
      return false;
    } else if (!validateCity(city)) {
      toast.warn("Please enter valid city");
      return false;
    } else if (!validateState(state)) {
      toast.warn("Please enter valid state");
      return false;
    } else if (!validatePinCode(pinCode)) {
      toast.warn("Please enter valid PIN code");
      return false;
    } else if (!validatePhoneNumber(phone)) {
      toast.warn("Please enter valid phone number");
      return false;
    }

    return true;
  };

  const handleFormSubmition = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Order placed Successfully");
    }
  };

  const renderCheckoutForm = () => {
    return (
      <form className="checkout-form" onSubmit={handleFormSubmition}>
        <div className="contact-info-container">
          <p className="contact-para">Contact</p>
          <input
            className="checkout-form-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div className="shipping-address-container">
          <p className="shipping-para">Shipping Address</p>
          <div className="first-and-last-name-container">
            <input
              className="checkout-form-input"
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
            />
            <input
              className="checkout-form-input"
              type="text"
              name="lastName"
              placeholder="Last name(optional)"
              onChange={handleChange}
            />
          </div>

          <input
            className="checkout-form-input"
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
          <input
            className="checkout-form-input"
            type="text"
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            onChange={handleChange}
          />
          <div className="city-state-pincode-container">
            <input
              className="checkout-form-input"
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
            />
            <input
              className="checkout-form-input"
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
            />
            <input
              className="checkout-form-input"
              type="text"
              name="pinCode"
              placeholder="PIN code"
              onChange={handleChange}
            />
          </div>
          <div className="phone-input-and-btns-container">
            <input
              className="checkout-form-input"
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
            <div className="checkout-btns-container">
              <Link to="/cart" className="custom-link">
                <button type="button" className="checkout-back-btn">
                  Back
                </button>
              </Link>
              <button type="submit" className="place-order-btn">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <Header />
      {renderCheckoutForm()}
      <ToastContainer />
    </>
  );
}
