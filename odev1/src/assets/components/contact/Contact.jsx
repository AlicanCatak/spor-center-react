const Contact = () => {
  return (
    <>
      {" "}
      <section>
        <div className="contact-wrapper">
          <div className="container">
            <h1>
              <span className="span">CONTACT US</span>
            </h1>
            <div className="underline"></div>
            <p className="lorem2">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical at <br />
              Hampden-Sydney College.
            </p>

            <div id="contact-in">
              <div className="contact-form">
                <div className="sa">
                  <h1>Mobile Number</h1>
                  <h1>Email Address</h1>
                </div>
                <div className="sa">
                  <p>+135 773 321 4442</p>
                  <p>demo@demo.com</p>
                </div>
                <h1>Make An Appointment</h1>
                <form>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-form-txt"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="contact-form-txt"
                  />
                  <br />
                  <textarea
                    placeholder="Your Message"
                    className="contact-form-textarea"
                  ></textarea>
                  <br />
                </form>
              </div>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1460845413426!2d28.996132176427302!3d41.065799315880476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ffa1446655%3A0xb3f995c35944e2f5!2sMACFit%20Torun%20Center!5e0!3m2!1str!2str!4v1727893470986!5m2!1str!2str"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
