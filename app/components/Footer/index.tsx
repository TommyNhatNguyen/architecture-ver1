"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
type Props = {};

const Footer = (props: Props) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [splitText, setSplitText] = useState<SplitText[]>([]);
  useEffect(() => {
    const left = document.querySelector(".footer__top-left");
    const leftTitle = left?.querySelector(".title");
    const right = document.querySelector(".footer__top-right");
    const sitemapItems = right?.querySelectorAll(".sitemap__item");
    const contactLabel = right?.querySelectorAll(".contact__group-label");
    const contactInfo = right?.querySelectorAll(".contact__group-info");
    const bottom = document.querySelector(".footer__bottom");
    [leftTitle, sitemapItems, contactLabel, contactInfo, bottom].forEach(
      (child) => {
        setSplitText((prev) => [
          ...prev,
          SplitText.create(child as HTMLElement),
        ]);
      }
    );
  }, []);
  useGSAP(
    () => {
      if (splitText.length === 0) return;
      const left = document.querySelector(".footer__top-left");
      const leftTitle = left?.querySelector(".title");
      const right = document.querySelector(".footer__top-right");
      const sitemapItems = right?.querySelectorAll(".sitemap__item");
      const contactLabel = right?.querySelectorAll(".contact__group-label");
      const contactInfo = right?.querySelectorAll(".contact__group-info");
      const bottom = document.querySelector(".footer__bottom");
      [leftTitle, sitemapItems, contactLabel, contactInfo, bottom].forEach(
        (child, index) => {
          gsap.set(
            [leftTitle, sitemapItems, contactLabel, contactInfo, bottom],
            {
              overflow: "hidden",
            }
          );
          gsap.from(splitText[index].lines, {
            scrollTrigger: {
              trigger: child as HTMLElement,
              start: "bottom bottom",
              end: "bottom bottom",
            },
            y: "100%",
            opacity: 0,
            ease: "power3.out",
            duration: 1.5,
          });
        }
      );
    },
    {
      scope: footerRef,
      dependencies: [footerRef, splitText],
    }
  );
  return (
    <footer id="footer" className="footer --ptb" ref={footerRef}>
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
