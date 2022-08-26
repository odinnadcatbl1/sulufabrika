const Video = () => {
    return (
        <section className="video" id="video">
            <div className="container">
                <h2 className="page__title">VIDEO</h2>
                <div className="video__inner">
                    <div className="video__list">
                        <div className="video__item">
                            <iframe
                                src="https://www.youtube.com/embed/PePK7P28RNc"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className="video__item">
                            <iframe
                                src="https://www.youtube.com/embed/kXTTOUl9-bQ"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className="video__item">
                            <iframe
                                src="https://www.youtube.com/embed/i8H958lqDHI"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;
