import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from "../../assets/logo.png";

const Header = () => {
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

                    <nav className="header__nav">
                        <ul className="nav__list">
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
                                <AnchorLink className="nav__link" href="">
                                    NOTEIKUMI
                                </AnchorLink>
                            </li>

                            <li className="nav__list-item">
                                <AnchorLink className="nav__link" href="#">
                                    GALERIJA
                                </AnchorLink>
                            </li>

                            <li className="nav__list-item">
                                <AnchorLink className="nav__link" href="#">
                                    VIDEO
                                </AnchorLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
