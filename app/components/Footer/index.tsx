import Link from "next/link";
import React from "react";
import "./style.scss";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="footer --ptb">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__top">
            <div className="footer__top-left">
              <h2 className="title">
                Find the difference with doma - where mastery meets creativity
              </h2>
            </div>
            <div className="footer__top-right">
              <ul className="sitemap">
                <li className="sitemap__item --group">Explore</li>
                <li className="sitemap__item">
                  <Link href="/">Projects</Link>
                </li>
                <li className="sitemap__item">
                  <Link href="/">Our Approach</Link>
                </li>
                <li className="sitemap__item">
                  <Link href="/">About</Link>
                </li>
                <li className="sitemap__item">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <div className="contact">
                <div className="contact__group">
                  <div className="contact__group-label">Email us</div>
                  <Link
                    href="mailto:info@example.com"
                    className="btn btn-link contact__group-info"
                  >
                    furniturue@gmail.com
                  </Link>
                </div>
                <div className="contact__group">
                  <div className="contact__group-label">Call us</div>
                  <Link
                    href="tel:+1234567890"
                    className="btn btn-link contact__group-info"
                  >
                    +1234567890
                  </Link>
                </div>
                <div className="contact__group">
                  <div className="contact__group-label">Follow us</div>
                  <Link
                    href="https://www.facebook.com/furniturue"
                    className="btn btn-link contact__group-info"
                  >
                    @doma.furniture
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>Copyright 2025 Furniturue</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
