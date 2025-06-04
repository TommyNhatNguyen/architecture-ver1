import Link from "next/link";
import React from "react";
import "./style.scss";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section id="schero" className="schero">
      <div className="container-fluid">
        <div className="schero-wrapper">
          {/* Nav */}
          <nav className="schero__nav">
            {/* Logo */}
            <Link href="#" className="schero__nav-logo">
              Rumaé
            </Link>
            {/* Nav */}
            <ul className="nav">
              <li className="nav__item">
                <Link href="#" className="nav__item-link">
                  <span>About</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="#" className="nav__item-link">
                  <span>Faciliteis</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="#" className="nav__item-link">
                  <span>Why Rumaé</span>
                </Link>
              </li>
            </ul>
            {/* Contact */}
            <Link href="#" className="schero__nav-contact">
              <span>Contact</span>
            </Link>
          </nav>
          {/* bottom */}
          <div className="schero__bottom">
            <div className="schero__bottom-left">
              <h1 className="title">Redefining modern boarding house living</h1>
            </div>
            <div className="schero__bottom-middle">
              <p>
                Enjoy a stylish, fully serviced room designed for professionals,
                who value comfort and convinience.
              </p>
            </div>
            <div className="schero__bottom-right">
              <button className="btn btn-avail">Check availability</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
