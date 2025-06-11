"use client";
import React, { useRef } from "react";
import "./style.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import AnimateImage from "../AnimateImage";
type Props = {};

const Approach = (props: Props) => {
  const approachRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      window.addEventListener("load", () => {
        const top = document.querySelector(".scapproach__top");
        const topTitle = top?.querySelector(".title");
        const topPara = top?.querySelector(".para");
        const middle = document.querySelector(".scapproach__middle");
        const middleContent = middle?.querySelector(
          ".scapproach__middle-content"
        );
        [topTitle, topPara, middleContent].forEach((child) => {
          const splitText = SplitText.create(child as HTMLElement);
          gsap.set([topTitle, topPara, middleContent], {
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
        const bottom = document.querySelector(".scapproach__bottom");
        const bottomItems = bottom?.querySelectorAll(
          ".scapproach__bottom-item"
        );
        bottomItems?.forEach((item) => {
          const num = item.querySelector(".num");
          const title = item.querySelector(".content__title");
          const para = item.querySelector(".content__para");
          [num, title, para].forEach((child) => {
            const splitText = SplitText.create(child as HTMLElement);
            gsap.set([num, title, para], {
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
        });
      });
    },
    {
      scope: approachRef,
      dependencies: [approachRef, window],
    }
  );
  return (
    <section id="scapproach" className="scapproach --ptb" ref={approachRef}>
      <div className="container">
        <div className="scapproach__top">
          {/* Content */}
          <div className="scapproach__top-content">
            <h2 className="title">Passion in Every Detail</h2>
            <p className="para">
              We don't just design spaces; we craft bespoke living experiences,
              where refined aesthetics meet unparalleled comfort.
            </p>
          </div>
          {/* Thumbnail */}
          <AnimateImage className="scapproach__top-thumbnail">
            {/* <div className="scapproach__top-thumbnail"> */}
            <img src="/images/about-1.jpg" alt="Approach" />
            {/* </div> */}
          </AnimateImage>
        </div>
        <div className="scapproach__middle">
          {/* Thumbnail */}
          <AnimateImage className="scapproach__middle-thumbnail">
            <img src="/images/about-2.jpg" alt="Approach" />
          </AnimateImage>
          {/* Content */}
          <div className="scapproach__middle-content">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              tempora corporis amet blanditiis sapiente, nesciunt, possimus
              facere unde soluta suscipit esse, magnam repellendus sit
              voluptatibus id molestiae vero iusto culpa!
            </h3>
          </div>
          {/* Thumbnail */}
          <AnimateImage className="scapproach__middle-thumbnail">
            <img src="/images/about-3.jpg" alt="Approach" />
          </AnimateImage>
        </div>
        <div className="scapproach__bottom">
          <div className="scapproach__bottom-item">
            <span className="num">1</span>
            <div className="content">
              <h4 className="content__title">Share your idea</h4>
              <p className="content__para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus cupiditate et rem voluptatum quas perferendis
                exercitationem fuga iste, repellendus fugiat similique veritatis
                a debitis dolorum aut dignissimos odit! Voluptatem, provident?
              </p>
              <AnimateImage className="content__img">
                <img src="/images/idea-1.webp" alt="Approach" />
              </AnimateImage>
            </div>
          </div>
          <div className="scapproach__bottom-item">
            <span className="num">2</span>
            <div className="content">
              <h4 className="content__title">Survey</h4>
              <p className="content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                exercitationem! Voluptate rem ducimus libero natus ipsa, atque
                neque facere fugiat quos quaerat cumque deleniti, beatae,
                molestias aspernatur. Repudiandae, laboriosam modi.
              </p>
              <AnimateImage className="content__img">
                <img src="/images/idea-2.jpeg" alt="Approach" />
              </AnimateImage>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
