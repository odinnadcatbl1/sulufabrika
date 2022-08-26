import { useState } from "react";

import bag1 from "../../assets/info-block/1.png";
import bag2 from "../../assets/info-block/2.png";
import bag3 from "../../assets/info-block/3.png";

const InfoBlock = () => {
    const [firstIsVisible, setFirstVisible] = useState(false);
    const [secondIsVisible, setSecondVisible] = useState(false);

    return (
        <section className="info__block" id="info__block">
            <div className="container">
                <h2 className="page__title">PAKALPOJUMI</h2>

                <div className="info__block-inner">
                    <div className="info__block-text">
                        <h3>
                            Piedāvājam ātri un kvalitatīvi izspiest un sakarsēt
                            sulu no Jūsu audzētiem āboliem, bumbieriem,
                            burkāniem un citiem dārza labumiem.
                        </h3>
                        Pirms spiešanas augļi tiek noskaloti no putekļiem.
                        Minimālais ābolu daudzums 2 maisi (60 kg), kā arī
                        strādājam ar liela apjoma pasūtījumiem. Lai nodrošinātu
                        maksimāli ātru un kvalitatīvu servisu, mēs strādājam ar
                        modernākajām, rūpnieciska līmeņa iekārtām, kuras spēj
                        apstrādāt līdz pat 1 tonnu ābolu/stundā.
                    </div>

                    <div className="info__block-bags">
                        <div className="bags__title">
                            Iepakojumu veidi un cenas
                        </div>
                        <ul className="bags__list">
                            <li className="bags__item">
                                <div
                                    className={
                                        firstIsVisible
                                            ? "bags__name bags__name--active"
                                            : "bags__name"
                                    }
                                    onClick={() =>
                                        setFirstVisible(!firstIsVisible)
                                    }
                                >
                                    Bag in box{" "}
                                    {firstIsVisible ? (
                                        <span>&#5123;</span>
                                    ) : (
                                        <span>&#5121;</span>
                                    )}
                                </div>

                                <div
                                    className={
                                        firstIsVisible
                                            ? "bags__submenu bags__submenu--active"
                                            : "bags__submenu"
                                    }
                                >
                                    <div className="bags__submenu-item">
                                        <div className="submenu__item-text">
                                            3 litri <br />
                                            <br /> €2
                                        </div>
                                        <div className="submenu__item-img">
                                            <img src={bag1} alt="bag1" />
                                        </div>
                                    </div>

                                    <div className="bags__submenu-item">
                                        <div className="submenu__item-text">
                                            5 litri <br />
                                            <br /> €2.50
                                        </div>
                                        <div className="submenu__item-img">
                                            <img src={bag1} alt="bag1" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="bags__item">
                                <div
                                    className={
                                        secondIsVisible
                                            ? "bags__name bags__name--active"
                                            : "bags__name"
                                    }
                                    onClick={() =>
                                        setSecondVisible(!secondIsVisible)
                                    }
                                >
                                    Pouch maisi
                                    {secondIsVisible ? (
                                        <span>&#5123;</span>
                                    ) : (
                                        <span>&#5121;</span>
                                    )}
                                </div>

                                <div
                                    className={
                                        secondIsVisible
                                            ? "bags__submenu bags__submenu--active"
                                            : "bags__submenu"
                                    }
                                >
                                    <div className="bags__submenu-item">
                                        <div className="submenu__item-text">
                                            3 litri <br />
                                            <br /> €2.70
                                        </div>
                                        <div className="submenu__item-img">
                                            <img src={bag2} alt="bag1" />
                                        </div>
                                    </div>

                                    <div className="bags__submenu-item">
                                        <div className="submenu__item-text">
                                            5 litri <br />
                                            <br /> €3.50
                                        </div>
                                        <div className="submenu__item-img">
                                            <img src={bag3} alt="bag1" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoBlock;
