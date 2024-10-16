import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="trainers-wrapper">
          <div className="container">
            <img src={Logo} alt="Powerfull Logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              doloremque quaerat optio eaque veritatis, inventore, tenetur
              laborum distinctio necessitatibus perferendis dolores fuga facilis
              ipsum, totam officia voluptatibus impedit aperiam vel.
            </p>

            <div className="footer-container">
              <div className="footer-section">
                <h3>Information</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Helpful Links</h3>
                <ul>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Supports</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
