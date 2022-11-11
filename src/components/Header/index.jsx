import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Container from "../../layout/Container";
import logo from "../../images/logo.png";
import links from "../../router";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <Container className={classes["header__container"]}>
        <a className={classes["header__logo"]} href="#!">
          <img
            className={classes["header__logo_img"]}
            src={logo}
            alt="Zetflix Logo"
          />
        </a>
        <ul className={classes["header__list"]}>
          {links.map(({ name, link }) => (
            <li key={name}>
              <a className={classes["header__link"]} href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
        <form className={classes['header__form']}>
          <AiOutlineSearch />
          <input className={classes['header__input']} type="search" />
        </form>
      </Container>
    </header>
  );
};

export default Header;
