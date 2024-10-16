import cli1 from "../../images/client1.jpg";
import cli2 from "../../images/client2.jpg";

const Review = () => {
  return (
    <>
      {" "}
      <section className="reviews-section">
        <div className="reviews-wrapper">
          <div className="container">
            <h1>
              <span className="span">REVIEW CLIENT</span>
            </h1>
            <div className="underline"></div>
            <p className="lorem2">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical at <br />
              Hampden-Sydney College.
            </p>

            <div id="reviews-section">
              <div className="review-container">
                <div className="review-item">
                  <img src={cli1} alt="Client Image" className="review-image" />
                  <div className="review-details">
                    <h1 className="review-title">Diet Expert</h1>
                    <p className="review-position">CFO</p>
                  </div>
                </div>
                <div className="review-comment">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla, sequi quia, libero voluptatibus ducimus earum quidem
                    minus eveniet, ex esse rem sed numquam. Error magnam in vero
                    molestiae tempora nostrum.
                  </p>
                </div>
                <div className="clip1"></div>
                <div className="clip"></div>
              </div>

              <div className="review-container">
                <div className="review-item">
                  <img src={cli2} alt="Client Image" className="review-image" />
                  <div className="review-details">
                    <h1 className="review-title">Cardio Trainer</h1>
                    <p className="review-position">CEO</p>
                  </div>
                </div>
                <div className="review-comment">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla, sequi quia, libero voluptatibus ducimus earum quidem
                    minus eveniet, ex esse rem sed numquam. Error magnam in vero
                    molestiae tempora nostrum.
                  </p>
                </div>
                <div className="clip1"></div>
                <div className="clip"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
