import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from "../../assets/logo.png";

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="/" className="logo__wrap">
                        <img
                            src={logo}
                            alt="SULU FABRIKA"
                            className="logo__img"
                        />
                        <div className="logo__name">
                            SULU
                            <br />
                            FABRIKA
                        </div>
                    </a>

                    <nav
                        className={
                            isOpened
                                ? "header__nav header__nav--active"
                                : "header__nav"
                        }
                    >
                        <ul
                            className={
                                isOpened
                                    ? "nav__list nav__list--active"
                                    : "nav__list"
                            }
                        >
                            <li className="nav__list-item">
                                <AnchorLink
                                    className="nav__link"
                                    href="#contacts"
                                >
                                    KONTAKTI
                                </AnchorLink>
                            </li>

                            <li className="nav__list-item">
                                <AnchorLink
                                    className="nav__link"
                                    href="#info__block"
                                >
                                    PAKALPOJUMI
                                </AnchorLink>
                            </li>

                            <li className="nav__list-item">
                                <AnchorLink className="nav__link" href="#rules">
                                    NOTEIKUMI
                                </AnchorLink>
                            </li>

                            <li className="nav__list-item">
                                <AnchorLink
                                    className="nav__link"
                                    href="#gallery"
                                >
                                    GALERIJA
                                </AnchorLink>
                            </li>

                            <li className="nav__list-item">
                                <AnchorLink className="nav__link" href="#video">
                                    VIDEO
                                </AnchorLink>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className={
                            isOpened ? "burger burger--active" : "burger"
                        }
                        type="button"
                        onClick={() => {
                            setIsOpened(!isOpened);
                        }}
                    >
                        <span>Открыть навигацию</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
