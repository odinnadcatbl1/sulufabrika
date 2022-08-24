import img from "../../assets/slides/1.jpg";

const Slide = () => {
    return (
        <div className="custom__slide">
            <div className="slide__info">
                <div className="slide__title">Fast</div>
                <div className="slide__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, recusandae.
                </div>
            </div>
            <div className="slide__img-box">
                <img src={img} alt="slide img" className="slide__img" />
            </div>
        </div>
    );
};

export default Slide;
