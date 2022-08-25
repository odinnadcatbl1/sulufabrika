import Slider from "react-slick";
import Slide from "../Slide/Slide";

import img1 from "../../assets/slides/1.jpg";
import img2 from "../../assets/slides/2.jpg";
import img3 from "../../assets/slides/3.jpg";

const slides = [
    {
        img: img1,
        title: "быстро",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eius.",
    },
    {
        img: img2,
        title: "качественно",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eius.",
    },
    {
        img: img3,
        title: "вкусно",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eius.",
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
