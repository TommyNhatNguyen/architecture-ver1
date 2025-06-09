"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollSmoother);
    },
    {
      scope: pageRef,
    }
  );
  return (
    <div className="page-wrapper" ref={pageRef}>
      <main id="main" className="main">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
