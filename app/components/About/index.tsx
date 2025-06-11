"use client";
import React, { useRef } from "react";
import "./style.scss";
import AnimateImage from "../AnimateImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
type Props = {};

const About = (props: Props) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const left = document.querySelector(".scabout__left");
      const leftTitle = left?.querySelector(".scabout__left-title");
      const leftPara = left?.querySelector(".scabout__left-para");
      const right = document.querySelector(".scabout__right");
      const rightPara = right?.querySelector(".scabout__right-para");
      [leftTitle, leftPara, rightPara].forEach((child) => {
        const splitText = SplitText.create(child as HTMLElement);
        gsap.set([leftTitle, leftPara, rightPara], {
          overflow: "hidden",
        });
        gsap.from(splitText.lines, {
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
      });
    },
    {
      scope: aboutRef,
    }
  );
  return (
    <section id="scabout" className="scabout" ref={aboutRef}>
      <div className="container">
        <div className="scabout-wrapper">
          <div className="scabout__left">
            <h2 className="scabout__left-title">About</h2>
            <p className="scabout__left-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam facere velit vel consectetur aut similique doloremque
              tempora ex hic ad suscipit, tenetur quos obcaecati est iste sunt
              aperiam, dicta totam.
            </p>
            <AnimateImage className="scabout__left-thumbnail">
              <img src="/images/founder-1.jpg" alt="About" />
            </AnimateImage>
          </div>
          <div className="scabout__right">
            <p className="scabout__right-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              mollitia, magnam earum officia quo animi iure fugit velit
              cupiditate itaque laboriosam, sit libero alias facere! Quisquam
              nostrum iste dolorum quidem.
            </p>
            <AnimateImage className="scabout__right-thumbnail">
              <img src="/images/founder-2.jpeg" alt="About" />
            </AnimateImage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
