import phoneSvg from "../../assets/phone.svg";

const locations = [
    {
        city: "Jelgava",
        address: "Smilšu iela 4",
        phone: "+371 29774876",
        img: "https://via.placeholder.com/400",
        link: "https://www.google.com/maps/place/Sulu+Fabrika/@56.643351,23.7058716,17z/data=!4m5!3m4!1s0x46ef254b2950e20f:0xb67c05f445845037!8m2!3d56.6433148!4d23.7080795?hl=lv",
    },
    {
        city: "Valmiera",
        address: "Ķeizari (BN Kurši stāvlaukumā)",
        phone: "+371 26690696",
        img: "https://via.placeholder.com/400",
        link: "https://www.google.ru/maps/search/Valmiera,+%C4%B6eizari/@57.5258045,25.3549736,13z/data=!3m1!4b1",
    },
    {
        city: "Jelgava",
        address: "Lietuvas šoseja 2b",
        phone: "+371 29774876",
        img: "https://via.placeholder.com/400",
        link: "https://goo.gl/maps/ddXCQYWS2aT74yrp6",
    },
];

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <h2 className="page__title">KONTAKTI</h2>

                <div className="contacts__inner">
                    <div className="contacts__list">
                        {locations.map((location) => {
                            return (
                                <div
                                    key={location.address}
                                    className="contacts__item"
                                >
                                    <div className="contacts__item-info">
                                        <div className="contacts__item-city">
                                            <a
                                                href={location.link}
                                                target="_blank"
                                            >
                                                {location.city}
                                            </a>
                                        </div>
                                        <div className="contacts__item-address">
                                            <a
                                                href={location.link}
                                                target="_blank"
                                            >
                                                {location.address}
                                            </a>
                                        </div>
                                        <div className="contacts__item-phone">
                                            <img
                                                src={phoneSvg}
                                                alt="phone svg"
                                            />
                                            <a href={`tel:${location.phone}`}>
                                                {location.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contacts__map-box">
                                        <img
                                            src={location.img}
                                            alt={locations.address}
                                            className="contacts__map"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
