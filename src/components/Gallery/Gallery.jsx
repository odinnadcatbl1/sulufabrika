import Slider from "react-slick";

import photo1 from "../../assets/gallery/1.jpg";
import photo2 from "../../assets/gallery/2.jpg";
import photo3 from "../../assets/gallery/3.jpg";
import photo4 from "../../assets/gallery/4.jpg";
import photo5 from "../../assets/gallery/5.jpg";
import photo6 from "../../assets/gallery/6.jpg";
import photo7 from "../../assets/gallery/7.jpg";
import photo8 from "../../assets/gallery/8.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

const Gallery = () => {
    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <h2 className="page__title">GALERIJA</h2>
                <div className="gallery__inner">
                    <Slider {...sliderSetting}>
                        {photos.map((photo) => {
                            return (
                                <div className="gallery__photo-box" key={photo}>
                                    <img
                                        src={photo}
                                        alt="photo"
                                        className="gallery__photo"
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
