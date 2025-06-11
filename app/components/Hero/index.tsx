"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Loader from "../Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

type Props = {};

const Hero = (props: Props) => {
  const [splitText, setSplitText] = useState<SplitText[]>([]);
  const [splitTextBottom, setSplitTextBottom] = useState<SplitText[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const nav = gsap.utils.toArray(".nav .nav__item") as HTMLDivElement[];
    const contact = document.querySelector(".schero__nav-contact");
    [...nav, contact].forEach((item) => {
      setSplitText((prev) => [...prev, SplitText.create(item)]);
    });
    const bottomLeft = document.querySelector(".schero__bottom-left");
    const bottomMiddle = document.querySelector(".schero__bottom-middle");
    const bottomRight = document.querySelector(".schero__bottom-right");
    [bottomLeft, bottomMiddle, bottomRight].forEach((item) => {
      setSplitTextBottom((prev) => [...prev, SplitText.create(item)]);
    });
  }, []);
  useGSAP(
    () => {
      if (splitText.length === 0 || splitTextBottom.length === 0) return;
      const tl = gsap.timeline({});
      // Logo
      const logoSplit = SplitText.create(logoRef.current);
      const loaderRef = document.querySelector(".loader");
      tl.from(logoSplit.lines, {
        y: "100%",
        opacity: 0,
        ease: "power3.out",
        duration: 1.5,
        onStart: () => {
          document.body.classList.add("--loading");
        },
      });
      tl.from(logoRef.current, {
        top: `${(window.innerHeight - 120) / 2}px`,
        left: "50%",
        x: "-50%",
        overflow: "hidden",
        ease: "power4.inOut",
        duration: 1.5,
      });
      tl.to(
        loaderRef,
        {
          opacity: 0,
          onComplete: () => {
            document.body.classList.remove("--loading");
          },
        },
        "-=0.6"
      ).from(
        logoRef.current,
        {
          color: `var(--text-color)`,
        },
        "<+0.1"
      );
      // Top
      const nav = gsap.utils.toArray(".nav .nav__item") as HTMLDivElement[];
      const contact = document.querySelector(".schero__nav-contact");
      [...nav, contact].forEach((item, index) => {
        tl.from(
          item,
          {
            overflow: "hidden",
          },
          "<"
        );
        tl.from(
          splitText[index].lines,
          {
            y: "100%",
            opacity: 0,
            ease: "power3.out",
            duration: 1.5,
          },
          "<"
        );
      });
      // Bottom
      const bottomLeft = document.querySelector(".schero__bottom-left");
      const bottomMiddle = document.querySelector(".schero__bottom-middle");
      const bottomRight = document.querySelector(".schero__bottom-right");
      [bottomLeft, bottomMiddle, bottomRight].forEach((item, index) => {
        tl.from(
          splitTextBottom[index].lines,
          {
            overflow: "hidden",
          },
          "<"
        );
        tl.from(
          splitTextBottom[index].words,
          {
            y: "100%",
            opacity: 0,
            ease: "power3.out",
            duration: 1.5,
          },
          "<"
        );
      });
      tl.from(
        bottomRight,
        {
          y: 20,
          opacity: 0,
          ease: "power3.out",
          duration: 1.5,
        },
        "<"
      );
    },
    {
      scope: heroRef,
      dependencies: [heroRef, splitText, splitTextBottom],
    }
  );
  return (
    <section id="schero" className="schero" ref={heroRef}>
      <div className="container-fluid">
        <div className="schero-wrapper">
          {/* Nav */}
          <nav className="schero__nav">
            <Loader />
            {/* Logo */}
            <Link ref={logoRef} href="#" className="schero__nav-logo">
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
              <h1 className="title">Where Every Moment Is a Masterpiece</h1>
            </div>
            <div className="schero__bottom-wrapper">
              <div className="schero__bottom-middle">
                <p>
                  Enjoy a stylish, fully serviced room designed for
                  professionals, who value comfort and convinience.
                </p>
              </div>
              <div className="schero__bottom-right">
                <button className="btn btn-avail">Check availability</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
