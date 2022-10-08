import { Link, NavLink } from "react-router-dom";
import classes from "../layout/MainNavigation.module.css";
const NavigationHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.logo}>
        <ul className={classes.nav}>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
