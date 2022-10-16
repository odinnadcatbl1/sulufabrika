import Slider from "react-slick";
import Slide from "../Slide/Slide";

import img1 from "../../assets/slides/1.jpg";
import img2 from "../../assets/slides/2.jpg";
import img3 from "../../assets/slides/3.jpg";

const slides = [
    {
        img: img1,
        title: "Ātri",
        text: "Lai nodrošinātu maksimāli ātru un kvalitatīvu servisu, mēs strādājam ar modernākajām, rūpnieciska līmeņa iekārtām, kuras spēj apstrādāt līdz pat 1 tonnu ābolu/stundā.",
    },
    {
        img: img2,
        title: "Kvalitatīvi",
        text: "Pasterizācija +80°C, lai sula nebojātos, vienlaikus saglabājot savas labās īpašības un minerālvielas.",
    },
    {
        img: img3,
        title: "Veselīgi un garšīgi",
        text: "Izveido savu vitamīnu kokteili! Pievieno ingveru imunitātei, burkānu ādas veselībai, aroniju asinsrites uzlabošanai!",
    },
];

const Intro = () => {
    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <Slider {...sliderSetting}>
                        {slides.map((slide) => {
                            return (
                                <Slide
                                    key={slide.title}
                                    img={slide.img}
                                    title={slide.title}
                                    text={slide.text}
                                />
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Intro;
