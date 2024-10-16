import Tra1 from "../../images/trainer1.jpg";
import Tra2 from "../../images/trainer2.jpg";
import Tra3 from "../../images/trainer3.jpg";

const Trainers = () => {
  return (
    <>
      <section id="trainers-section">
        <div className="trainers-wrapper">
          <div className="container">
            <h1>
              <span className="span">OUR BEST TRAINERS</span>
            </h1>
            <div className="underline"></div>
            <p className="lorem2">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical at <br />
              Hampden-Sydney College.
            </p>

            <div className="trainers">
              <div className="trainer">
                <div className="blue-box top"></div>
                <div className="blue-box bottom"></div>
                <div className="blue-box left"></div>
                <div className="blue-box right"></div>
                <img src={Tra1} alt="Trainer 1" />
                <div className="info-box">
                  <h3>Kayla Itsines</h3>
                  <p>Pilates Trainer</p>
                </div>
              </div>

              <div className="trainer">
                <div className="blue-box top"></div>
                <div className="blue-box bottom"></div>
                <div className="blue-box left"></div>
                <div className="blue-box right"></div>
                <img src={Tra2} alt="Trainer 2" />
                <div className="info-box">
                  <h3>Arwin Catak</h3>
                  <p>Fitness Trainer</p>
                </div>
              </div>

              <div className="trainer">
                <div className="blue-box top"></div>
                <div className="blue-box bottom"></div>
                <div className="blue-box left"></div>
                <div className="blue-box right"></div>
                <img src={Tra3} alt="Trainer 3" />
                <div className="info-box">
                  <h3>Jane Doe</h3>
                  <p>Cardio Trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainers;
