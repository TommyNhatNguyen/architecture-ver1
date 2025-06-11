"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
type Props = {};

const Contact = (props: Props) => {
  const [splitText, setSplitText] = useState<SplitText[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const content = document.querySelector(".sccontact__content");
    const title = content?.querySelector(".sccontact__content-title");
    const btn = content?.querySelector(".btn");
    [title, btn].forEach((child) => {
      setSplitText((prev) => [...prev, SplitText.create(child as HTMLElement)]);
    });
  }, []);
  useGSAP(
    () => {
      if (splitText.length === 0) return;
      const content = document.querySelector(".sccontact__content");
      const title = content?.querySelector(".sccontact__content-title");
      const btn = content?.querySelector(".btn");
      [title, btn].forEach((child, index) => {
        gsap.set([title, btn], {
          overflow: "hidden",
        });
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
      });
    },
    {
      scope: contactRef,
      dependencies: [contactRef, splitText],
    }
  );
  return (
    <section id="sccontact" className="sccontact --ptb" ref={contactRef}>
      <div className="container">
        <div className="sccontact-wrapper">
          <div className="sccontact__content">
            <h2 className="sccontact__content-title">
              Share your idea with use
            </h2>
            <Link href="mailto:info@example.com" className="btn btn-link">
              furniturue@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
