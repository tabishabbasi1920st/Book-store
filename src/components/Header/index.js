import "./index.css";
import { FaUser, FaShoppingBag, FaBook } from "react-icons/fa";

const navItemsList = [
  {
    id: "HOME",
    itemText: "Home",
    icon: <FaUser />,
  },
  {
    id: "BOOKLIST",
    itemText: "Book List",
    icon: <FaBook />,
  },
  {
    id: "CART",
    itemText: "Cart",
    icon: <FaShoppingBag />,
  },
];

export default function Header() {
  return (
    <nav className="navbar">
      <div className="inner-container">
        <div className="logo-container">
          <p className="logo">C</p>
          <p className="website-name">Crossword</p>
        </div>

        <ul className="nav-items-container">
          {navItemsList.map((eachNavItem) => (
            <li key={eachNavItem.id}>
              <button className="nav-btns">
                {eachNavItem.icon}
                <span className="nav-btn-txt">{eachNavItem.itemText}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
