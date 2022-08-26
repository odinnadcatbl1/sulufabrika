const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__item">
                        <div className="footer__title">Jelgava</div>
                        <div className="footer__info">
                            <a
                                className="footer__link"
                                href="https://www.google.com/maps/place/Sulu+Fabrika/@56.643351,23.7058716,17z/data=!4m5!3m4!1s0x46ef254b2950e20f:0xb67c05f445845037!8m2!3d56.6433148!4d23.7080795?hl=lv"
                            >
                                <i className="fa fa-location-arrow"></i> Smilšu
                                iela 4
                            </a>

                            <a
                                className="footer__link"
                                href="https://goo.gl/maps/ddXCQYWS2aT74yrp6"
                            >
                                <i className="fa fa-location-arrow"></i>Lietuvas
                                šoseja 2b
                            </a>

                            <a
                                className="footer__link"
                                href="tel: +37129774876"
                            >
                                <i className="fa fa-phone"></i>
                                +371 29774876
                            </a>
                        </div>
                    </div>

                    <div className="footer__item">
                        <div className="footer__title">Valmiera</div>
                        <div className="footer__info">
                            <a
                                className="footer__link"
                                href="https://www.google.ru/maps/search/Valmiera,+%C4%B6eizari/@57.5258045,25.3549736,13z/data=!3m1!4b1"
                            >
                                <i className="fa fa-location-arrow"></i>
                                Ķeizari (BN Kurši stāvlaukumā)
                            </a>

                            <a className="footer__link" href="tel: 37126690696">
                                <i className="fa fa-phone"></i>371 26690696
                            </a>
                        </div>
                    </div>

                    <div className="footer__item">
                        <div className="footer__title">Get in touch</div>
                        <div className="footer__info">
                            <a
                                className="footer__link"
                                href="https://www.facebook.com/sulufabrika/"
                            >
                                Facebook<i className="fa fa-facebook"></i>
                            </a>

                            <a
                                className="footer__link"
                                href="https://www.instagram.com/sulu.fabrika/"
                            >
                                Instagram<i className="fa fa-instagram"></i>
                            </a>

                            <a
                                className="footer__link"
                                href="https://www.youtube.com/channel/UC0VzXFl3vWEay-7Uvt9bRog"
                            >
                                YouTube<i className="fa fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__copyright">
                    © Copyright Sulu Fabrika.
                </div>

                <div className="footer__madeby">
                    made by <span>odinnadcatbl1</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
