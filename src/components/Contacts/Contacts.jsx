import phoneSvg from "../../assets/phone.svg";

const locations = [
    {
        city: "Jelgava",
        address: "Smilšu iela 4",
        phone: "+371 29774876",
        img: "https://via.placeholder.com/400",
    },
    {
        city: "Valmiera",
        address: "Ķeizari (BN Kurši stāvlaukumā)",
        phone: "+371 26690696",
        img: "https://via.placeholder.com/400",
    },
    {
        city: "Jelgava",
        address: "Lietuvas šoseja 2b",
        phone: "+371 29774876",
        img: "https://via.placeholder.com/400",
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
                                            {location.city}
                                        </div>
                                        <div className="contacts__item-address">
                                            {location.address}
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
