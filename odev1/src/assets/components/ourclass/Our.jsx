import Yoga from "../../images/yoga.jpg";
import Solo from "../../images/solo.jpg";
import Stret from "../../images/stret.webp";
import Group from "../../images/group.webp";

import React, { useState } from "react";

const Our = () => {
  // Hangi bölümün aktif olduğunu izlemek için state
  const [activeClass, setActiveClass] = useState("yoga");
  return (
    <>
      <section id="classes-section">
        <div className="background-clip"></div>
        <div className="container">
          <h1>
            <span className="span">OUR CLASSES</span>
          </h1>
          <div className="underline"></div>

          <p className="lorem2">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College.
          </p>

          <div className="classes-buttons">
            <button
              className={`class-button ${
                activeClass === "yoga" ? "active" : ""
              }`}
              onClick={() => setActiveClass("yoga")}
            >
              Yoga
            </button>
            <button
              className={`class-button ${
                activeClass === "group" ? "active" : ""
              }`}
              onClick={() => setActiveClass("group")}
            >
              Group
            </button>
            <button
              className={`class-button ${
                activeClass === "solo" ? "active" : ""
              }`}
              onClick={() => setActiveClass("solo")}
            >
              Solo
            </button>
            <button
              className={`class-button ${
                activeClass === "stretching" ? "active" : ""
              }`}
              onClick={() => setActiveClass("stretching")}
            >
              Stretching
            </button>
          </div>

          <div
            className={`container yoga-section ${
              activeClass === "yoga" ? "active" : "hidden"
            }`}
          >
            <div className="container-wrapper">
              <div className="content">
                <h1>Why are your Yoga?</h1>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur possimus voluptatum impedit odit perferendis dolorum
                  placeat, exercitationem in officia autem maiores ab nostrum
                  laboriosam sapiente nulla totam neque eum veniam.
                </p>
                <br />
                <h1>When comes Yoga Your Time.</h1>
                <br />
                <p>Saturday–Sunday: 8:00am – 10:00am</p>
                <p>Monday–Tuesday: 10:00am – 12:00pm</p>
                <p>Wednesday–Friday: 3:00pm – 6:00pm</p>
              </div>
              <div className="image-wrapper">
                <img src={Yoga} alt="Yoga" className="image1" />
              </div>
            </div>
          </div>

          <div
            className={`container group-section ${
              activeClass === "group" ? "active" : "hidden"
            }`}
          >
            <div className="container-wrapper">
              <div className="content">
                <h1>Why are your Group Classes?</h1>
                <br />
                <p>
                  Group classes are a fun and engaging way to stay fit and
                  motivated. You get to exercise with others and push yourself
                  beyond limits.
                </p>
                <br />
                <h1>When comes Group Class Time.</h1>
                <br />
                <p>Saturday–Sunday: 10:00am – 12:00pm</p>
                <p>Wednesday: 2:00pm – 4:00pm</p>
                <p>Friday: 5:00pm – 7:00pm</p>
              </div>
              <div className="image-wrapper">
                <img src={Group} alt="Group" className="image1" />
              </div>
            </div>
          </div>

          <div
            className={`container solo-section ${
              activeClass === "solo" ? "active" : "hidden"
            }`}
          >
            <div className="container-wrapper">
              <div className="content">
                <h1>Why Solo Exercises?</h1>
                <br />
                <p>
                  Solo exercises are perfect for focusing on your own rhythm and
                  reaching your personal fitness goals without distractions.
                </p>
                <br />
                <h1>When comes Solo Time.</h1>
                <br />
                <p>Monday–Friday: 8:00am – 9:00am</p>
                <p>Wednesday: 4:00pm – 5:00pm</p>
                <p>Saturday: 1:00pm – 3:00pm</p>
              </div>
              <div className="image-wrapper">
                <img src={Solo} alt="Solo" className="image1" />
              </div>
            </div>
          </div>

          <div
            className={`container stretching-section ${
              activeClass === "stretching" ? "active" : "hidden"
            }`}
          >
            <div className="container-wrapper">
              <div className="content">
                <h1>Why Stretching is Important?</h1>
                <br />
                <p>
                  Stretching improves flexibility, helps prevent injury, and
                  ensures that your body is prepared for any workout session.
                </p>
                <br />
                <h1>When comes Stretching Time.</h1>
                <br />
                <p>Saturday: 8:00am – 9:00am</p>
                <p>Tuesday–Thursday: 10:00am – 11:00am</p>
                <p>Sunday: 6:00pm – 7:00pm</p>
              </div>
              <div className="image-wrapper">
                <img src={Stret} alt="Stretching" className="image1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Our;
