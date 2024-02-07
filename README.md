# Interactive Book Store Application

An application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

> Demo

### Usage

```
git clone <github repository link> //to clone the github repository
npm install //to install all the dependencies required to run application
npm start //to start the application
```

**Note** Node should be greater than or equal to **14.0** to run the application.

## Development

### Tech Stack

Frontend - ReactJS (React Router, Redux/React Context)

### Functionality

| Page             | Page Details                                                              | Navigation                                            |
| ---------------- | ------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Home**         | Header - links for pages Home, Book List, Cart                            |                                                       |
|                  | Banner - Heading, description, and "Explore Books" Button                 |                                                       |
| **Book List**    | Header - links for pages Home, Book List, Cart                            | "Book List" link in header,                           |
|                  | Book Items, Search, filter                                                | "Explore Books" Button,                               |
|                  |                                                                           | "Back" Button to Go Book Details Page                 |
| **Book Details** | Book detailed Info, "Add to cart" Button "Back" Button                    | Each book in the book list page                       |
| **Cart**         | Cart Items, "Remove" Button, Checkout Button, Order Summary               | "Cart" link in Header, "Back" Button in Checkout Page |
| **Checkout**     | "Back" Button Order form(Personal details, Summary), "Place Order" Button | Checkout in cart                                      |

### Technical Details

| Pages            | Route        | Path       |
| ---------------- | ------------ | ---------- |
| **Home**         | Home         | /          |
| **Book List**    | Book List    | /books     |
| **Book Details** | Book Details | /books/:id |
| **Cart**         | Cart         | /cart      |
| **Checkout**     | Checkout     | /checkout  |
| **Not Found**    | Not Found    | /not-found |

### Routes & Components

Home

| Components | Details                                          | State | API(IT Bookstore) |
| ---------- | ------------------------------------------------ | ----- | ----------------- |
| Home       | Heading, Description, and "Explore Books" button | -     | -                 |
| Header     | links for pages Home, Book List, Cart            | -     | -                 |

Book List

| Components   | Details                                    | State                                    | API(IT Bookstore) |
| ------------ | ------------------------------------------ | ---------------------------------------- | ----------------- |
| BookList     |                                            | apiStatus, booksList, minPrice, maxPrice | /new              |
| Header       | links for pages Home, Book List, Cart      | -                                        | -                 |
| SearchInput  | Search (by title, author)                  | searchInputValue                         | /search/{query}   |
| PriceRange   | filter (by price)                          | -                                        | -                 |
| BookItem     | Book Items (title, subtitle, image, price) | -                                        | -                 |
| Loader       | -                                          | -                                        | -                 |
| ErrorMessage | -                                          | -                                        | -                 |

Book Details

| Components   | Details                                                                                                           | State                      | API(IT Bookstore) |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------- |
| BookDetails  | Book Detailed Information - image, title, subtitle, price, description, etc./ "Add to cart" Button, "Back" button | apiStatus, bookDetailsData | /books/{isbn}     |
| Header       | links for pages Home, Book List, Cart                                                                             | -                          | -                 |
| Loader       | -                                                                                                                 | -                          | -                 |
| ErrorMessage | -                                                                                                                 | -                          | -                 |

Cart

| Components | Details                                                        | State              | API(IT Bookstore) |
| ---------- | -------------------------------------------------------------- | ------------------ | ----------------- |
| Cart       | Cart Items, "Remove" Button, Order Summary, "Checkout" Button  | (Context Consumer) | -                 |
| Header     | links for pages Home, Book List, Cart                          | -                  | -                 |
| CartItem   | Book Detailed Inf (image, title, subtitle, price, description) | (Context Consumer) | -                 |

Checkout

| Components      | Details                                                                                                      | State                       | API(IT Bookstore) |
| --------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------- | ----------------- |
| Checkout        | "Back button                                                                                                 | (Context Consumer)          | -                 |
| UserDetailsForm | Order Form - Personal Details - First Name, Last Name, Email, Mobile No., Place Order, Button, Order Summary | userDetails,isFormSubmitted | -                 |

Not Found

| Components | Details                               | State | API(IT Bookstore) |
| ---------- | ------------------------------------- | ----- | ----------------- |
| NotFound   | -                                     | -     | -                 |
| Header     | links for pages Home, Book List, Cart | -     | -                 |

App

| Components | Details | State                                                                 | API(IT Bookstore) |
| ---------- | ------- | --------------------------------------------------------------------- | ----------------- |
| App        | -       | cartList(Context Provider),Context:cartlist, addToCart,deleteFromCart | -                 |

### Guidelines

- Followed Github Guidelines
  - Made the commits often and make sure the commit messages are concise and specific
  - Included a README file for explaining the project setup, usage instructions, and any additional information.
- Followed Clean Code Guidelines
- The repo is well-organized and easy to navigate
- The Application handled all the errors

### Resources

#### Design Files

Pages : Home, Book List, Book Details, Shopping Cart, Checkout

Reference: https://www.crossword.in/

#### API

Books, Book Details, Search

Reference: https://api.itbook.store

#### Third-party packages

- Loader (react-loader-spinner)
- Icons (react-icons)
- Range Slider (rc-slider)
- React Router (react-router-dom v6.22.0)

### Future Improvements

- Implement User Authentication
