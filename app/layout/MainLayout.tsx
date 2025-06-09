"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollSmoother);
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
    },
    {
      scope: pageRef,
    }
  );
  return (
    <div id="smooth-wrapper" className="page-wrapper" ref={pageRef}>
      <div id="smooth-content">
        <main id="main" className="main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
