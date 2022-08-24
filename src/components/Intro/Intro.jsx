import Slider from "react-slick";
import Slide from "../Slide/Slide";

const Intro = () => {
    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    {/* <Slider {...sliderSetting}>
                        <div>
                            <h1>1</h1>
                        </div>
                        <div>
                            <h1>2</h1>
                        </div>
                        <div>
                            <h1>3</h1>
                        </div>
                    </Slider> */}
                    <Slide />
                </div>
            </div>
        </section>
    );
};

export default Intro;
