const Slide = ({ img, title, text }) => {
    return (
        <div className="custom__slide">
            <div className="slide__info">
                <div className="slide__title">{title}</div>
                <div className="slide__text">{text}</div>
            </div>
            <div className="slide__img-box">
                <img src={img} alt="slide img" className="slide__img" />
            </div>
        </div>
    );
};

export default Slide;
