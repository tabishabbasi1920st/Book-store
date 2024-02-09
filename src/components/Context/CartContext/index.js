import React, { useState } from "react";

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([
    // {
    //   id: "9781484211830",
    //   image: "https://itbook.store/img/books/9781484211830.png",
    //   price: "$47.11",
    //   quantity: 1,
    //   subtitle: "A complete guide to dealing with Big Data using MongoDB",
    //   title: "The Definitive Guide to MongoDB, 3rd Edition",
    // },
  ]);

  const updateExistingItemQuantity = (existedItemId, newQuantity) => {
    setCartList((prevCartList) =>
      prevCartList.map((eachItem) => {
        if (eachItem.id === existedItemId) {
          return { ...eachItem, quantity: newQuantity };
        }
        return { ...eachItem };
      })
    );
  };

  const addItemIntoCartList = (item) => {
    // If item already exists in cartlist, "isItemAlreadyExist" will store the "OBJECT" of item else store undefined.
    const isItemAlreadyExist = cartList.find(({ id }) => id === item.id);

    if (isItemAlreadyExist !== undefined) {
      setCartList((prevCartList) =>
        prevCartList.map((eachItem) => {
          if (eachItem.id === isItemAlreadyExist.id) {
            return { ...eachItem, quantity: isItemAlreadyExist.quantity + 1 };
          }
          return { ...eachItem };
        })
      );
    } else {
      setCartList((prevCartList) => [...prevCartList, item]);
    }
  };

  const removeItemFromCartList = (itemId) => {
    const filteredCartList = cartList.filter(
      (eachItem) => eachItem.id !== itemId
    );
    setCartList([...filteredCartList]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItemIntoCartList,
        removeItemFromCartList,
        updateExistingItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
