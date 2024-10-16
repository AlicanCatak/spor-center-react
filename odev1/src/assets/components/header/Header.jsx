import Logo from "../../images/logo.png";
import React, { useState, useEffect } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false); // Burada scrolled state'ini tanımlıyoruz

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Kaydırma 50 pikselden fazla olunca scrolled true yapıyoruz
      } else {
        setScrolled(false); // 50 pikselden az olursa scrolled false
      }
    };
    window.addEventListener("scroll", handleScroll); // Sayfa kaydırıldığında bu fonksiyonu çalıştırıyoruz

    return () => {
      window.removeEventListener("scroll", handleScroll); // Temizlik işlemi, performans için önemli
    };
  }, []);
  return (
    <>
      <header className={scrolled ? "navbar scrolled" : "navbar"}>
        {" "}
        {/* scrolled ise kırmızı olacak */}
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <img src={Logo} alt="Powerfull Logo" />
            </div>
            <div className="menu-toggle" id="mobile-menu">
              <i className="fas fa-bars"></i>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#classes-section">Classes</a>
              </li>
              <li>
                <a href="#trainers-section">Trainers</a>
              </li>
              <li>
                <a href="#reviews-section">Review</a>
              </li>
              <li>
                <a href="#contact-in">Contact</a>
              </li>
              <button className="join-us">JOIN US</button>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="label">POWERFULL</span>
            <h1 className="title1">
              <span>Group</span>
              <span>Practice</span>
              <span>With Trainer</span>
            </h1>
            <div className="lorem1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                ducimus quia amet dignissimos quis tempore odit ipsum architecto
                corporis odio, omnis libero impedit natus sapiente soluta
                veritatis obcaecati?
              </p>
            </div>
            <div className="buttons">
              <button className="sign-up">Sign Up</button>
              <button className="details">Details</button>
            </div>
          </div>
        </div>
      </section>

      <section id="box-container">
        <div className="container">
          <div id="box-wrapper">
            <div className="box">
              <h1>325</h1>
              <h2>Course</h2>
            </div>
            <div className="box">
              <h1>405</h1>
              <h2>Work Out</h2>
            </div>
            <div className="box">
              <h1>305</h1>
              <h2>Working Hour</h2>
            </div>
            <div className="box">
              <h1>705</h1>
              <h2>Happy Client</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
